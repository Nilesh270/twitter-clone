import {
  ChartBarIcon,
  ChatIcon,
  HeartIcon,
  ShareIcon,
} from "@heroicons/react/outline";
import { HeartIcon as Heart } from "@heroicons/react/solid";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import { db } from "../../../firebase";
import { signIn, useSession } from "next-auth/react";


const Post = ({ post }) => {

  const { data: session } = useSession();
  const [likes, setLikes] = useState([]);
  const [hasLiked, sethasLiked] = useState(false);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "posts", post.id, "likes"),
      (snapshot) => setLikes(snapshot.docs)
    );
  }, [db]);

  useEffect(() => {
    sethasLiked(
      likes.findIndex((like) => like.id === session?.user.uid) !== -1
    );
  }, [likes]);

  async function likePost() {
    if (session) {
      if (hasLiked) {
        await deleteDoc(doc(db, "posts", post.id, "likes", session?.user.uid));
      } else {
        await setDoc(doc(db, "posts", post.id, "likes", session?.user.uid), {
          username: session.user.username,
        });
      }
    } else {
        signIn();
    }
  }

  return (
    <div className="flex p-3 cursor-pointer border-b border-gray-200">
      <img className="h-12 w-12 rounded-full mr-4" src={post.img}></img>

      <div className="">
        <div className="flex justify-between items-center whitespace-nowrap ">
          <div className="flex space-x-2 items-center">
            <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">
              {post.name}
            </h4>
            <span className="text-gray-600 text-sm sm:text-[15px]">
              @{post.username}
            </span>
            <span className="text-gray-600 text-sm sm:text-[15px]">
              .<Moment fromNow>{post?.timestamp?.toDate()}</Moment>
            </span>
          </div>

          <DotsHorizontalIcon className="h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500 p-2 text-gray-600" />
        </div>

        <p className="text-gray-800 text-[15px sm:text-[16px] mb-2">
          {post.text}
        </p>

        <img className="rounded-2xl mr-2" src={post.postimage}></img>

        <div className="flex justify-between p-2 text-gray-500">
          <ChatIcon className="h-9 w-9 hoverEffect rounded-full hover:bg-blue-200 p-2" />
          <div className="flex items-center">
            {hasLiked ? (
              <Heart
                onClick={likePost}
                className="h-9 w-9 hoverEffect rounded-full text-red-600 p-2"
              />
            ) : (
              <HeartIcon
                onClick={likePost}
                className="h-9 w-9 hoverEffect rounded-full hover:bg-red-200 p-2"
              />
            )}

            {likes.length > 0 && <span>{likes.length}</span>}
          </div>

          <ShareIcon className="h-9  w-9 hoverEffect rounded-full hover:bg-blue-200 p-2" />
          <ChartBarIcon className="h-9 w-9 hoverEffect rounded-full hover:bg-blue-200 p-2" />
        </div>
      </div>
    </div>
  );
};

export default Post;
