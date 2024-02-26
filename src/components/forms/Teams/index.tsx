// @flow
import { FieldInput } from "@/components/oraganisms/FieldInput";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import * as React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { DialogAddTeam } from "./DialogAddTeam";
type Props = {};
export function Teams(props: Props) {
  return (
    <FieldInput title="Teams" subtitle="Add your team members">
      <div className="pb-10">
        <div className="flex flex-row justify-between items-center">
          <h1 className="font-semibold">3 Members</h1>
          <DialogAddTeam />
        </div>
        <Separator className="my-4" />
        <div className="grid grid-cols-3 gap-5 my-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="w-full flex flex-col items-center gap-y-3 p-3 shadow rounded"
            >
              <div className="w-14 h-14 rounded-full bg-gray-300" />
              <div className="text-center">
                <h1 className="font-semibold">Rito Ramadhan</h1>
                <p className="text-sm text-muted-foreground">
                  Fullstack Developer
                </p>
              </div>
              <div className="flex flex-row items-center gap-x-1">
                <Link href={"https://github.com/mas-rito"} target="_blank">
                  <FaLinkedin className="text-lg" />
                </Link>
                <Link href={"https://github.com/mas-rito"} target="_blank">
                  <FaInstagram className="text-lg" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FieldInput>
  );
}
