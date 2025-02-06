"use client";

import { useState } from "react";

import CampaignCollection from "@/components/CampaignCollection";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const tabs = ["all campaigns", "your campaigns"];

export default function Home() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <main className="space-y-12">
      {/* Tabs */}
      <header className="flex items-center gap-x-2">
        {tabs.map(tab => (
          <Button
            key={tab}
            className={cn("text-xl capitalize", activeTab === tab ? "" : "bg-transparent")}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </Button>
        ))}  
      </header>    

      {/* Campaign Collection */}
      <CampaignCollection />
    </main>
  );
}
