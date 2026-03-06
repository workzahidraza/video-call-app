import React from "react";

const Features = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mb-20">

      <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition">
        <h2 className="text-xl font-semibold text-green-400 mb-3">
          Video Calling
        </h2>
        <p className="text-gray-300">
          Real-time peer-to-peer video calling allows companies and
          candidates to communicate directly for meetings and interviews.
        </p>
      </div>

      <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition">
        <h2 className="text-xl font-semibold text-green-400 mb-3">
          Sign Language → Text
        </h2>
        <p className="text-gray-300">
          Sign language gestures can be converted into readable text
          in real time using AI.
        </p>
      </div>

      <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition">
        <h2 className="text-xl font-semibold text-green-400 mb-3">
          Voice → Job Database
        </h2>
        <p className="text-gray-300">
          Illiterate job seekers can speak their skills and the system
          stores it in a database.
        </p>
      </div>

    </div>
  );
};

export default Features;