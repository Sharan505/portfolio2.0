import React from "react";
import { Mail, Linkedin, Github, MessageCircle } from "lucide-react";


function About() {
  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:your.email@example.com",
      color: "hover:text-red-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/yourprofile",
      color: "hover:text-blue-400",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/yourprofile",
      color: "hover:text-gray-300",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/yourphonenumber",
      color: "hover:text-green-400",
    },
  ];

  return (
    <section id="about">
      {/* Wave divider */}
      {/* <div className="bg-gray-900 relative">
        <svg
          className="w-full h-20 transform rotate-180"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            fill="rgb(17 24 39)"
          ></path>
        </svg>
      </div> */}

      <div className="relative bg-gray-900 overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"></div>
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="coding-pattern"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="10" cy="10" r="1" fill="currentColor" opacity="0.3">
                  <animate
                    attributeName="opacity"
                    values="0.3;0.8;0.3"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>
                <rect
                  x="2"
                  y="2"
                  width="4"
                  height="1"
                  fill="currentColor"
                  opacity="0.2"
                />
                <rect
                  x="2"
                  y="5"
                  width="6"
                  height="1"
                  fill="currentColor"
                  opacity="0.2"
                />
                <rect
                  x="2"
                  y="8"
                  width="3"
                  height="1"
                  fill="currentColor"
                  opacity="0.2"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#coding-pattern)" />
          </svg>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-indigo-400 rounded-full opacity-20 animate-float-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${4 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 grid grid-cols-12 py-20 min-h-screen">
          <div className="col-span-2"></div>
          <div className="md:col-span-8 col-span-12 flex flex-col items-center justify-center px-4">
            {/* Section Title */}
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 bg-clip-text text-transparent animate-fade-in">
                About Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full animate-fade-in-delay"></div>
            </div>

            {/* About Content */}
            <div className="max-w-4xl">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-2xl animate-fade-in-delay-2">
                <div className="prose prose-lg prose-invert max-w-none">
                  {/* Paragraph 1 */}
                  <p
                    className="text-gray-300 leading-relaxed mb-6"
                    data-aos="fade-up"
                    data-aos-delay="0"
                  >
                    Passionate and innovative IT student with{" "}
                    <span className="text-indigo-400 font-semibold">
                      2+ years
                    </span>{" "}
                    of hands-on experience in{" "}
                    <span className="text-indigo-400 font-semibold">
                      Fullstack Web development
                    </span>
                    . Skilled in designing and building user-friendly
                    applications, with a strong ability to adapt to new
                    technologies and frameworks.
                  </p>

                  {/* Paragraph 2 */}
                  <p
                    className="text-gray-300 leading-relaxed mb-6"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    Known for a creative problem-solving approach and a
                    fast-learning mindset, always eager to take on new
                    challenges and expand my expertise in the tech industry. I
                    thrive on turning complex problems into elegant solutions
                    and bringing innovative ideas to life through code.
                  </p>

                  {/* Paragraph 3 */}
                  <p
                    className="text-gray-300 leading-relaxed mb-8"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    When I'm not coding, you'll find me exploring the latest
                    tech trends, contributing to open-source projects, or
                    collaborating with fellow developers to build something
                    amazing.{" "}
                    <span className="text-indigo-400 font-semibold">
                      Let's connect and create something extraordinary together!
                    </span>
                  </p>

                  {/* Social Links (optional animation delay) */}
                  <div
                    className="flex flex-wrap justify-center gap-6 pt-6 border-t border-gray-700/50"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className={`group flex items-center gap-2 px-4 py-3 rounded-lg bg-gray-700/50 hover:bg-gray-600/50 transition-all duration-300 ${social.color} transform hover:scale-105 hover:-translate-y-1`}
                        style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                      >
                        <social.icon className="w-5 h-5 text-gray-400 group-hover:text-current transition-colors duration-300" />
                        <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                          {social.label}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2"></div>
        </div>

        {/* Bottom wave divider */}
        <svg
          className="w-full h-20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            fill="rgb(17 24 39)"
          ></path>
        </svg>
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

        @keyframes float-particle {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
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

        .animate-float-particle {
          animation: float-particle 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

export default About;
