// @flow
import { Button } from "@/components/ui/button";
import * as React from "react";
import { FiHome } from "react-icons/fi";
import { GoGear } from "react-icons/go";
import { IoMailOutline } from "react-icons/io5";
import { LuBuilding, LuNewspaper } from "react-icons/lu";
import { MdLogout, MdOutlineDateRange } from "react-icons/md";
type Props = {};
export const Sidebar = (props: Props) => {
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
      name: "Job Listing",
      icon: LuNewspaper,
      href: "/job-listing",
    },
    {
      name: "My Schedule",
      icon: MdOutlineDateRange,
      href: "/schedule",
    },
  ];

  const settingsMenus = [
    {
      name: "Settings",
      icon: GoGear,
      href: "/settings",
    },
    {
      name: "Logout",
      icon: MdLogout,
      href: "/logout",
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
          {settingsMenus.map((menu) => (
            <Button
              key={menu.name}
              variant={"ghost"}
              className={`w-full justify-start gap-x-2 rounded-none ${
                menu.name === "Logout"
                  ? "text-red-500 hover:bg-red-100 hover:text-red-500"
                  : "hover:text-primary"
              } `}
            >
              <menu.icon className="text-lg" />
              {menu.name}
            </Button>
          ))}
        </div>
      </div>
    </aside>
  );
};
