// import React from "react";

// const About = () => {
//   return (
//     <div className="min-h-screen w-full bg-gray-900 text-white px-6 py-16 flex flex-col items-center">

//       {/* Profile Section */}
//       <div className="flex flex-col items-center gap-6 mb-16">

//         <div className="h-60 w-60 rounded-full overflow-hidden border-4 border-green-400 shadow-lg">
//           <img
//             src="https://i.pravatar.cc/300"
//             alt="profile"
//             className="h-full w-full object-cover"
//           />
//         </div>

//         <h1 className="text-3xl font-bold text-green-400">
//           Demo User
//         </h1>

//         <p className="text-gray-300 max-w-xl text-center">
//           This platform is designed to break communication barriers and make job
//           opportunities accessible to everyone using modern technologies such as
//           video communication, sign language recognition, and voice-based job
//           applications.
//         </p>

//       </div>

//       {/* Core Features */}
//       <div className="grid md:grid-cols-3 gap-8 max-w-6xl mb-20">

//         <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition">
//           <h2 className="text-xl font-semibold text-green-400 mb-3">
//             Video Calling
//           </h2>
//           <p className="text-gray-300">
//             Real-time peer-to-peer video calling allows companies and
//             candidates to communicate directly for meetings, interviews,
//             and collaboration without physical presence.
//           </p>
//         </div>

//         <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition">
//           <h2 className="text-xl font-semibold text-green-400 mb-3">
//             Sign Language → Text
//           </h2>
//           <p className="text-gray-300">
//             Using computer vision and AI, sign language gestures can be
//             converted into readable text in real time. This helps deaf or
//             mute individuals communicate more effectively during interviews
//             and conversations.
//           </p>
//         </div>

//         <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition">
//           <h2 className="text-xl font-semibold text-green-400 mb-3">
//             Voice → Job Database
//           </h2>
//           <p className="text-gray-300">
//             Illiterate job seekers can simply speak their skills and job
//             preferences. The system stores the information in a dynamic
//             database where companies can search candidates based on skills
//             and requirements.
//           </p>
//         </div>

//       </div>

//       {/* Real World Use */}
//       <div className="max-w-4xl text-center mb-20">
//         <h2 className="text-3xl font-bold text-green-400 mb-6">
//           Real World Applications
//         </h2>

//         <p className="text-gray-300 mb-4">
//           This platform can be used for remote job interviews, accessible
//           communication for deaf or mute individuals, and job registration
//           for illiterate workers. Companies can directly connect with
//           candidates through video calls while AI tools assist communication
//           through sign and voice technologies.
//         </p>

//         <p className="text-gray-300">
//           It also helps bridge the gap between rural workers and companies by
//           allowing skill registration through voice instead of written forms.
//         </p>
//       </div>

//       {/* Future Upgrades */}
//       <div className="max-w-5xl text-center mb-20">
//         <h2 className="text-3xl font-bold text-green-400 mb-6">
//           Future Upgrades
//         </h2>

//         <ul className="text-gray-300 space-y-3">
//           <li>• AI powered advanced sign language recognition</li>
//           <li>• Real-time translation between sign, text, and speech</li>
//           <li>• AI-based job recommendation system</li>
//           <li>• Mobile application for Android and iOS</li>
//           <li>• Offline support for low internet areas</li>
//         </ul>
//       </div>

//       {/* Market Difference */}
//       <div className="max-w-5xl text-center">
//         <h2 className="text-3xl font-bold text-green-400 mb-6">
//           What Makes This Platform Unique
//         </h2>

//         <p className="text-gray-300 mb-4">
//           Most platforms in the market focus on only one feature such as
//           video meetings, speech recognition, or accessibility tools.
//           Our platform combines multiple technologies into a single system.
//         </p>

//         <p className="text-gray-300">
//           By integrating video communication, sign language recognition,
//           and voice-driven job applications, this platform creates an
//           inclusive environment where communication barriers are removed
//           and employment opportunities become accessible to everyone.
//         </p>
//       </div>

//     </div>
//   );
// };

// export default About;
function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center pt-20">

      <h1 className="text-4xl text-green-400 mb-6">
        About This Project
      </h1>

      <p className="max-w-xl text-center text-gray-300">
        This platform helps deaf, mute and illiterate people communicate
        with companies using video calls, sign language recognition
        and voice based job applications.
      </p>

    </div>
  );
}

export default About;