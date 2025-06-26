"use client";

import React, { useState } from 'react'
import { Button } from './Button';
import { cn } from '@/lib/utils';

interface ITab {
  tabs: string[]
}

const Tab = ({ tabs }: ITab) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  
  const isActive = (tab: string) => tab === activeTab;

  return (
    <div className="relative">
      {tabs.map(tab => (
        <Button
          key={tab}
          variant="transparent"
          size="none"
          className={cn(
            "text-base capitalize border-b-4 py-1 rounded-none", 
            isActive(tab) ? "font-bold border-emerald-400" : "border-transparent"
          )}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </Button>
      ))}
    </div>
  )
}

export default Tab