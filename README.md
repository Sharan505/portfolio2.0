# 🚀 Portfolio Website

A modern, responsive portfolio website built with React and Vite, featuring smooth animations, dark theme, and a professional design.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![React](https://img.shields.io/badge/React-18.0+-blue)
![Vite](https://img.shields.io/badge/Vite-5.0+-purple)
![Tailwind](https://img.shields.io/badge/Tailwind-3.0+-cyan)

## ✨ Features

- **🎨 Modern Design**: Clean, professional layout with glassmorphism effects
- **📱 Fully Responsive**: Optimized for all devices and screen sizes
- **🌙 Dark Theme**: Elegant dark mode with gradient accents
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and builds
- **🎭 Smooth Animations**: AOS (Animate On Scroll) library for engaging user experience
- **📧 Contact Form**: Integrated email functionality with Formspree
- **🔧 Component-Based**: Modular React components for easy maintenance
- **🎯 SEO Optimized**: Proper semantic HTML and meta tags

## 🛠️ Tech Stack

- **Frontend Framework**: React 18+
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: AOS (Animate On Scroll)
- **Form Handling**: Formspree
- **Icons**: Lucide React
- **Deployment**: Netlify/Vercel

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── assets/
│   │   └── images/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🚀 Quick Start

### Prerequisites

Make sure you have Node.js installed (version 16 or higher).

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

## 🔧 Configuration

### Contact Form Setup

1. **Sign up for Formspree**
   - Visit [formspree.io](https://formspree.io)
   - Create a new form
   - Get your form endpoint

2. **Update Contact Component**
   ```javascript
   // In Contact.jsx, replace:
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```

### Customization

#### Colors & Theme
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#4f46e5',    // Indigo
        secondary: '#7c3aed',  // Purple
        accent: '#ec4899',     // Pink
      }
    }
  }
}
```

#### Animation Settings
```javascript
// In components with AOS
AOS.init({
  duration: 800,        // Animation duration
  offset: 120,          // Offset from trigger point
  easing: 'ease-in-out', // Easing function
  once: true            // Animate only once
});
```

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues

## 🎨 Components Overview

### Header
- Fixed navigation with smooth scrolling
- Mobile-responsive hamburger menu
- Active section highlighting

### Hero Section
- Animated typing effect
- Gradient text styling
- Call-to-action buttons

### About Section
- Personal introduction
- Skills showcase
- Professional experience

### Projects Section
- **Main Projects**: Full-featured projects with GitHub and live demo links
- **Mini Projects**: Smaller utility projects and experiments
- Hover effects and technology tags

### Skills Section
- Technology stack visualization
- Proficiency indicators
- Categorized skill groups

### Contact Section
- Functional contact form
- Social media links
- Email integration

## 🌐 Deployment

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure form handling in Netlify dashboard

### Vercel
1. Connect your GitHub repository
2. Vercel will automatically detect Vite configuration
3. Deploy with default settings

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   {
     "homepage": "https://yourusername.github.io/portfolio",
     "scripts": {
       "deploy": "gh-pages -d dist"
     }
   }
   ```
3. Deploy: `npm run build && npm run deploy`

## 🔧 ESLint Configuration

The project uses ESLint for code quality. To extend the configuration:

```javascript
// .eslintrc.js
module.exports = {
  extends: [
    'eslint:recommended',
    '@typescript-eslint/recommended', // If using TypeScript
    'plugin:react/recommended',
    'plugin:react-hooks/recommended'
  ],
  rules: {
    // Custom rules
  }
}
```

## 📈 Performance Optimization

- **Code Splitting**: Lazy load components with React.lazy()
- **Image Optimization**: Use WebP format and lazy loading
- **Bundle Analysis**: Use `npm run build -- --analyze`
- **Caching**: Configure service workers for offline support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - Frontend framework
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [AOS](https://michalsnik.github.io/aos/) - Animations
- [Formspree](https://formspree.io/) - Form handling
- [Lucide](https://lucide.dev/) - Icons

## 📞 Contact

- **Email**: sharan27505@gmail.com
- **LinkedIn**: [LinkedIn](https://linkedin.com/in/sharan-muthuraja)
- **GitHub**: [GitHub](https://github.com/Sharan505)
- **Portfolio**: [Portfolio](https://yourwebsite.com)

---

⭐ **Star this repository if you found it helpful!**

Made with ❤️ by [Sharan M](https://github.com/Sharan505)
