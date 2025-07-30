"use client";
import { useSession } from "next-auth/react";
import React from "react";

const useAuth = () => {
  const session = useSession();
  const user = session.data?.user;
  return { user };
};

export default useAuth;
