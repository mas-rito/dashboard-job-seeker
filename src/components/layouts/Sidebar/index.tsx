"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import * as React from "react";
import { FiHome } from "react-icons/fi";
import { GoGear } from "react-icons/go";
import { IoMailOutline } from "react-icons/io5";
import { LuBuilding, LuNewspaper } from "react-icons/lu";
import { MdLogout, MdOutlineDateRange } from "react-icons/md";
type Props = {};
export const Sidebar = (props: Props) => {
  // const pathname = window.location.pathname;
  const router = useRouter();
  const dashboardMenus = [
    {
      name: "Home",
      icon: FiHome,
      href: "/",
    },
    {
      name: "Messages",
      icon: IoMailOutline,
      href: "/message",
    },
    {
      name: "Company Profile",
      icon: LuBuilding,
      href: "/company-profile",
    },
    {
      name: "Job Listings",
      icon: LuNewspaper,
      href: "/job-listings",
    },
    {
      name: "My Schedule",
      icon: MdOutlineDateRange,
      href: "/schedule",
    },
  ];

  return (
    <aside className="pb-12 min-h-screen">
      <div className="py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Dashboard</h2>
          <div className="space-y-3">
            {dashboardMenus.map((menu) => (
              <Button
                key={menu.name}
                variant={"ghost"}
                className="w-full justify-start gap-x-2 rounded-none hover:text-primary"
                onClick={() => router.push(menu.href)}
              >
                <menu.icon className="text-lg" />
                {menu.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Settings</h2>
          <Button
            variant={"ghost"}
            className="w-full justify-start gap-x-2 rounded-none hover:text-primary"
            onClick={() => router.push("/settings")}
          >
            <GoGear className="text-lg" />
            Settings
          </Button>
          <Button
            variant={"ghost"}
            className="w-full justify-start gap-x-2 rounded-none
                text-red-500 hover:bg-red-100 hover:text-red-500"
          >
            <MdLogout className="text-lg" />
            Logout
          </Button>
        </div>
      </div>
    </aside>
  );
};
