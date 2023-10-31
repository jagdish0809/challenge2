import React from "react";
import Header from "@/app/components/header";
import SideNav from "@/app/components/sidenav";
import Home from "@/app/components/home";
import Rightside from "@/app/components/rightside";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-[30px] pt-[40px]">
      <Header />
      <div className="max-w-[1200px] w-[96vw] flex space-x-[30px]">
        <SideNav />
        <Home />
        <Rightside />
      </div>
    </div>
  );
};

export default page;
