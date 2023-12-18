import React from "react";
import { PhotographIcon, EmojiHappyIcon } from "@heroicons/react/solid";


const Input = () => {


  return (
    <div className="flex border-b border-gray-200 p-3 space-x-3">
      <img
        className="h-12 w-12 rounded-full cursor-pointer hover:brightness-95"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwQQTS4NPqnCGbJPd4x7O_YJNOJ5gH6KkejH3nhVfIhxwwJPHEotjPs0VCpGg-UcybvxM&usqp=CAU"
      ></img>
      <div className="flex-col w-full divide-y divide-gray-200">
        <div className="">
          <textarea
            className="w-full border-none focus:ring-0 text-lg placeholder:text-gray-600 tracking-wide min-h-[50px] text-gray-600"
            rows="2"
            placeholder="Whats happening?...."
          ></textarea>
        </div>
        <div className="flex items-center justify-between pt-1.5">
          <div className="flex">
            <PhotographIcon className="h-10 w-10 p-2 text-sky-300 hoverEffect hover:bg-blue-100" />
            <EmojiHappyIcon className="h-10 w-10 p-2  text-sky-300 hoverEffect hover:bg-blue-100" />
          </div>

          <button className="text-white bg-blue-400 font-bold rounded-full px-6 py-1.5 shadow-md hover:brightness-95">
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
