"use client";
import { useAuth } from "@/context/auth";
import Link from "next/link";

function UserProfile() {
  const { userDetails, logout } = useAuth();

  return (
    <div className="m-10 max-w-sm">
      <div className="rounded-lg border bg-white px-4 pt-8  shadow-lg">
        <div className="relative mx-auto w-36 rounded-full">
          <span className="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"></span>
          <img
            className="mx-auto h-auto w-full rounded-full"
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
            alt=""
          />
        </div>
        <h1 className="my-1 text-center text-xl font-bold leading-8 text-gray-900">
          {userDetails?.username}
        </h1>
        <p className="text-center text-sm leading-6 text-gray-500 py-1">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto,
          placeat!
        </p>
        <ul className="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
          <li className="flex items-center py-3 text-sm">
            <span>Email</span>
            <span className="ml-auto">
              <span className="rounded-full bg-green-200 py-1 px-2 text-xs font-medium text-green-700">
                {userDetails?.email}
              </span>
            </span>
          </li>
          <li className="flex items-center py-3 text-sm">
            <span>Password</span>
            <span className="ml-auto">********</span>
          </li>
        </ul>
        <div className="flex justify-between items-center py-4 text-sm">
          <Link href={"#"} className=" text-indigo-600 hover:text-indigo-500">
            Forgot Password?
          </Link>
          <button
            onClick={logout}
            className="text-red-400  self-start hover:text-red-500 duration-300  font-semibold ">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
export default UserProfile;
