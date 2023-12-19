"use client";
import { getProviders, signIn } from "next-auth/react";

const SignInButton = ({ provider }) => {
  return (
    <div className="flex flex-col items-center space-x-4">
      <p className="text-center text-sm italic my-10">This app </p>
      <button
        onClick={() => signIn(provider.id, { callbackUrl: "/" })}
        className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500"
      >
        Sign in with {provider.id}
      </button>
    </div>
  );
};
export default SignInButton;
