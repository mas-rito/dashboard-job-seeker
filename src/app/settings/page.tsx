// @flow
import Overview from "@/components/forms/Overview";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import * as React from "react";
type Props = {};
export default function Settings(props: Props) {
  return (
    <div className="space-y-10">
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
          <div>
            <h1>Social Links</h1>
          </div>
        </TabsContent>
        <TabsContent value="teams">
          <div>
            <h1>Teams</h1>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
