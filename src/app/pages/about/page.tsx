"use client";
import Image from "next/image";
import nazirov from "../../../../public/Nazirov.jpg";
import useMyStore from "@/store/store";

const AboutPage = () => {
  const { darkMode } = useMyStore();
  const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "React.js",
    "Tailwind CSS",
    "SCSS",
    "shadcn/ui",
    "Ant Design",
    "Zustand",
    "Redux Toolkit",
  ];

  return (
    <div
      className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br  ${
        darkMode ? "bg-gray-900" : "bg-white"
      } mt-10 `}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1
            className={`text-4xl md:text-5xl font-bold   ${
              !darkMode ? "text-gray-800" : "text-white"
            } mb-4`}
          >
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl">
              <Image
                src={nazirov}
                alt="Nazirov Ozodbek"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className={`text-3xl font-bold  ${!darkMode?'text-gray-800': 'text-white'} `}>
              Nazirov Ozodbek
            </h2>

            <div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I started my studies at Najot Talim in August 2024 and will
                finish in May 2025. I am currently working on projects at Najot
                Talim.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Technologies I Work With
              </h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
