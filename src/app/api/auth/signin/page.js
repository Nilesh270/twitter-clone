// "use client";
import React from "react";
import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";
import SignInButton from "./SigninButton";

const SignIn = async () => {
  const providers = await getProviders();
  return (
    <div className="flex flex-col items-center space-x-4 justify-center">
      <Image
        fill={true}
        src="https://cdn0.iconfinder.com/data/icons/popular-social-media-colored/48/JD-14-512.png"
        alt="twitter in a phone"
        className="hidden md-:inline-flex object-cover md:w-44 rotate-6  h-80"
      />
      <img
        className="w-36 object-cover"
        src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
        alt="twitter logo"
      />
      <div className="">
        {Object.values(providers).map((provider) => (
          <SignInButton key={provider.id} provider={provider} />
        ))}
      </div>
    </div>
  );
};

export default SignIn;
