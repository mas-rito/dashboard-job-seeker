"use client";
import postJobSchema from "@/lib/formSchemas/postJobSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
type Props = {};
const PostJobPage = (props: Props) => {
  const form = useForm<z.infer<typeof postJobSchema>>({
    resolver: zodResolver(postJobSchema),
    defaultValues: {
      requiredSkills: [],
    },
  });

  const onSubmit = (values: z.infer<typeof postJobSchema>) => {
    console.log(values);
  };
  return (
    <div>
      <h1>Post Job</h1>
    </div>
  );
};

export default PostJobPage;
