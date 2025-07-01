"use client";
import React from "react";
import Home from "../pages/Home";
import Navbar from "./Navbar";

function Loading() {
  const [isHydrated, setIsHydrated] = React.useState(false);
  React.useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <>
      {!isHydrated && (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )}

      {isHydrated && (
        <>
          <Navbar />
          <Home />
        </>
      )}
    </>
  );
}

export default Loading;
