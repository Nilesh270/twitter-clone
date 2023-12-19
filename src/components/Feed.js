"use client"
import { SparklesIcon } from '@heroicons/react/solid';
import React from 'react'
import Input from './Feed/Input';
import Post from './Feed/Post';
import { useSession, signIn, signOut } from "next-auth/react";



const Feed = () => {
        const { data: session } = useSession();
        const user = session?.user;
      const data = [
        {
          id: 1,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwQQTS4NPqnCGbJPd4x7O_YJNOJ5gH6KkejH3nhVfIhxwwJPHEotjPs0VCpGg-UcybvxM&usqp=CAU",
          name: "Nilesh Balotiya",
          username: "@programmer",
          timestamp: "27 July",
          post: "https://www.ingimage.com/IngImage/img/ISS_23395_04511_1.jpg",
          content: "First post on custom twitter",
        },
        {
          id: 2,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwQQTS4NPqnCGbJPd4x7O_YJNOJ5gH6KkejH3nhVfIhxwwJPHEotjPs0VCpGg-UcybvxM&usqp=CAU",
          name: "Nidhi Nayak",
          username: "@programmer",
          timestamp: "08 May",
          post: "https://www.ingimage.com/IngImage/img/ISS_23395_04511_1.jpg",
          content: "post on custom twitter",
        },
      ];
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200  xl:min-w-[650px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex px-2 py-3 top-0 z-50 border-b border-gray-200 sticky bg-white">
        <div className="text-lg sm:text-xl font-bold cursor-pointer">Home</div>
        <div className="hoverEffect px-0 flex items-center justify-center ml-auto w-9 h-9">
          <SparklesIcon className="h-5 " />
        </div>
      </div>
      {user && <Input user={user}/>}

      {/* post page */}
      {data.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Feed
