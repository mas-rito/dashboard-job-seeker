import Overview from "@/components/forms/Overview";
import SocialLinks from "@/components/forms/SocialLinks";
import { Teams } from "@/components/forms/Teams";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import authOptions from "@/lib/authOptions";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import * as React from "react";

async function getDetailCompany() {
  const session = await getServerSession(authOptions);
  const company = await prisma.company.findFirst({
    where: {
      id: session?.user?.id,
    },
    include: {
      CompanyOverView: true,
      CompanySocialMedia: true,
    },
  });
  return company;
}
export default async function Settings() {
  const company = await getDetailCompany();

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
          <Overview detail={company?.CompanyOverView[0]} />
        </TabsContent>
        <TabsContent value="socialLinks">
          <SocialLinks detail={company?.CompanySocialMedia[0]} />
        </TabsContent>
        <TabsContent value="teams">
          <Teams />
        </TabsContent>
      </Tabs>
    </div>
  );
}
