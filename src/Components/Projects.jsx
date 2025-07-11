import React, { useEffect } from "react";

function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = React.useState(null);
  const projects = [
    {
      id: 1,
      title: "Copsify AI - Chatbot",
      description:
        "Developed a chatbot to identify IPC sections, descriptions, and corresponding punishments based on user queries. Streamlined the understanding of legal implications through an interactive conversational interface",
      technologies: ["MERN", "REST API", "MongoDB", "Python Flask"],
      github: "https://github.com/Jefinrojar/CopGuide_frontend",
      live: "https://copguide-frontend.onrender.com/chatinterface",
      status: "enabled",
      image: "🤖",
      type: "main"
    },
    {
      id: 2,
      title: "GPA Calculator",
      description:
        " Built a dynamic CGPA Calculator application featuring real-time calculations using React. Supports semester wise SGPA calculation",
      technologies: ["React", "Tailwind", "Node.js", "MongoDB"],
      github: "https://github.com/Sharan505/cgpa-calculator",
      live: "https://cgpa-calculator-it.netlify.app/initial/",
      status: "enabled",
      image: "📋",
      type: "main"
    },
    {
      id: 3,
      title: "Chat Application",
      description:
        "Developed a real-time chat app using React for the front-end and Socket.io for seamless, bidirectional communication",
      technologies: ["React", "Tailwind", "Socket.io", "Node.js", "Firebase"],
      github: "https://github.com/Sharan505/ChatApp",
      status: "opacity-30 cursor-not-allowed",
      live: "#",
      image: "💬",
      type: "main"
    },
  ];

  const miniProjects = [
    {
      id: 4,
      title: "SkyFly",
      description: "Frontend for a online Travel Planning Website",
      technologies: ["JavaScript", "HTML", "CSS"],
      image: "✈️",
      type: "mini"
    },
    {
      id: 5,
      title: "InfoDoc",
      description: "A online local doctor finding platform",
      technologies: ["HTML", "CSS", "JavaScript", "GeoLocation"],
      image: "🩺",
      type: "mini"
    },
    {
      id: 6,
      title: "Youtube Homepage Clone (Frontend)",
      description: "",
      technologies: ["React", "Tailwind"],
      image: "▶️",
      type: "mini"
    },
    {
      id: 7,
      title: "NVIDIA Website Clone (Frontend)",
      description: "",
      technologies: ["HTML", "Bootstrap"],
      image: "♨️",
      type: "mini"
    },
    {
      id: 8,
      title: "Steam Clone (Frontend)",
      description: "",
      technologies: ["HTML", "CSS"],
      image: "🎮",
      type: "mini"
    },
    {
      id: 9,
      title: "Rapido Clone (Frontend)",
      description: "",
      technologies: ["React", "Bootstrap"],
      image: "🛵",
      type: "mini"
    },
    
  ];

  return (
    <div
      id="projects"
      className="w-screen min-h-screen relative bg-gray-900 overflow-hidden py-20"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 50"
          preserveAspectRatio="none"
        >
          <pattern
            id="grid"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="10" cy="10" r="1" fill="#4f46e5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold pb-4 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 bg-clip-text text-transparent animate-fade-in">
            Projects
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-2xl mt-4 mx-auto">
            A collection of my recent work showcasing full-stack development,
            algorithmic thinking, and creative problem-solving
          </p>
        </div>

        {/* Main Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-300"></div>

              {/* Project Card */}
              <div className="relative bg-gray-800 rounded-2xl p-6 h-full border border-gray-700 group-hover:border-indigo-500 transition-all duration-300 transform group-hover:scale-105">
                {/* Project Icon */}
                <div className="text-6xl mb-4 flex items-center justify-center h-20">
                  {project.image}
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-indigo-600 bg-opacity-20 text-indigo-200 rounded-full text-sm font-medium border border-indigo-500 border-opacity-30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.github}
                    className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition-colors duration-300 text-center font-medium"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    className={`flex-1 bg-gradient-to-r ${project.status} from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white py-2 px-4 rounded-lg transition-all duration-300 text-center font-medium`}
                  >
                    Live Demo
                  </a>
                </div>

                {/* Hover overlay */}
                {hoveredProject === project.id && (
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 opacity-5 rounded-2xl pointer-events-none"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mini Projects Section */}
        <div className="mb-12">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-white mb-3">Mini Projects</h3>
            <div className="w-20 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-3">Quick experiments and utility tools</p>
          </div>

          {/* Mini Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {miniProjects.map((project, index) => (
              <div
                key={project.id}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-300"></div>

                {/* Mini Project Card */}
                <div className="relative bg-gray-800 rounded-xl p-5 h-full border border-gray-700 group-hover:border-indigo-500 transition-all duration-300 transform group-hover:scale-105">
                  {/* Project Icon */}
                  <div className="text-4xl mb-3 flex items-center justify-center h-12">
                    {project.image}
                  </div>

                  {/* Project Title */}
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors duration-300">
                    {project.title}
                  </h4>

                  {/* Project Description */}
                  <p className="text-gray-300 mb-3 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-600 bg-opacity-15 text-white rounded-md text-xs font-medium border border-gray-500 border-opacity-20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Hover overlay */}
                  {hoveredProject === project.id && (
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 opacity-5 rounded-xl pointer-events-none"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;