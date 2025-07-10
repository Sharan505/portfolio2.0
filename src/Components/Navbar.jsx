import React from 'react'

function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('home');

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (sectionName) => {
    setActiveSection(sectionName.toLowerCase());
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-700/50 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="w-full h-20 grid grid-cols-12">
        <div className="col-span-2"></div>
        
        {/* Logo/Signature */}
        <div className="col-span-2 flex items-center">
          <div className="group cursor-pointer">
            <div className="relative">
              {/* Animated signature background */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-20 transition-all duration-300"></div>
              
              {/* Signature placeholder */}
              <div className="relative px-4 py-2 rounded-lg transition-all duration-300 group-hover:scale-105">
                <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Sharan
                </div>
                <div className="text-xs text-gray-400 font-medium tracking-wider -mt-1">
                  DEVELOPER
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation Links */}
        <div className="col-span-6 flex justify-center items-center space-x-8">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => handleNavClick(item.name)}
              className={`relative text-lg font-semibold transition-all duration-300 px-4 py-2 rounded-lg group ${
                activeSection === item.name.toLowerCase()
                  ? 'text-indigo-300'
                  : 'text-indigo-300 hover:text-white'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover background */}
              {/* <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div> */}
              
              {/* Link text */}
              <span className="relative z-10">{item.name}</span>
              
              {/* Animated underline */}
              {/* <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 group-hover:w-full transition-all duration-300"></div> */}
              
              {/* Active indicator */}
              {activeSection === item.name.toLowerCase() && (
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-1 bg-indigo-400 rounded-full animate-pulse"></div>
              )}
            </a>
          ))}
        </div>
        
        <div className="col-span-2"></div>
      </div>
      
      {/* Mobile menu toggle (for future mobile responsiveness) */}
      <div className="md:hidden absolute right-4 top-1/2 transform -translate-y-1/2">
        <button className="text-indigo-400 hover:text-white transition-colors duration-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      <style jsx>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        nav a {
          animation: fade-in-down 0.6s ease-out both;
        }
        
        @media (max-width: 768px) {
          .space-x-8 {
            gap: 1rem;
          }
          
          nav a {
            font-size: 1rem;
            padding: 0.5rem 0.75rem;
          }
        }
      `}</style>
    </nav>
  )
}

export default Navbar