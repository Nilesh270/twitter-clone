import {
  ChartBarIcon,
  ChatIcon,
  HeartIcon,
  ShareIcon,
} from "@heroicons/react/outline";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
import React from "react";

const Post = ({ post }) => {
  return (
    <div className="flex p-3 cursor-pointer border-b border-gray-200">
      <img className="h-12 w-12 rounded mr-4" src={post.img}></img>

      <div className="">
        <div className="flex justify-between items-center whitespace-nowrap ">
          <div className="flex space-x-2 items-center">
            <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">
              {post.name}
            </h4>
            <span className="text-gray-600 text-sm sm:text-[15px]">
              {post.username}
            </span>
            <span className="text-gray-600 text-sm sm:text-[15px]">
              .{post.timestamp}
            </span>
          </div>

          <DotsHorizontalIcon className="h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500 p-2 text-gray-600" />
        </div>

        <p className="text-gray-800 text-[15px sm:text-[16px] mb-2">
          {post.content}
        </p>

        <img className="rounded-2xl mr-2" src={post.post}></img>

        <div className="flex justify-between p-2 text-gray-500">
          <ChatIcon className="h-9 w-9 hoverEffect rounded-full hover:bg-blue-200 p-2" />
          <HeartIcon className="h-9 w-9 hoverEffect rounded-full hover:bg-red-200 p-2" />
          <ShareIcon className="h-9  w-9 hoverEffect rounded-full hover:bg-blue-200 p-2" />
          <ChartBarIcon className="h-9 w-9 hoverEffect rounded-full hover:bg-blue-200 p-2" />
        </div>
      </div>
    </div>
  );
};

export default Post;
