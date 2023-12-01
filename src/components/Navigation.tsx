"use client";
import { Button } from "@/src/components/Button";
import { ButtonType } from "@/src/enums/ButtonType.enum";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ButtonSize } from "../enums/ButtonSize.enum";

export const Navigation = () => {
  const router = useRouter();
  const logoutHandler = async () => {
    try {
      await axios.get("api/users/logout");
      toast.success("You are logged out!");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="p-2 h-10 flex justify-between bg-white">
      <p className="text-xl font-bold text-primary-700">Visited</p>
      <div className=" flex justify-end gap-5 items-center">
        <Button
          type={ButtonType.BUTTON}
          title="Profile"
          onClick={() => router.push("/profile/myself")}
          size={ButtonSize.TINY}
        />
        <Button
          type={ButtonType.BUTTON}
          title="Logout"
          onClick={logoutHandler}
          size={ButtonSize.TINY}
        />
        <Button
          type={ButtonType.BUTTON}
          title="Map"
          onClick={() => router.push("/map")}
          size={ButtonSize.TINY}
        />
      </div>
    </div>
  );
};
