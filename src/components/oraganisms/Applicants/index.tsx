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
import { JOB_APPLICANTS_COLUMNS } from "@/constants";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { Applicant, User } from "@prisma/client";

type Props = {
  applicants: Applicant[] | undefined;
};

type ItemType = {
  User?: User;
} & Applicant;

export default function Applicants({ applicants }: Props) {
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
        {applicants?.length === 0 ? (
          <TableRow>
            <TableCell
              colSpan={JOB_APPLICANTS_COLUMNS.length + 1}
              className="text-center"
            >
              No data
            </TableCell>
          </TableRow>
        ) : (
          applicants?.map((item: ItemType) => (
            <TableRow key={item.id}>
              <TableCell>{item.User?.name}</TableCell>
              <TableCell className="text-center">
                <Button size="icon" variant="outline">
                  <BsThreeDotsVertical />
                </Button>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
}
