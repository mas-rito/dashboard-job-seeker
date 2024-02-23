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
      <div className="grid grid-cols-5 gap-6 items-start">
        <div className="col-span-5 md:col-span-2">
          <h1 className="text-lg font-semibold">{title}</h1>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
        <div className="col-span-5 md:col-span-3">{children}</div>
      </div>

      <Separator />
    </>
  );
};
