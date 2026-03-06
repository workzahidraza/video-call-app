import React from "react";
import Profile from "../components/Profile";
import Features from "../components/Features";
import Applications from "../components/Applications";
import Future from "../components/Future";
import Unique from "../components/Unique";

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-gray-900 text-white px-6 py-16 flex flex-col items-center">

      <Profile />
      <Features />
      <Applications />
      <Future />
      <Unique />

    </div>
  );
};

export default Home;