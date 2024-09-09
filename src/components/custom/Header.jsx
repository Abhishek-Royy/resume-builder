import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";

function Header() {
  const { user, isSignedIn } = useUser();

  return (
    <div className="w-full flex items-center justify-between md:px-16 px-5 shadow-md py-5">
      <img src="/logo.svg" alt="" width={40} height={40} />

      {isSignedIn ? (
        <div className="flex items-center justify-center gap-5">
          <Link to={"/dashboard"}>
            <Button variant="outline">Dashboard</Button>
          </Link>

          <UserButton />
        </div>
      ) : (
        <Link to={"/auth/sign-in"}>
          <Button>Get Started</Button>
        </Link>
      )}
    </div>
  );
}

export default Header;
