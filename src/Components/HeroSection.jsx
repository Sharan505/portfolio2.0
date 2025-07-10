import React from "react";
import potrait from "../assets/sharan3.jpg"

function HeroSection() {
  const [currentText, setCurrentText] = React.useState("");
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [typeSpeed, setTypeSpeed] = React.useState(50);
  
  const strings = [
    "FullStack Developer",
    "Algorithmic Thinker", 
    "Driven Tech Enthusiast",
    "Analytical Coder",
  ];

  React.useEffect(() => {
    const type = () => {
      const current = strings[currentIndex];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
        setTypeSpeed(30);
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
        setTypeSpeed(50);
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % strings.length);
      }
    };

    const timer = setTimeout(type, typeSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentIndex, typeSpeed, strings]);

  return (
    <div className="w-screen min-h-screen relative bg-gray-900 overflow-hidden">
      {/* Background keyboard pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-gray-800 to-transparent"></div>
        <svg className="w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
          <pattern id="keyboard" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <rect x="1" y="1" width="8" height="8" fill="none" stroke="#4f46e5" strokeWidth="0.5" rx="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#keyboard)"/>
        </svg>
      </div>

      <div className="relative z-10 w-full h-full grid grid-cols-12 min-h-screen">
        <div className="col-span-2"></div>

        {/* Left Section */}
        <div className="col-span-4 flex flex-col justify-center text-white px-4">
          <p className="text-2xl font-bold mb-2 animate-fade-in">Hello! My name is</p>
          <p className="text-7xl font-bold mb-6 bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent animate-fade-in-delay">
            Sharan M
          </p>
          <p className="text-2xl font-semibold mb-4 animate-fade-in-delay-2">And I am a</p>
          <span className="text-indigo-400 font-bold text-4xl h-12 animate-fade-in-delay-3">
            {currentText}
            <span className="animate-pulse">|</span>
          </span>
        </div>

        {/* Right Section */}
        <div className="col-span-4 flex items-center justify-center px-4">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-indigo-400 to-purple-600 p-1 animate-float">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                <img src={potrait} className="w-72 h-72 rounded-full bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center text-white text-6xl font-bold">
                  
                </img>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-2"></div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
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
        
        .animate-fade-in-delay-3 {
          animation: fade-in 0.8s ease-out 0.6s both;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default HeroSection;