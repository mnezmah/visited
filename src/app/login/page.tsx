"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { Input } from "@/src/components/Input";
import { InputType } from "@/src/enums/InputType.enum";
import { Button } from "@/src/components/Button";
import { ButtonType } from "@/src/enums/ButtonType.enum";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, id } = event.currentTarget;
    setUser({
      ...user,
      [id]: value,
    });
    console.log({ user });
  };

  const onLoginHandler = async (): Promise<void> => {
    try {
      setIsLoading(true);
      const response = await axios.post("api/users/login", user);
      console.warn({ response: response.data });
      toast.success("You are logged in!");
      router.push("/map");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (user.username.length && user.password.length)
      setIsButtonDisabled(false);
    else setIsButtonDisabled(true);
  }, [user.username, user.password]);

  return (
    <div className="h-[100vh]">
      <h1 className="text-center text-2xl">
        {isLoading ? "Processing" : "Log in"}
      </h1>
      <div className="p-2">
        <Input
          id="username"
          label="username"
          value={user.username}
          onChange={onChangeHandler}
          placeholder="Enter your name here"
          className="max-w-[60%]"
        />
        <Input
          id="password"
          label="Password"
          value={user.password}
          type={InputType.PASSWORD}
          onChange={onChangeHandler}
          placeholder="Enter your password here"
          className="max-w-[60%]"
        />
        <Button
          onClick={onLoginHandler}
          title="Submit"
          type={ButtonType.SUBMIT}
          disabled={isButtonDisabled}
        />
      </div>

      <Link href="/signup">Not registered yet? Click to register</Link>
    </div>
  );
};

export default LoginPage;
