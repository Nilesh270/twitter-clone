import React from "react";
import SideBarMenuItem from "./SideBar/SideBarMenuItem";

import { HomeIcon } from "@heroicons/react/solid";
import {
  BellIcon,
  BookmarkIcon,
  ClipboardIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
  HashtagIcon,
  InboxIcon,
  UserIcon,
} from "@heroicons/react/outline";

const Sidebar = ({user}) => {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24">
      <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
        <img
          height="50"
          width="50"
          src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
        ></img>
      </div>

      <div className="mt-4 mb-2.5 xl:items-start">
        <SideBarMenuItem text="Home" Icon={HomeIcon} active />
        <SideBarMenuItem text="Explore" Icon={HashtagIcon} />
        {user && (
          <>
            <SideBarMenuItem text="Notifications" Icon={BellIcon} />
            <SideBarMenuItem text="Messages" Icon={InboxIcon} />
            <SideBarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
            <SideBarMenuItem text="Lists" Icon={ClipboardIcon} />
            <SideBarMenuItem text="Profile" Icon={UserIcon} />
            <SideBarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
          </>
        )}
      </div>

      <button className=" text-white bg-blue-400 rounded-full w-52 h-12 font-bold shadow-md hover:brightness-95  text-lg hidden xl:inline ">
        Tweet
      </button>

      <div className=" hoverEffect flex text-gray-700 items-center justify-center xl:justify-start mt-auto px-2 h-12">
        <img
          height="100"
          width="100"
          className="h-10 w-10 rounded-full xl:mr-2"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwQQTS4NPqnCGbJPd4x7O_YJNOJ5gH6KkejH3nhVfIhxwwJPHEotjPs0VCpGg-UcybvxM&usqp=CAU"
        ></img>
        <div className="leading-5 hidden xl:inline">
          <h4 className="font-bold">Nilesh Balotiya</h4>
          <p className="text-gray-500">@programmer</p>
        </div>
        <DotsHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
      </div>
    </div>
  );
};

export default Sidebar;
