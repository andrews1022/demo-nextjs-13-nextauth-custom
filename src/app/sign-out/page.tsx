import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { options } from "../api/auth/[...nextauth]/options";

import SignOutForm from "@/components/SignOutForm";

const SignOutPage = async () => {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/");
  } else {
    return (
      <div>
        <h1>SignOutPage</h1>

        <SignOutForm />
      </div>
    );
  }
};

export default SignOutPage;
