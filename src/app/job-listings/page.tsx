// @flow
import * as React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { JOB_LISTINGS_COLUMNS, JOB_LISTINGS_DATA } from "@/constants";
import jobListingType from "@/types/jobListing";
import { Badge } from "@/components/ui/badge";
import { HiDotsVertical } from "react-icons/hi";
import { Button } from "@/components/ui/button";

type Props = {};
export default function JobListings({}: Props) {
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
            {JOB_LISTINGS_DATA.map((item: jobListingType) => (
              <TableRow key={item.id}>
                <TableCell>{item.role}</TableCell>
                <TableCell>
                  <Badge>{item.status}</Badge>
                </TableCell>
                <TableCell>{item.datePosted}</TableCell>
                <TableCell>{item.dueDate}</TableCell>
                <TableCell>
                  <Badge variant={"outline"}>{item.jobType}</Badge>
                </TableCell>
                <TableCell>{item.applicants}</TableCell>
                <TableCell>
                  {item.applicants}/{item.needs}
                </TableCell>
                <TableCell>
                  <Button variant="outline">
                    <HiDotsVertical />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
