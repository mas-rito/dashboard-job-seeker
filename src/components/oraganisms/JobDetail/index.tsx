// @flow
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { dateFormat } from "@/lib/utils";
import BenefitType from "@/types/benefitType";
import { CategoryJob, Job } from "@prisma/client";
import { Sparkles } from "lucide-react";
import * as React from "react";

type JobDetailType = {
  CategoryJob: CategoryJob | null;
} & Job;

type Props = {
  detail: JobDetailType | null;
};
export function JobDetail({ detail }: Props) {
  const persentase = ((detail?.applicants || 0) / (detail?.needs || 0)) * 100;

  return (
    <div className="pb-10">
      <div className="grid grid-cols-5 gap-x-10">
        <div className="col-span-3 space-y-10">
          <div>
            <h1 className="text-2xl font-semibold mb-2">Description</h1>
            <div
              dangerouslySetInnerHTML={{ __html: detail?.description!! }}
            ></div>
          </div>
          <div>
            <h1 className="text-2xl font-semibold mb-2">Responsibilities</h1>
            <div
              dangerouslySetInnerHTML={{ __html: detail?.responsibility!! }}
            ></div>
          </div>
          <div>
            <h1 className="text-2xl font-semibold mb-2">Who You Are</h1>
            <div
              dangerouslySetInnerHTML={{ __html: detail?.whoYouAre!! }}
            ></div>
          </div>
          <div>
            <h1 className="text-2xl font-semibold mb-2">Nice-To-Have</h1>
            <div
              dangerouslySetInnerHTML={{ __html: detail?.niceToHave!! }}
            ></div>
          </div>
        </div>
        <div className="col-span-2 space-y-4">
          <div>
            <h1 className="text-2xl font-semibold">About this job</h1>
            <div className="bg-gray-50 py-5 px-3 rounded">
              <p className="mb-3 text-center">
                {detail?.applicants}{" "}
                <span className="text-muted-foreground">
                  of {detail?.needs} capacity
                </span>
              </p>
              <Progress value={persentase} className="bg-gray-200" />
              <Separator className="my-5" />
              <div className="space-y-4">
                <div className="w-full inline-flex items-center justify-between">
                  <h4 className="text-muted-foreground">Apply before</h4>
                  <h3 className="font-semibold">
                    {dateFormat(detail?.dueDate)}
                  </h3>
                </div>
                <div className="w-full inline-flex items-center justify-between">
                  <h4 className="text-muted-foreground">Job posted on</h4>
                  <h3 className="font-semibold">
                    {dateFormat(detail?.datePosted)}
                  </h3>
                </div>
                <div className="w-full inline-flex items-center justify-between">
                  <h4 className="text-muted-foreground">Job type</h4>
                  <h3 className="font-semibold">{detail?.jobType}</h3>
                </div>
                <div className="w-full inline-flex items-center justify-between">
                  <h4 className="text-muted-foreground">Salary</h4>
                  <h3 className="font-semibold">
                    ${detail?.salaryFrom} - ${detail?.salaryTo} USD
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <Separator />
          <div>
            <h1 className="text-2xl font-semibold mb-5">Categories</h1>
            <div className="flex flex-wrap gap-3">
              <Badge>{detail?.CategoryJob?.name}</Badge>
            </div>
          </div>
          <Separator />
          <div>
            <h1 className="text-2xl font-semibold mb-5">Required Skills</h1>
            <div className="flex flex-wrap gap-3">
              {detail?.requiredSkills?.map((item: string, i: number) => (
                <Badge key={item + i} variant={"outline"}>
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Separator className="my-10" />
      <div>
        <h1 className="text-2xl font-semibold mb-5">Perks & Benefits</h1>
        <div className="grid grid-cols-4 gap-4">
          {detail?.benefits &&
            (detail.benefits as BenefitType[]).map(
              (item: BenefitType, i: number) => (
                <div key={i}>
                  <Sparkles className="h-10 w-10 text-primary mb-4" />
                  <h1 className="text-xl font-semibold mb-2">{item.benefit}</h1>
                  <p className="text-sm">{item.description}</p>
                </div>
              )
            )}
        </div>
      </div>
    </div>
  );
}
