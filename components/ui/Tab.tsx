"use client";

import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Button } from './Button';
import { cn } from '@/lib/utils';

interface ITab {
  tabs: string[]
}

const Tab = ({ tabs }: ITab) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLSpanElement | null>(null);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  
  const isActive = (tab: string) => tab === activeTab;

  const getActiveTabPosition = useCallback(() => {
    const activeTabEle = document.querySelector(".a-tab");

    if (activeTabEle && indicatorRef.current && containerRef.current) {
      const tabRect = activeTabEle.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      const left = tabRect.left - containerRect.left;

      indicatorRef.current.style.setProperty("width", `${tabRect.width}px`);
      indicatorRef.current.style.setProperty("transform", `translateX(${left}px)`);
    }
  }, [activeTab]);

  const selectActiveTab = (tab: string) => {
    setActiveTab(tab);
    getActiveTabPosition();
  }

  useEffect(() => {
    getActiveTabPosition();

    window.addEventListener('resize', getActiveTabPosition);
    return () => window.removeEventListener('resize', getActiveTabPosition);
  }, [getActiveTabPosition]);

  return (
    <div 
      ref={containerRef}
      className="w-max relative bg-black rounded-full overflow-clip border border-white/10 z-10"
    >
      {tabs.map(tab => (
        <Button
          key={tab}
          variant="transparent"
          size="none"
          className={cn(
            "text-base capitalize py-1 px-3 rounded-none", 
            isActive(tab) ? "text-black font-bold a-tab" : "text-white/70"
          )}
          onClick={() => selectActiveTab(tab)}
        >
          {tab}
        </Button>
      ))}
      <span 
        ref={indicatorRef}
        className="h-full block absolute top-0 bg-[#17eeaa] rounded-full -z-10 transition-all duration-300" 
      />
    </div>
  )
}

export default Tab