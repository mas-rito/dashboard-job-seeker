// @flow
import { FieldInput } from "@/components/oraganisms/FieldInput";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import * as React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { DialogAddTeam } from "./DialogAddTeam";
import { CompanyTeam } from "@prisma/client";
type Props = {
  teams: CompanyTeam[] | undefined;
};
export function Teams({ teams }: Props) {
  return (
    <FieldInput title="Teams" subtitle="Add your team members">
      <div className="pb-10">
        <div className="flex flex-row justify-between items-center">
          <h1 className="font-semibold">{teams?.length} Members</h1>
          <DialogAddTeam />
        </div>
        <Separator className="my-4" />
        <div className="grid grid-cols-3 gap-5 my-6">
          {teams?.map((item) => (
            <div
              key={item.id}
              className="w-full flex flex-col items-center gap-y-3 p-3 shadow rounded"
            >
              <div className="w-14 h-14 rounded-full bg-gray-300" />
              <div className="text-center">
                <h1 className="font-semibold">{item.name}</h1>
                <p className="text-sm text-muted-foreground">{item.position}</p>
              </div>
              <div className="flex flex-row items-center gap-x-1">
                {item.linkedin && (
                  <Link href={item.linkedin} target="_blank">
                    <FaLinkedin className="text-lg" />
                  </Link>
                )}
                {item.instagram && (
                  <Link href={item.instagram} target="_blank">
                    <FaInstagram className="text-lg" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </FieldInput>
  );
}
