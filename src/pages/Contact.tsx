import { motion } from "framer-motion";
import './Contact.css';
import { useRef } from "react";
import emailjs from "emailjs-com";
// If you see a type error for 'emailjs-com', install types: npm install --save-dev @types/emailjs-com (if available)

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_fqhsb88", // replace with your EmailJS service ID
        "template_6xor477", // replace with your EmailJS template ID
        form.current!,
        "gO3TLHf-y5TwjEZlD" // replace with your EmailJS user ID (public key)
      )
      .then(
        () => {
          alert("Message sent successfully!");
        },
        () => {
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Get In Touch
          </h2>
          <p className="section-subtitle">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll do my best to get back to you!
          </p>
        </motion.div>

        <motion.div 
          className="contact-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="contact-methods">
            <motion.a
              href="mailto:bhanusharma14581@gmail.com"
              className="contact-email"
              whileHover={{ 
                backgroundColor: "rgba(124, 58, 237, 0.1)",
                transform: "translateY(-3px)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Say Hello</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </motion.a>

            <div className="social-links">
              <motion.a 
                href="https://github.com/Bhanu-Sharma-7" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                aria-label="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/bhanu-sharma-dev" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </motion.a>
              <motion.a 
                href="https://x.com/Bhanu_Sharma_0" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                aria-label="X (Twitter)"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </motion.a>
            </div>
          </div>

          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} required></textarea>
            </div>
            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ 
                backgroundColor: "rgba(124, 58, 237, 0.1)",
                transform: "translateY(-3px)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
