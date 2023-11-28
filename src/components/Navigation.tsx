"use client";
import { Button } from "@/src/components/Button";
import { ButtonType } from "@/src/enums/ButtonType.enum";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

export const Navigation = () => {
  const router = useRouter();
  const onLogoutHandler = async () => {
    try {
      await axios.get("api/users/logout");
      toast.success("You are logged out!");
      router.push("/login");
      // @ts-ignore
    } catch (error: Error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="h0-10">
      <Button
        type={ButtonType.BUTTON}
        title="Logout"
        onClick={onLogoutHandler}
      />
    </div>
  );
};
