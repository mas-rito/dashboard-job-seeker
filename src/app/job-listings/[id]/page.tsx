// @flow
import Link from "next/link";
import * as React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { GoDot } from "react-icons/go";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Applicants from "@/components/oraganisms/Applicants";
type Props = {};
export default function JobListingDetail({}: Props) {
  return (
    <div>
      <div className="inline-flex items-center gap-x-5 mb-10">
        <Link href={"/job-listings"}>
          <FiArrowLeft className="text-2xl lg:text-3xl" />
        </Link>
        <div>
          <h1 className="text-2xl font-semibold mb-2">Brand Designer</h1>
          <div className="inline-flex items-center gap-x-2">
            <p>Design</p>
            <GoDot className="text-sm" />
            <p>Full Time</p>
            <GoDot className="text-sm" />
            <p>2/5 Applicants</p>
          </div>
        </div>
      </div>
      <Tabs defaultValue="applicants">
        <TabsList className="mb-4">
          <TabsTrigger value="applicants">Applicants</TabsTrigger>
          <TabsTrigger value="jobdetails">Jobdetails</TabsTrigger>
        </TabsList>
        <TabsContent value="applicants">
          <Applicants />
        </TabsContent>
        <TabsContent value="jobdetails">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}
