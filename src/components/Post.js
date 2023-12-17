import {
  ChartBarIcon,
  DotsHorizontalIcon,
  HeartIcon,
  ShareIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import { ChatIcon } from "@heroicons/react/outline";
import Image from "next/image";
const Post = ({ post }) => {
  return (
    <div className="flex cursor-pointer p-3 border-b border-gray-200 pr-6">
      {/*Image*/}
      <Image
        width={"50"}
        height={"50"}
        className="h-11 w-11 rounded-full mr-4 hover:brightness-95"
        src={post.userImg}
        alt="user-image"
      />
      {/* Right side */}
      <div className="">
        {/* Header */}
        <div className=" flex items-center justify-between ">
          {/*  user info*/}
          <div className="flex items-center space-x-3 whitespace-nowrap">
            <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">
              {post.name}
            </h4>
            <span className="text-sm text-[14px] sm:text-[15px] text-gray-700">
              @{post.username}
            </span>
            <span className="text-sm text-[14px] sm:text-[15px] hover:underline text-gray-400">
              -{post.timestamp}
            </span>
          </div>
          {/* Icon */}
          <DotsHorizontalIcon className="h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500 p-2" />
        </div>
        {/* Post text */}
        <p className="text-gray-800 text-[15px] sm:text-[16px] mb-2">
          {post.text}
        </p>
        {/* Post Image */}
        <Image
          className="h-[100 em] w-full rounded-2xl hover:brightness-105"
          width="10000"
          height="1000"
          src={post.img}
          alt="post-iamge"
        />
        {/* icons */}
        <div className="flex justify-between text-gray-500 p-2">
          <ChatIcon className="h-9 w-9 hoverEffect p-2 xl:h-10 xl:w-10 hover:text-sky-500 hover:bg-sky-100" />
          <TrashIcon className="h-9 w-9 hoverEffect p-2 xl:h-10 xl:w-10 hover:text-red-600 hover:bg-red-100" />
          <HeartIcon className="h-9 w-9 hoverEffect p-2 xl:h-10 xl:w-10 hover:text-red-600 hover:bg-red-100" />
          <ShareIcon className="h-9 w-9 hoverEffect p-2 xl:h-10 xl:w-10 hover:text-sky-500 hover:bg-sky-100" />
          <ChartBarIcon className="h-9 w-9 hoverEffect p-2 xl:h-10 xl:w-10 hover:text-sky-500 hover:bg-sky-100" />
        </div>
      </div>
    </div>
  );
};

export default Post;
