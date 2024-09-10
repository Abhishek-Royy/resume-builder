// import { useUser } from "@clerk/clerk-react";
// import React from "react";
// import { Navigate, Outlet, useLocation } from "react-router-dom";
// import Header from "./components/custom/Header";
// import Dashboard from "./dashboard";

// function App() {
//   // use a clerk hook
//   const { user, isLoaded, isSignedIn } = useUser();

//   if (!isSignedIn && isLoaded) {
//     return <Navigate to={"/auth/sign-in"} />;
//   }

//   return (
//     <>
//       {useLocation("/dashboard") ? null : <Header />}

//       <Outlet />
//     </>
//   );
// }

// export default App;

import { useUser } from "@clerk/clerk-react";
import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Header from "./components/custom/Header";

function App() {
  // Use a Clerk hook
  const { user, isLoaded, isSignedIn } = useUser();
  const location = useLocation(); // Get the current location

  if (!isSignedIn && isLoaded) {
    return <Navigate to={"/auth/sign-in"} />;
  }

  return (
    <>
      {/* Render the Header only if the current pathname is not "/dashboard" */}
      {location.pathname === "/dashboard" ? null : <Header />}

      <Outlet />
    </>
  );
}

export default App;
