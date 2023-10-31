"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Home from "@/public/home.svg";
import Notification from "@/public/notification.svg";
import Shop from "@/public/heart-4.svg";
import Conversation from "@/public/message.svg";
import Wallet from "@/public/message-1.svg";
import Subscription from "@/public/favorite.svg";
import Profile from "@/public/profile.svg";
import Setting from "@/public/setting.svg";
import Image from "next/image";
import clsx from "clsx";

const links = [
  { name: "Home", href: "/", icon: Home },
  { name: "Notification", href: "/dashboard/notification", icon: Notification },
  { name: "Shop", href: "/dashboard/shop", icon: Shop },
  { name: "Conversation", href: "/dashboard/conversation", icon: Conversation },
  { name: "Wallet", href: "/dashboard/wallet", icon: Wallet },
  { name: "Subscription", href: "/dashboard/subcription", icon: Subscription },
  { name: "My Profile", href: "/dashboard/profile", icon: Profile },
  { name: "Settings", href: "/dashboard/settings", icon: Setting },
];

const Navlinks = () => {
  const pathname = usePathname();
  // const pathname = "home"
  return (
    <div className="w-full flex flex-col space-y-4">
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "pl-8 flex items-center h-[32px] border-l-4 border-[#88c2bb] text-[#101010] font-semibold",
              {
                "border-white hover:border-[#88c2bb] text-[#8D8D8D]":
                  pathname !== link.href,
              }
            )}
          >
            <Image src={link.icon} alt={link.name} className="mr-4" />
            <p>{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Navlinks;
