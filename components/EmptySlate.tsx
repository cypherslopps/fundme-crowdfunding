import React from 'react'
import ConnectWallet from './ConnectWallet'
import Icons from './Icons'

const EmptySlate = () => {
  return (
    <section className="h-[60vh] flex flex-col items-center justify-center gap-y-4">
      <Icons.book className='size-20 mb-2' />
      <div className='space-y-0.5 text-center'>
        <h1 className="text-3xl font-bold">No Campaigns</h1>
        <p className="text-base text-gray-400/90">Connect wallet to view campaigns</p>
      </div>
      <ConnectWallet />
    </section>
  )
}

export default EmptySlate