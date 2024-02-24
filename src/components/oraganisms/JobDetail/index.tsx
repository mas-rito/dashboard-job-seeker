// @flow
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Sparkles } from "lucide-react";
import * as React from "react";
type Props = {};
export function JobDetail(props: Props) {
  const nilai = 2;
  const keseluruhan = 5;

  const persentase = (nilai / keseluruhan) * 100;

  return (
    <div className="pb-10">
      <div className="grid grid-cols-5 gap-x-10">
        <div className="col-span-3 space-y-10">
          <div>
            <h1 className="text-2xl font-semibold mb-2">Description</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
              architecto, qui debitis tenetur in corporis facilis dolores
              nostrum provident non. Laborum ipsa sed, voluptas a eius,
              consequatur veritatis modi voluptatibus possimus vel iure?
            </p>
          </div>
          <div>
            <h1 className="text-2xl font-semibold mb-2">Responsibilities</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
              architecto, qui debitis tenetur in corporis facilis dolores
              nostrum provident non. Laborum ipsa sed, voluptas a eius,
              consequatur veritatis modi voluptatibus possimus vel iure?
            </p>
          </div>
          <div>
            <h1 className="text-2xl font-semibold mb-2">Who You Are</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
              architecto, qui debitis tenetur in corporis facilis dolores
              nostrum provident non. Laborum ipsa sed, voluptas a eius,
              consequatur veritatis modi voluptatibus possimus vel iure?
            </p>
          </div>
          <div>
            <h1 className="text-2xl font-semibold mb-2">Nice-To-Have</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
              architecto, qui debitis tenetur in corporis facilis dolores
              nostrum provident non. Laborum ipsa sed, voluptas a eius,
              consequatur veritatis modi voluptatibus possimus vel iure?
            </p>
          </div>
        </div>
        <div className="col-span-2 space-y-4">
          <div>
            <h1 className="text-2xl font-semibold">About this job</h1>
            <div className="bg-gray-50 py-5 px-3 rounded">
              <p className="mb-3 text-center">
                2 <span className="text-muted-foreground">of 5 capacity</span>
              </p>
              <Progress value={persentase} className="bg-gray-200" />
              <Separator className="my-5" />
              <div className="space-y-4">
                <div className="w-full inline-flex items-center justify-between">
                  <h4 className="text-muted-foreground">Apply before</h4>
                  <h3 className="font-semibold">12 Aug 2023</h3>
                </div>
                <div className="w-full inline-flex items-center justify-between">
                  <h4 className="text-muted-foreground">Job posted on</h4>
                  <h3 className="font-semibold">12 Aug 2023</h3>
                </div>
                <div className="w-full inline-flex items-center justify-between">
                  <h4 className="text-muted-foreground">Job type</h4>
                  <h3 className="font-semibold">Full Time</h3>
                </div>
                <div className="w-full inline-flex items-center justify-between">
                  <h4 className="text-muted-foreground">Salary</h4>
                  <h3 className="font-semibold">$100 - $200 USD</h3>
                </div>
              </div>
            </div>
          </div>
          <Separator />
          <div>
            <h1 className="text-2xl font-semibold mb-5">Categories</h1>
            <div className="flex flex-wrap gap-3">
              <Badge>Design</Badge>
            </div>
          </div>
          <Separator />
          <div>
            <h1 className="text-2xl font-semibold mb-5">Required Skills</h1>
            <div className="flex flex-wrap gap-3">
              <Badge variant={"outline"}>HTML</Badge>
              <Badge variant={"outline"}>JavaScript</Badge>
            </div>
          </div>
        </div>
      </div>
      <Separator className="my-10" />
      <div>
        <h1 className="text-2xl font-semibold mb-5">Similar Jobs</h1>
        <div className="grid grid-cols-4 gap-4">
          {[1, 2, 3].map((item) => (
            <div key={item}>
              <Sparkles className="h-10 w-10 text-primary mb-4" />
              <h1 className="text-xl font-semibold mb-2">Frontend Developer</h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium ut, eos ipsum ab perferendis iste. Ipsum ullam
                blanditiis sequi adipisci rem assumenda id.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
