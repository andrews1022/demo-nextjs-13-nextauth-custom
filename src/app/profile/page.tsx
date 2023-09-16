import Image from "next/image";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";

const ProfilePage = async () => {
  const session = await getServerSession(options);

  const user = session?.user;
  return (
    <div>
      <h1>ProfilePage</h1>

      <div>
        {user?.name ? <h2>Hello {user?.name}!</h2> : null}

        {user?.image ? (
          <Image
            src={user.image}
            width={200}
            height={200}
            alt={`Profile Pic for ${user.name}`}
            priority={true}
          />
        ) : null}
      </div>
    </div>
  );
};

export default ProfilePage;
