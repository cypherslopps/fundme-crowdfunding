import Link from 'next/link'
import React from 'react'
import SearchBox from './SearchBox'
import { Button, buttonVariants } from './ui/Button'
import Icons from './Icons'
import { cn } from '@/lib/utils'
// import { ConnectButton } from '@rainbow-me/rainbowkit'
import ConnectWallet from './ConnectWallet'

const Navigation = () => {
  return (
    <nav className="bg-grey-50/30 backdrop-blur-lg flex items-center justify-between px-5 py-4 fixed top-0 left-0 w-full z-50">
        <Link 
            href="/"
            className="text-3xl font-black font-bebas"
        >
            FundMe
        </Link>

        {/* Search Box */}
        <SearchBox />

        <div className='h-full flex items-center gap-x-2 nav-a'>
            <Link
                href="/create-campaign"
                className={cn(
                    buttonVariants({ size: 'none' }), 
                    "h-10 px-3 text-lg divide-x-2 divide-blue-400/50 gap-x-2 rounded-[.4rem] font-bebas"
                )}
            >
                <span>Create Campaign</span>
                <span className="pl-2">
                    <Icons.plus className="shrink-0 size-6" />
                </span>
            </Link>

            {/* Connect Wallet */}
            <ConnectWallet />
        </div>
    </nav>
  )
}

export default Navigation