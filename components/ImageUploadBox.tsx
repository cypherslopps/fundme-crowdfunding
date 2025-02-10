"use client";

import React, { FC, useState } from 'react'

import { FilePond, registerPlugin } from 'react-filepond'

import 'filepond/dist/filepond.min.css'

import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import { FilePondFile, FilePondInitialFile } from 'filepond'
import { nanoid } from "nanoid";
import supabase from '@/services/supabase';

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

interface ServerProps {
    process: (
      fieldName: string,
      file: File,
      metadata: object,
      load: (uniqueFileId?: string | { [key: string]: any }) => void,
      error: (errorMessage: string) => void,
      progress: (shouldComplete: boolean, loaded: number, total: number) => void,
      abort: () => void,
      transfer: (base64Data: string) => void,
      options: object
    ) => void;
}

interface ImageUploadBoxProps {
    setImage: (source: string) => void
}

const ImageUploadBox: FC<ImageUploadBoxProps> = ({ setImage }) => {
    const [files, setFiles] = useState<FilePondFile[]>([]);

    const handleServer: ServerProps['process'] = async (
        fieldName, 
        file, 
        metadata, 
        load, 
        error,
        progress, 
        abort, 
        transfer, 
        options
    ) => {
        if (file) {
            const filename = nanoid();
            const fileExt = file?.name.split(".").pop();
            const newFileName = `${filename}.${fileExt}`;
    
            try {
                progress(false, 0, file.size);

                const { data: supabaseResponseData, error: uploadError } = await supabase.storage
                    .from("campaignImages")
                    .upload(
                        newFileName,
                        file,
                        {
                            cacheControl: "3600",
                            upsert: false,
                            contentType: file.type
                        }
                    );
    
                    console.log(supabaseResponseData, "response", filename, file)

                if (uploadError) {
                    console.log("Supabase upload error", uploadError.message);
                    error(uploadError.message);

                    return {
                        abort: () => {
                            console.log("Aborting upload");
                            abort();
                        },
                    };
                } 

                // Report progress as complete
                progress(true, file.size, file.size);
                
                const { data: publicUrlData } = await supabase.storage
                    .from("campaignImages")
                    .getPublicUrl(supabaseResponseData?.path);

                progress(true, 1, 1);
                load(publicUrlData.publicUrl);

                // Set image public url
                setImage(publicUrlData.publicUrl);
                
            } catch (err) {
                // 
                return {
                    abort: () => {
                        abort(); // Abort FilePond upload
                    },
                };
            }
        }
    }

    return (
        <>
            <FilePond
                files={(files as unknown) as FilePondInitialFile[]}
                onupdatefiles={setFiles}
                allowMultiple={false}
                maxFiles={1}
                server={{ process: handleServer }}
                name="files"
                labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                className="filepond_wrap"
            />
        </>
    )
}

export default ImageUploadBox