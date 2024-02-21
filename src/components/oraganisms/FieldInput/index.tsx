// @flow
import { Separator } from "@/components/ui/separator";
import * as React from "react";
type Props = {
  children: React.ReactNode;
  title: string;
  subtitle: string;
};
export const FieldInput = ({ children, title, subtitle }: Props) => {
  return (
    <>
      <div className="flex flex-row items-start">
        <div className="w-2/5">
          <h1 className="text-lg font-semibold">{title}</h1>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
        <div className="w-3/5">{children}</div>
      </div>

      <Separator />
    </>
  );
};
