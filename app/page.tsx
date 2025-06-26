"use client";

import { useState } from "react";

import CampaignCollection from "@/components/CampaignCollection";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import UserCampaigns from "@/components/UserCampaigns";

const tabs = ["all campaigns", "your campaigns"];

export default function Home() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <main className="space-y-12">
      {/* Tabs */}
      <header className="flex items-center gap-x-6 bg-red-300 rounded-xl w-max">
        {tabs.map(tab => (
          <Button
            key={tab}
            variant="transparent"
            size="none"
            className={cn("text-base capitalize border-b-4 py-1 rounded-none", activeTab === tab ? "font-bold border-emerald-400" : "border-transparent")}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </Button>
        ))}  
      </header>    

      {/* Campaign Collection */}
      {/* {activeTab === "all campaigns" && (
        <CampaignCollection />
      )} */}

      {/* Your Campaign Collection */}
      {/* {activeTab === "your campaigns" && (
        <UserCampaigns />
      )} */}
    </main>
  );
}
