import WishlistButton from './WishlistButton'
import Link from 'next/link'
import CountdownTimer from './CountdownTimer'
import { cn } from '@/lib/utils'
import { buttonVariants } from './ui/Button'

const CampaignCollectionItem = () => {
    return (
      <blockquote
        className="rounded-lg bg-gray-900/50 border border-gray-500/20 grid grid-rows-[40%_1fr] px-2 slg:p-3 gap-y-2.5"
      >
        <figure>
          <img 
            src="https://placehold.co/600x400/FFFFFF/000000.png"
            className="size-full object-cover rounded-lg"
          />
        </figure>
  
        {/* Content */}
        <div className="grid gap-y-0.5 slg:gap-y-1">
          <header className="space-y-2 slg:space-y-2.5">
            <h3 className="text-base slg:text-lg font-semibold text-ellipsis whitespace-nowrap overflow-hidden">Fundraiser Text3</h3>
  
            {/* Progress */}
            <div className="h-2 w-full rounded-full bg-gray-800/70">
              <div className="w-1/2 h-full bg-gradient-to-tr from-blue-500 to-emerald-500 rounded-full relative">
                {/* Stat */}
                <div className="absolute top-1/2 -right-1 py-[1.5px] -translate-y-1/2 w-[37%] bg-gradient-to-tr from-blue-500 to-emerald-500 flex items-center justify-center rounded-tr-[2rem] rounded-br-[2rem] rounded-lg text-xs font-bold">
                  50%
                </div>
              </div>
            </div>
          </header>
  
          {/* Stats */}
          <div className="bg-gray-900/75 -mx-2 slg:-mx-3 mt-2 slg:mt-4 grid grid-cols-3 items-center py-2 slg:py-2.5 border-y border-black">
            <div className="text-center -space-y-1">
              <span className="text-xs slg:text-sm opacity-75">Raised</span>
              <h4 className="text-[.99rem] slg:text-[1.03rem] font-semibold">$5416</h4>
            </div>
  
            <div className="text-center -space-y-1">
              <span className="text-xs slg:text-sm opacity-75">Goals</span>
              <h4 className="text-[.99rem] slg:text-[1.03rem] font-semibold">$31,512</h4>
            </div>
  
            <div className="text-center -space-y-1">
              <span className="text-xs slg:text-sm opacity-75">Left</span>
              <h4 className="text-[.99rem] slg:text-[1.03rem] font-semibold">$0</h4>
            </div>
          </div>
  
          <div className="flex items-center justify-between gap-x-3 py-2 slg:pt-1 slg:pb-0">
            <CountdownTimer />
            
            <div className="flex items-center gap-x-1.5">
              {/* Wishlist Button */}
              <WishlistButton />
  
              {/* View Button */}
              <Link 
                href="/"
                className={cn(buttonVariants({ variant: "link", size: "link" }))}
              >View</Link>
            </div>
          </div>
        </div>
      </blockquote>
    )
}

export default CampaignCollectionItem