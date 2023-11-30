"use client";
import axios from "axios";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/src/components/Button";
import { ButtonType } from "@/src/enums/ButtonType.enum";
const ProfilePage = () => {
  const [userId, setUserId] = useState(null);

  const getUserDetails = async () => {
    const response = await axios.get("api/users/myself");
    console.warn({ response: response.data._id });
    setUserId(response.data._id);
  };

  return (
    <div className="flex">
      <h1>Profile page</h1>
      <h2>
        {userId ? <Link href={`/profile/${userId}`}></Link> : "no user id"}
      </h2>

      <Button
        onClick={getUserDetails}
        title="get user details"
        type={ButtonType.BUTTON}
      />
    </div>
  );
};

export default ProfilePage;
