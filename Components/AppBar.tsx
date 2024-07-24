import React from "react";
import { Input } from "./ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

export const AppBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex p-3 justify-between m-2 border-b border-slate-300 bg-white">
      <div className="flex justify-center p-1 rounded-md">
       <div className="flex"><Icon/></div>
       <span className="pl-2 text-neutral-500 text-md min-w-[128px]">StockInsights</span>
      </div>
      <div>
        <Input type="search" placeholder="Search" />
      </div>
      <div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

function Icon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="25" fill="none">
      <path
        fill="#231F1F"
        d="M18.12 0H4.88C2.185 0 0 2.374 0 5.304v14.392C0 22.626 2.185 25 4.88 25h13.24c2.695 0 4.88-2.375 4.88-5.304V5.304C23 2.374 20.816 0 18.12 0m.787 8.685-5.379 5.846a.754.754 0 0 1-1.128 0l-2.205-2.396-4.974 5.406a.76.76 0 0 1-.564.254.76.76 0 0 1-.564-.254.92.92 0 0 1 0-1.227l5.538-6.019a.77.77 0 0 1 .564-.254c.211 0 .414.091.564.254l2.205 2.397 4.815-5.234a.754.754 0 0 1 1.128 0 .92.92 0 0 1 0 1.227"
      ></path>
    </svg>
  );
}
