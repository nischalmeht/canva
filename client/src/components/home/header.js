"use client";

import { LogOut, Search } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "../ui/dropdown-menu";
import { Input } from "../ui/input";
// import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

function Header(){
    return (
        <header className="h-16 border-b border-gray-200 bg-white flex items-center px-6 fixed top-0 right-0 left-[72px] z-10">
            <div className="flex-1 max-w-2xl mx-auto relative">
            <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
          className="pl-10 py-6 border-gray-200 bg-gray-50 focus-visible:ring-purple-500 text-base"
          placeholder="Search your Projects and Canva's"
        />
            </div>
            <div className="flex items-center gap-5 ml-4">
                <div className="flex items-center gap-1 cursor-pointer ">
                    <DropdownMenu></DropdownMenu>
                </div>

            </div>
        </header>
    )
}
export default Header;
