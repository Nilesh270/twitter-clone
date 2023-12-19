"use client";
import { EmojiHappyIcon, PhotographIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
const Input = () => {
  const { data: session } = useSession();
  const user = session ? session.user : null;
  console.log(session);
  return (
    <>
      {user && (
        <div className="flex border-b border-gray-200 p-3 space-x-3">
          <img
            onClick={signOut}
            src={
              session.user?.image ||
              "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
            }
            alt="Profile-ICon"
            width="50"
            height="50"
            className="h-12 w-12 rounded-full cursor-pointer hover:brightness-90"
          />
          <div className="w-full divide-y divide-gray-200">
            <div className="">
              <textarea
                rows="2"
                placeholder="What's happening?"
                className="w-full focus:ring-0 border-none placeholder-gray-700 text-lg tracking-wide text-gray-700 min-h-[100px] "
              ></textarea>
            </div>
            <div className="flex items-center justify-between pt-2.5">
              <div className="flex">
                <PhotographIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-50" />
                <EmojiHappyIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-50" />
              </div>
              <button
                disabled
                className="bg-blue-400 text-white rounded-full px-4 py-1.5  font-bold shadow-md hover:brightness-95 disabled:opacity-50"
              >
                Tweet
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Input;
