import WishlistButton from './WishlistButton'
import Link from 'next/link'
import CountdownTimer from './CountdownTimer'
import { cn } from '@/lib/utils'
import { buttonVariants } from './ui/Button';
import { FC } from 'react';

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
    return (
      <blockquote className="w-full h-fit rounded-lg bg-gray-900/50 border border-gray-500/20 grid grid-rows-[7rem_1fr] gap-y-2.5 overflow-hidden pb-2 slg:pb-3">
        <figure className='size-full bg-white/60 overflow-hidden'>
          <img 
            src="https://placehold.co/600x400/FFFFFF/000000.png"
            className="size-full object-cover"
          />
        </figure>
  
        {/* Content */}
        <div className="grid gap-y-1.5 slg:gap-y-2.5">
          <header className="-space-y-1 slg:space-y-1 px-2 slg:px-3">
            <h3 className="text-base slg:text-[17px] font-semibold text-ellipsis whitespace-nowrap overflow-hidden line-clamp-1">Fundraiser Text3</h3>
  
            {/* Progress */}
            <CampaignItemProgress progress={50} />
          </header>
  
          {/* Stats */}
          <div className="bg-gray-900/75 grid grid-cols-3 items-center py-2 slg:py-2.5 border-y border-black">
            <div className="text-center -space-y-0.5">
              <span className="text-xs slg:text-[13px] opacity-75">Raised</span>
              <h4 className="text-[.99rem] slg:text-[1.03rem] font-semibold">$5416</h4>
            </div>
  
            <div className="text-center -space-y-0.5">
              <span className="text-xs slg:text-[13px] opacity-75">Goal</span>
              <h4 className="text-[.99rem] slg:text-[1.03rem] font-semibold">$31,512</h4>
            </div>
  
            <div className="text-center -space-y-0.5">
              <span className="text-xs slg:text-[13px] opacity-75">Left</span>
              <h4 className="text-[.99rem] slg:text-[1.03rem] font-semibold">$0</h4>
            </div>
          </div>
  
          <div className="flex flex-col gap-y-2 py-2 slg:pt-1 slg:pb-0 px-2 slg:px-3">
            <div  className="flex items-center justify-between gap-x-1.5">
              <CountdownTimer className="font-semibold rounded-md" />

              {/* Wishlist Button */}
              <WishlistButton />
            </div>
  
            {/* View Button */}
            <Link 
              href="/"
              className={cn(buttonVariants({ 
                variant: "default", 
                size: "default",
                width: "full" 
              }))}
            >
              View
            </Link>
          </div>
        </div>
      </blockquote>
    )
}

export default CampaignCollectionItem