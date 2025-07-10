import React, { useEffect, useState } from "react";
import {
  BookOpen,
  Brain,
  Code,
  Globe,
  Database,
  Settings,
  Target,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Cloud,
} from "lucide-react";

import learn1 from "../assets/LearningPhotos/learn1.png";
import learn2 from "../assets/LearningPhotos/learn2.jpeg";
import learn3 from "../assets/LearningPhotos/learn3.jpeg";
import learn4 from "../assets/LearningPhotos/learn4.png";

function Learning() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);

  const currentlyLearning = [
    {
      title: "Google Cloud",
      icon: <Cloud className="w-5 h-5" />,
      progress: 75,
      description:
        "Preparing for Google Cloud Associate Engineer Global Certification",
    },
    {
      title: "Graphs in DSA (Java)",
      icon: <Code className="w-5 h-5" />,
      progress: 75,
      description: "BFS, DFS, Dijkstra's Algorithm",
    },
    {
      title: "Trees in DSA",
      icon: <Code className="w-5 h-5" />,
      progress: 60,
      description: "DFS, BFS, BST, Binary Tree",
    },
    {
      title: "Advanced DSA Concepts",
      icon: <Code className="w-5 h-5" />,
      progress: 85,
      description: "Backtracking, Dynamic Programming, Memorizatio",
    },
    {
      title: "Aptitude",
      icon: <Brain className="w-5 h-5" />,
      progress: 85,
      description: "Basic topics and Logical Questions",
    },
    {
      title: "Advanced React Patterns",
      icon: <Globe className="w-5 h-5" />,
      progress: 85,
      description: "Hooks, Context, Performance",
    },
    {
      title: "MongoDB Indexing",
      icon: <Database className="w-5 h-5" />,
      progress: 40,
      description: "Performance Optimization",
    },
  ];

  // Mock study images - using placeholder colors
  const studyImages = [
    { id: 1, image: learn1, title: "Dry Running Code" },
    { id: 2, image: learn2, title: "Experimenting Flutter" },
    { id: 3, image: learn3, title: "Socket.io Workshop" },
    { id: 4, image: learn4, title: "50 Days Active LeetCoding" },
    // { id: 5, image: learn4, title: "Code Reviews" },
  ];

  const studyStats = [
    {
      label: "Hours This Week",
      value: "32",
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      label: "Topics Completed",
      value: "12",
      icon: <Target className="w-6 h-6" />,
    },
    {
      label: "Active Projects",
      value: "5",
      icon: <Code className="w-6 h-6" />,
    },
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % studyImages.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, studyImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % studyImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + studyImages.length) % studyImages.length
    );
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <section className="w-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 py-20 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            <div className="w-2 h-2 bg-indigo-400 rounded-full opacity-20"></div>
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center">
            <h2 className="text-5xl font-bold bg-gradient-to-r pb-8 from-indigo-200 via-purple-200 to-pink-200 bg-clip-text text-transparent z-10">
              Learning Journey
            </h2>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r mb-4 from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Continuously evolving through structured learning, hands-on
            practice, and real-world application
          </p>
        </div>

        {/* Current Learning Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center pb-12 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            What I'm Currently Learning
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentlyLearning.map((item, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-r from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:scale-105 hover:border-indigo-500 transition-all duration-300 hover:shadow-indigo-500/10 cursor-pointer"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-indigo-400 group-hover:text-indigo-300 transition-colors">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-white group-hover:text-indigo-100 transition-colors">
                    {item.title}
                  </h4>
                </div>
                <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Study Method Section */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            How I Learn
          </h3>
          <p className="text-gray-300 text-lg mb-12 text-center max-w-4xl mx-auto leading-relaxed">
            I believe in a multi-faceted approach combining theoretical
            understanding with practical application. My methodology includes
            structured note-taking, building real projects, daily
            problem-solving, and regular knowledge reviews to ensure long-term
            retention.
          </p>

          {/* Enhanced Image Carousel */}
          <div className="relative max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl border border-gray-700/50 backdrop-blur-xl bg-gray-800/30 p-8">
              <div className="relative h-80 rounded-2xl overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out h-full"
                  style={{
                    transform: `translateX(-${currentImageIndex * 100}%)`,
                  }}
                >
                  {studyImages.map((image, index) => (
                    <div
                      key={image.id}
                      className={`w-full h-full flex-shrink-0 bg-gradient-to-br rounded-2xl flex items-center justify-center relative overflow-hidden`}
                    >
                      <img src={image.image} alt="" className="absolute" />
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="relative z-10 text-center">
                        <BookOpen className="w-16 h-16 text-white/80 mx-auto mb-4" />
                        <h4 className="text-2xl font-bold text-white mb-2">
                          {image.title}
                        </h4>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Carousel Controls */}
              <div className="flex items-center justify-between mt-6">
                <button
                  onClick={prevImage}
                  className="p-3 rounded-full bg-gray-700/50 hover:bg-gray-600/50 text-white transition-all duration-200 hover:scale-110"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-4">
                  <button
                    onClick={toggleAutoPlay}
                    className="p-3 rounded-full bg-indigo-600/50 hover:bg-indigo-500/50 text-white transition-all duration-200 hover:scale-110"
                  >
                    {isAutoPlaying ? (
                      <Pause className="w-5 h-5" />
                    ) : (
                      <Play className="w-5 h-5" />
                    )}
                  </button>

                  <div className="flex gap-2">
                    {studyImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${
                          index === currentImageIndex
                            ? "bg-indigo-400 scale-125"
                            : "bg-gray-500 hover:bg-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <button
                  onClick={nextImage}
                  className="p-3 rounded-full bg-gray-700/50 hover:bg-gray-600/50 text-white transition-all duration-200 hover:scale-110"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

export default Learning;
