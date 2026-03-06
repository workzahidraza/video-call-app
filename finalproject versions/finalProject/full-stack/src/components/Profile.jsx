import React from "react";

const Profile = () => {
  return (
    <div className="flex flex-col items-center gap-6 mb-16">

      <div className="h-60 w-60 rounded-full overflow-hidden border-4 border-green-400 shadow-lg">
        <img
          src="https://i.pravatar.cc/300"
          alt="profile"
          className="h-full w-full object-cover"
        />
      </div>

      <h1 className="text-3xl font-bold text-green-400">
        Demo User
      </h1>

      <p className="text-gray-300 max-w-xl text-center">
        This platform is designed to break communication barriers and make job
        opportunities accessible to everyone using modern technologies such as
        video communication, sign language recognition, and voice-based job
        applications.
      </p>

    </div>
  );
};

export default Profile;