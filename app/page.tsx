"use client";

import { useState } from "react";

import CampaignCollection from "@/components/CampaignCollection";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import UserCampaigns from "@/components/UserCampaigns";
import Tab from "@/components/ui/Tab";

const tabs = ["all campaigns", "your campaigns"];

export default function Home() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <main className="space-y-12">
      {/* Tabs */}
      <Tab tabs={tabs} />

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
