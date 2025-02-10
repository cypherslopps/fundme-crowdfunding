import Link from 'next/link'
import React from 'react'
import SearchBox from './SearchBox'
import { Button, buttonVariants } from './ui/Button'
import ModeToggle from './ModeToggle'
import Icons from './Icons'
import { cn } from '@/lib/utils'
// import { ConnectButton } from '@rainbow-me/rainbowkit'
import ConnectWallet from './ConnectWallet'

const Navigation = () => {
  return (
    <nav className="bg-zinc-950 border-b border-zinc-800 flex items-center justify-between px-5 py-2.5 fixed top-0 left-0 w-full z-50 backdrop-blur-lg">
        <Link 
            href="/"
            className="text-2xl font-extrabold font-mono"
        >
            FundMe
        </Link>

        {/* Search Box */}
        <SearchBox />

        <div className='h-full flex items-center gap-x-2'>
            <Link
                href="/create-campaign"
                className={cn(buttonVariants({ size: 'none' }), "h-10 px-3 divide-x-2 divide-blue-400/50 gap-x-2")}
            >
                <span>Create Campaign</span>
                <span className="pl-2">
                    <Icons.plus className="shrink-0 size-6" />
                </span>
            </Link>

            {/* Theme Toggler */}
            <ModeToggle />

            {/* Connect Wallet */}
            {/* <ConnectButton /> */}
            <ConnectWallet />
        </div>
    </nav>
  )
}

export default Navigation