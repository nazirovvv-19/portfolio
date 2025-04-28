"use client";
import Image from "next/image";
import nazirov from "../../public/Nazirov.jpg";
import useMyStore from "@/store/store";

export default function HomePage() {
  const {darkMode}= useMyStore()
  return (
    <div className={`min-h-screen flex items-center justify-center bg-gradient-to-br ${darkMode?'bg-gray-900':'bg-white'} p-4`}>
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1
            className={`text-5xl md:text-6xl font-bold ${!darkMode?'text-gray-800': 'text-white'} dark:text-white mb-4 animate-fadeInUp`}
            style={{ animationDelay: "0.1s" }}
          >
            Nazirov{" "}
            <span className="text-blue-600 dark:text-blue-400">Ozodbek</span>
          </h1>

          <h2
            className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            Frontend Developer
          </h2>

          <p
            className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed animate-fadeInUp"
            style={{ animationDelay: "0.3s" }}
          >
            Learning modern programming languages and enhancing experience
          </p>

          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl animate-fadeInUp"
            style={{ animationDelay: "0.4s" }}
          >
            Contact Me
          </button>
          <button
            style={{ animationDelay: "0.4s" }}
            className={`ml-2 transition-all duration-300  ${!darkMode?'text-gray-800': 'text-white'} hover: animate-fadeInUp`}
          >
            Here is my{" "}
            <a href="file:///C:/Users/user/Desktop/Resume.pdf" className="resume-link text-blue-500 ml-2">
              resume
            </a>
          </button>
        </div>

        <div className="flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl animate-scaleIn">
            <Image
              src={nazirov}
              alt="Nazirov Ozodbek"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-scaleIn {
          animation: scaleIn 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
