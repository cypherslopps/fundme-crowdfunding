import Image from 'next/image';
import { FC, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

import { cn } from '@/lib/utils'
import CanvasRevealEffect from './ui/CanvasRevealBox';

interface CampaignItemProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  progress: number;
}

export const CampaignItemProgress: FC<CampaignItemProgressProps> = ({ progress, className }) => {
  return (
     <div className={cn("h-1.5 w-full rounded-full bg-gray-800/70", className)}>
      <div 
        className="h-full bg-gradient-to-tr from-emerald-500 to-purple-500 rounded-full relative select-none"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

const CampaignCollectionItem = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <blockquote 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="border border-white/[0.2] group/canvas-card w-full mx-auto relative h-[27rem] grid grid-rows-[75%_1fr] p-1.5 gap-1"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />
 
      <figure className="relative overflow-hidden rounded-[.4rem]">
        <AnimatePresence>
          {isHovered ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="size-full relative"
            >
              <Image 
                src="/images/img.jpg"
                alt="alt"
                fill
              />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-full"
            >
              <CanvasRevealEffect
                animationSpeed={5.1}
                containerClassName="bg-black"
                colors={[
                  [14, 80, 225],
                  [54, 14, 225]
                ]}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </figure>
 
      <div className="relative p-1 space-y-0.5">
        <header className="-space-y-1.5">
          <h1 className="font-bebas text-2xl font-extrabold">Campaign Title</h1>
          <p className="text-[15.5px] text-white/80">Campaign One-liner</p>
        </header>

        <div>
          <div className="flex items-center justify-between gap-x-3">
            <div className="font-bebas flex items-center gap-x-0.5 text-[17px]">
              <span className="">Obj</span>
              <span>-</span>
              <span>$500</span>
            </div>

            <div className="font-bebas flex items-center gap-x-0.5 text-[17px]">
              <span className="">Raised</span>
              <span>-</span>
              <span>$500</span>
            </div>
          </div>

          {/* Progress */}
          <div className="w-full h-4 rounded-full bg-gray-800">
            <div className="w-[40%] h-full rounded-full bg-rose-500 flex items-center justify-end px-1.5">
              <span className="text-sm leading-none font-extrabold text-black font-bebas mt-0.5">50%</span>
            </div>
          </div>
        </div>
      </div>
    </blockquote>
  )
}

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default CampaignCollectionItem