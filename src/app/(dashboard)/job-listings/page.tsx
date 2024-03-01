// @flow
import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { JOB_LISTINGS_COLUMNS } from "@/constants";
import { Badge } from "@/components/ui/badge";
import { FaEye } from "react-icons/fa6";
import Link from "next/link";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/authOptions";
import prisma from "@/lib/prisma";
import { Job } from "@prisma/client";
import { dateFormat } from "@/lib/utils";
import moment from "moment";

type Props = {};

export async function getDataJobs() {
  const session = await getServerSession(authOptions);
  const jobs = await prisma.job.findMany({
    where: {
      companyId: session?.user?.id,
    },
  });
  return jobs;
}
export default async function JobListings({}: Props) {
  const jobs = await getDataJobs();
  return (
    <div>
      <h1 className="text-3xl font-semibold">Job Listings</h1>
      <div className="mt-10">
        <Table>
          <TableHeader>
            <TableRow>
              {JOB_LISTINGS_COLUMNS.map((item: string, i: number) => (
                <TableHead key={item + i}>{item}</TableHead>
              ))}
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {jobs.map((item: Job) => (
              <TableRow key={item.id}>
                <TableCell>{item.roles}</TableCell>
                <TableCell>
                  {moment(item.datePosted).isBefore(item.dueDate) ? (
                    <Badge>Open</Badge>
                  ) : (
                    <Badge variant="destructive">Closed</Badge>
                  )}
                </TableCell>
                <TableCell>{dateFormat(item.datePosted)}</TableCell>
                <TableCell>{dateFormat(item.dueDate)}</TableCell>
                <TableCell>
                  <Badge variant={"outline"}>{item.jobType}</Badge>
                </TableCell>
                <TableCell>{item.applicants}</TableCell>
                <TableCell>
                  {item.applicants}/{item.needs}
                </TableCell>
                <TableCell>
                  <Link
                    href={`/job-listings/${item.id}`}
                    className="block w-fit p-2 rounded border border-border hover:bg-muted transition-colors"
                  >
                    <FaEye className="text-xl" />
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
