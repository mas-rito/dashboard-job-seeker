// @flow
import * as React from "react";
type Props = {
  title: string;
  subtitle: string;
};
export function TitleForm({ title, subtitle }: Props) {
  return (
    <>
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-400">{subtitle}</p>
    </>
  );
}
