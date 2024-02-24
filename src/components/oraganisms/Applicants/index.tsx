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
import { JOB_APPLICANTS_COLUMNS, JOB_APPLICANTS_DATA } from "@/constants";
import jobApplicantType from "@/types/jobApplicants";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Button } from "@/components/ui/button";

type Props = {};
export default function Applicants(props: Props) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {JOB_APPLICANTS_COLUMNS.map((item: string, i: number) => (
            <TableHead key={item + i}>{item}</TableHead>
          ))}
          <TableHead className="text-center">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {JOB_APPLICANTS_DATA.map((item: jobApplicantType) => (
          <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.dateApplied}</TableCell>
            <TableCell className="text-center">
              <Button size="icon" variant="outline">
                <BsThreeDotsVertical />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
