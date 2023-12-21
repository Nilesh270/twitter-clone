"use client"
import { SparklesIcon } from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react'
import Input from './Feed/Input';
import Post from './Feed/Post';
import { useSession, signIn, signOut } from "next-auth/react";
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../../firebase';



const Feed = () => {
      const { data: session } = useSession();
      const user = session?.user;
       const [posts, setPosts] = useState([]);
       useEffect(() => {
         const unsubscribe = onSnapshot(
           query(collection(db, "posts"), orderBy("timestamp", "desc")),
           (snapshot) => {
             const postData = snapshot.docs.map((doc) => ({
               id: doc.id,
               ...doc.data(),
             }));
             setPosts(postData);
           }
         );

         // Clean up the listener when the component unmounts
         return () => unsubscribe();
       }, []);

       console.log(posts);

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
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Feed
