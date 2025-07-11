import React from "react";
import { Code, Trophy, Cloud, ExternalLink, Zap } from "lucide-react";
import reactLogo from "../assets/react.svg";
import jsLogo from "../assets/Skills/js.svg";
import nodeLogo from "../assets/Skills/nodejs.svg";
import javaLogo from "../assets/Skills/java-original.svg";
import pythonLogo from "../assets/Skills/python.svg";
import mongoLogo from "../assets/Skills/mongodb.svg";
import expressLogo from "../assets/Skills/express.png";
import htmlLogo from "../assets/Skills/html.svg";
import firebaseLogo from "../assets/Skills/firebase.svg";
import figmaLogo from "../assets/Skills/figma.svg";
import canvaLogo from "../assets/Skills/canva.png";
import gitLogo from "../assets/Skills/git-original.svg";

function Skills() {
  const skillBubbles = [
    {
      name: "React",
      level: 90,
      color: "from-cyan-400 via-white to-cyan-400",
      icon: reactLogo,
    },
    {
      name: "JavaScript",
      level: 85,
      color: "from-white to-orange-400",
      icon: jsLogo,
    },
    {
      name: "Node.js",
      level: 80,
      color: "from-white to-emerald-400",
      icon: nodeLogo,
    },
    {
      name: "Java",
      level: 70,
      color: "from-indigo-500 to-white",
      icon: javaLogo,
    },
    {
      name: "Python",
      level: 30,
      color: "from-blue-500 to-indigo-500",
      icon: pythonLogo,
    },
    {
      name: "MongoDB",
      level: 70,
      color: "from-green-500 to-teal-500",
      icon: mongoLogo,
    },
    {
      name: "Express",
      level: 78,
      color: "from-gray-400 to-gray-600",
      icon: expressLogo,
    },
    {
      name: "HTML/CSS",
      level: 95,
      color: "from-orange-400 to-red-400",
      icon: htmlLogo,
    },
    {
      name: "Firebase",
      level: 82,
      color: "from-yellow-400 to-orange-700",
      icon: firebaseLogo,
    },
    { name: "Figma", level: 82, color: "from-white to-white", icon: figmaLogo },
    {
      name: "Canva",
      level: 82,
      color: "from-blue-400 to-sky-400",
      icon: canvaLogo,
    },
    { name: "Git", level: 82, color: "from-red-400 to-white", icon: gitLogo },
  ];

  const platforms = [
    {
      name: "LeetCode",
      icon: Code,
      bgColor: "from-yellow-500 to-orange-500",
      stats: { solved: "175+", submissions: "300+", streak: "50+ days" },
      link: "https://leetcode.com/u/Sharan505/",
      description: "Problem solving and algorithmic thinking",
    },
    {
      name: "HackerRank",
      icon: Trophy,
      bgColor: "from-green-500 to-teal-500",
      stats: { badges: "12", stars: "4★", rank: "Gold" },
      link: "https://hackerrank.com/profile/sharan27505",
      description: "Data structures and competitive programming",
    },
    {
      name: "Google Cloud",
      icon: Cloud,
      bgColor: "from-blue-500 to-blue-900",
      stats: { badges: "10", league: "Gold", points: "17K+" },
      link: "https://www.cloudskillsboost.google/public_profiles/598a6f61-42c8-4148-870f-c1884e8f7ff3",
      description: "Google Cloud Skills Boost platform for learning GCP",
    },
  ];

  return (
    <div
      id="skills"
      className="bg-gray-900 relative overflow-hidden min-h-screen py-20"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold pb-4 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 bg-clip-text text-transparent animate-fade-in">
            Skills & Learnings
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full animate-fade-in-delay"></div>
          <p className="text-gray-400 mt-4 text-base sm:text-lg animate-fade-in-delay-2">
            Constantly evolving and learning new technologies
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12">
          {/* Coding Platforms */}
          <div className="space-y-6 sm:space-y-8">
            {platforms.map((platform, index) => (
              <div
                key={platform.name}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group hover:scale-105 hover:shadow-2xl"
                data-aos="fade-right"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-4">
                  <div
                    className={`p-2 sm:p-3 rounded-xl bg-gradient-to-r ${platform.bgColor} shadow-lg`}
                  >
                    <platform.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {platform.name}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      {platform.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4">
                  {Object.entries(platform.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-sm sm:text-lg font-bold text-indigo-400">
                        {value}
                      </div>
                      <div className="text-xs text-gray-500 capitalize">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group-hover:underline text-sm sm:text-base"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View Profile</span>
                </a>
              </div>
            ))}
          </div>

          {/* Skills Cards */}
          <div className="relative">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-700/50 h-full">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400" />
                <h3 className="text-xl sm:text-2xl font-bold text-white">Tech Stack</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {skillBubbles.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="group bg-gray-700/30 hover:bg-gray-700/50 rounded-xl p-3 sm:p-4 border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg animate-fade-in"
                    data-aos="fade-down"
                    data-aos-delay={index * 100}
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300`}
                      >
                        <img className="w-6 h-6 sm:w-8 sm:h-8" src={skill.icon} alt="" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-semibold text-sm sm:text-base group-hover:text-indigo-300 transition-colors truncate">
                          {skill.name}
                        </h4>
                        <div className="w-full bg-gray-600/50 rounded-full h-1 mt-2">
                          <div
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                            style={{
                              width: `${skill.level}%`,
                              animationDelay: `${index * 0.1 + 0.5}s`,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float-bubble {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.2s both;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 0.8s ease-out 0.4s both;
        }

        .animate-float-bubble {
          animation: float-bubble 3s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}

export default Skills;