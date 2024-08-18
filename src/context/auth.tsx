"use client";
import { fetchUserDetailsAction, logoutAction } from "@/actions";
import { TUserDetails } from "@/lib/types";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useState, useEffect } from "react";

type AuthContextProps = {
  userDetails: TUserDetails | null;
  setUserDetails: React.Dispatch<React.SetStateAction<TUserDetails | null>>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [userDetails, setUserDetails] = useState<TUserDetails | null>(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const response = await fetchUserDetailsAction();
      if (response.success && response.data) {
        setUserDetails(response.data);
      }
    };

    fetchUserDetails();
  }, []);

  const router = useRouter();

  const logout = () => {
    setUserDetails(null);
    logoutAction();
    router.push("/");
    router.refresh();
  };
  return (
    <AuthContext.Provider value={{ userDetails, setUserDetails, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};
