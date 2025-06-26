"use client";

import React, { useEffect, useState } from 'react'
import Icons from './Icons';

const ConnectWallet = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  if (!mounted) {
    return (
      <div className="px-2 rounded-lg h-full flex items-center justify-center gap-x-1.5">
        <span className="italic">Loading Wallet</span>
        <Icons.loader className="size-4 animate-spin" />
      </div> 
    )
  }

  return (
    <>
      <appkit-button />
    </>
  )
}

export default ConnectWallet