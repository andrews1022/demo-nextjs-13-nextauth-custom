"use client";

import { signOut } from "next-auth/react";

const SignOutForm = () => {
  return (
    <button
      className="bg-slate-600 text-white"
      onClick={() => signOut({ callbackUrl: "/" })}
      type="button"
    >
      Sign Out of GitHub
    </button>
  );
};

export default SignOutForm;
