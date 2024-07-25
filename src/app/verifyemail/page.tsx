"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const VerifyEmailPage = () => {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyUserEmail = async () => {
    try {
      const response = await axios.post("api/users/verifyemail", { token });
      console.warn({ response });
      setVerified(true);
    } catch (error: any) {
      setError(true);
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-[90vh] py-2">
      <h1>Verify Email</h1>
      <h2>{token ? `${token}` : "no token"}</h2>

      {verified && (
        <div>
          <h2>Email Verified</h2>
          <Link href="/login">Login</Link>
        </div>
      )}

      {error && (
        <div>
          <h2>Error</h2>
        </div>
      )}
    </div>
  );
};

export default VerifyEmailPage;
