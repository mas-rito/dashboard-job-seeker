"use client";
import { TitleForm } from "@/components/atoms/TitleForm";
import { Separator } from "@/components/ui/separator";
import overviewSchema from "@/lib/formSchemas/overviewSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
type Props = {};
export default function Overview(props: Props) {
  const form = useForm<z.infer<typeof overviewSchema>>({
    resolver: zodResolver(overviewSchema),
  });

  const onSubmit = (data: z.infer<typeof overviewSchema>) => {
    console.log(data);
  };

  return (
    <div>
      <div className="my-5">
        <TitleForm
          title="Basic Information"
          subtitle="This is company information that you can update anytime"
        />
      </div>
      <Separator />
    </div>
  );
}
