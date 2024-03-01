// @flow
import Link from "next/link";
import * as React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { GoDot } from "react-icons/go";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Applicants from "@/components/oraganisms/Applicants";
import { JobDetail } from "@/components/oraganisms/JobDetail";
import prisma from "@/lib/prisma";
type Props = {
  params: {
    id: string;
  };
};

async function getDataJobs(id: string) {
  const job = await prisma.job.findFirst({
    where: {
      id: id,
    },
    include: {
      Applicant: {
        include: {
          User: true,
        },
      },
      CategoryJob: true,
    },
  });

  return job;
}
export default async function JobListingDetail({ params }: Props) {
  const job = await getDataJobs(params.id);

  return (
    <div>
      <div className="inline-flex items-center gap-x-5 mb-10">
        <Link href={"/job-listings"}>
          <FiArrowLeft className="text-2xl lg:text-3xl" />
        </Link>
        <div>
          <h1 className="text-2xl font-semibold mb-2">{job?.roles}</h1>
          <div className="inline-flex items-center gap-x-2">
            <p>{job?.CategoryJob?.name}</p>
            <GoDot className="text-sm" />
            <p>{job?.jobType}</p>
            <GoDot className="text-sm" />
            <p>
              {job?.applicants}/{job?.needs} Applicants
            </p>
          </div>
        </div>
      </div>
      <Tabs defaultValue="applicants">
        <TabsList className="mb-4">
          <TabsTrigger value="applicants">Applicants</TabsTrigger>
          <TabsTrigger value="jobdetails">Jobdetails</TabsTrigger>
        </TabsList>
        <TabsContent value="applicants">
          <Applicants applicants={job?.Applicant} />
        </TabsContent>
        <TabsContent value="jobdetails">
          <JobDetail detail={job} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
