"use client";
import React from "react";
import Image from "next/image";
import useMyStore from "@/store/store"; // darkMode ni olish

const skills = [
  { name: "HTML", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/2048px-HTML5_Badge.svg.png" },
  { name: "CSS", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png" },
  { name: "JavaScript", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png" },
  { name: "TypeScript", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png" },
  { name: "React.js", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s" },
  { name: "Next.js", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-8_YuI-40uCn2rzzrmifB-AQfdFuX0xsGvA&s" },
  { name: "Tailwind CSS", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhoXisDruJMDAq3Ltd-wuaMW2lGxck9wAKw&s" },
  { name: "SCSS", image: "https://sass-lang.com/assets/img/styleguide/seal-color.png" },
  { name: "shadcn/ui", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfz0dOLwNRhHjLMGqbnfokvi8dI3GAu7Jmvg&s" },
  { name: "Ant Design", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT38gQ0V1HH_KQa5OH98s3lvzurt9O2cR0KsQ&s" },
];

function Skills() {
  const { darkMode } = useMyStore();

  return (
    <div className={`py-12 px-4 sm:px-6 lg:px-10 transition-colors duration-500 ${darkMode ? "bg-gray-900" : "bg-white"} mt-10 h-screen`}>
      <h2 className={`text-3xl font-bold text-center mb-12  ${!darkMode?'text-gray-800': 'text-white'}`}>
        My Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 sm:gap-10">
        {skills.map((skill, index) => (
          <div key={index} className="relative group flex flex-col items-center">
         
            <div className="w-36 h-24 sm:w-40 sm:h-28 md:w-52 md:h-28 relative rounded-xl bg-white p-4 shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:scale-100">
              <Image
                src={skill.image}
                alt={skill.name}
                fill
                className="object-contain p-2"
              />
            </div>

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center bg-black/50 rounded-xl">
              <span className="text-sm font-medium text-white dark:text-gray-200   rounded-md shadow-sm whitespace-nowrap">
                {skill.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
