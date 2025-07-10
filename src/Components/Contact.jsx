import React, { useEffect, useState } from "react";

function Contact() {
  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // AOS init would go here
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target;
    const formData = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
    
    setIsSubmitting(false);
  };

  return (
    <div id="contact" className="w-screen bg-gray-900 py-20 px-4 relative overflow-hidden">
      {/* Subtle background dots */}
      <div className="absolute inset-0 opacity-5 z-0">
        <svg className="w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
          <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1" fill="#818cf8" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Contact Me
          </h2>
          <div className="w-24 h-1 mt-3 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 text-lg mt-4">
            Whether it's a project, job opportunity, or just a chat — my inbox is open.
          </p>
        </div>

        {/* Contact Card */}
        <div
          className="relative bg-white/5 backdrop-blur-lg p-8 md:p-12 rounded-2xl border border-white/10 shadow-xl"
          data-aos="fade-up"
        >
          {/* Optional soft outer glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-lg opacity-10 -z-10"></div>

          {/* Success/Error Messages */}
          {formStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-600 bg-opacity-20 border border-green-500 border-opacity-30 rounded-lg">
              <p className="text-green-200 text-center">✅ Message sent successfully! I'll get back to you soon.</p>
            </div>
          )}
          
          {formStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-600 bg-opacity-20 border border-red-500 border-opacity-30 rounded-lg">
              <p className="text-red-200 text-center">❌ Something went wrong. Please try again.</p>
            </div>
          )}

          {/* Content */}
          <form
            action="https://formspree.io/f/xovwgvwv" // Replace with your actual Formspree ID
            method="POST"
            onSubmit={handleSubmit}
            className="relative z-10 space-y-6"
          >
            <div>
              <label className="text-indigo-400 font-semibold block mb-1">Name</label>
              <input
                name="name"
                type="text"
                required
                className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-indigo-400 font-semibold block mb-1">Email</label>
              <input
                name="email"
                type="email"
                required
                className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label className="text-indigo-400 font-semibold block mb-1">Subject</label>
              <input
                name="subject"
                type="text"
                required
                className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="What's this about?"
              />
            </div>
            <div>
              <label className="text-indigo-400 font-semibold block mb-1">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Tell me about your project, question, or just say hi!"
              ></textarea>
            </div>
            
            {/* Hidden fields for better spam protection */}
            <input type="hidden" name="_subject" value="New contact from portfolio" />
            <input type="hidden" name="_next" value="thanks" />
            <input type="hidden" name="_captcha" value="false" />
            
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message 🚀'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;