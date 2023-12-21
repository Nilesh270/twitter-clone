"use client"
import { getProviders,signIn } from 'next-auth/react'
import React from 'react'

async function  page ()  {
    const provider =  await getProviders();
    console.log(provider)
  return (
    <div>
      <button
        onClick={() => signIn('google',{ callbackUrl: "/" })}
        className="border bg-blue-600 flex items-center justify-center"
      >
        Login
      </button>
    </div>
  );
}

export default page
