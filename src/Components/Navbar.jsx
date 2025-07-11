import React from 'react';

function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('home');
  const [menuOpen, setMenuOpen] = React.useState(false);

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
    setMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-700/50 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="w-full h-20 px-6 flex items-center justify-between">
        {/* Logo/Signature */}
        <div className="flex items-center space-x-2">
          <div className="group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-20 transition-all duration-300"></div>
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

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
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
              <span className="relative z-10">{item.name}</span>
              {activeSection === item.name.toLowerCase() && (
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-1 bg-indigo-400 rounded-full animate-pulse"></div>
              )}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-indigo-400 hover:text-white transition-colors duration-300 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2 flex flex-col bg-gray-900/95 backdrop-blur">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => handleNavClick(item.name)}
              className={`text-base font-medium px-3 py-2 rounded-md transition-all duration-200 ${
                activeSection === item.name.toLowerCase()
                  ? 'text-indigo-300'
                  : 'text-indigo-300 hover:text-white'
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}

      {/* Animations */}
      <style>{`
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
      `}</style>
    </nav>
  );
}

export default Navbar;
