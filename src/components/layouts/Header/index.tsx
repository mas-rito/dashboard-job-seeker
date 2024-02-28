"use client";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import * as React from "react";
import { FiPlus } from "react-icons/fi";
type Props = {};
export const Header = (props: Props) => {
  const router = useRouter();

  const navToCreateJob = () => {
    router.push("/post-job");
  };

  const { data: session } = useSession();

  return (
    <div className="flex flex-row items-center justify-between pb-3 mb-8 border-b border-border">
      <div>
        <div>
          <h1>Company</h1>
          {session?.user.name ? (
            <h2 className="font-semibold">{session?.user?.name}</h2>
          ) : (
            <div className="h-6 w-[180%] animate-pulse rounded bg-gray-300" />
          )}
        </div>
      </div>
      <div>
        <Button
          className="items-center gap-x-2 rounded-none py-3 px-6"
          onClick={navToCreateJob}
        >
          <FiPlus className="text-xl" />
          Post a Job
        </Button>
      </div>
    </div>
  );
};
