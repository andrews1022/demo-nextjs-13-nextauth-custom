"use client";

import { signIn } from "next-auth/react";

const SignInForm = () => {
  return (
    <button
      className="bg-slate-600 text-white"
      onClick={() => signIn("github", { callbackUrl: "/profile" })}
      type="button"
    >
      Sign In With GitHub
    </button>
  );
};

export default SignInForm;
