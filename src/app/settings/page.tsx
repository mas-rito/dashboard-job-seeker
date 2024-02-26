// @flow
import Overview from "@/components/forms/Overview";
import SocialLinks from "@/components/forms/SocialLinks";
import { Teams } from "@/components/forms/Teams";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import * as React from "react";
type Props = {};
export default function Settings(props: Props) {
  return (
    <div className="space-y-10 pb-10">
      <h1 className="text-3xl font-semibold">Settings</h1>
      <Tabs defaultValue="overview">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="socialLinks">Social Links</TabsTrigger>
          <TabsTrigger value="teams">Teams</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Overview />
        </TabsContent>
        <TabsContent value="socialLinks">
          <SocialLinks />
        </TabsContent>
        <TabsContent value="teams">
          <Teams />
        </TabsContent>
      </Tabs>
    </div>
  );
}
