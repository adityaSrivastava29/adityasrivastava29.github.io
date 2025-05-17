import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formsubmit.co/adityasri.in@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast.success('Thank you for your message! I will get back to you soon.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      toast.error('Sorry, there was an error sending your message. Please try again later.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <ToastContainer />
      <div className="container">
        <div className="section-title">
          <h2>Contact Me</h2>
        </div>
        
        <div className="contact-container">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p className="contact-description">Feel free to contact me for any work or suggestions below.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <a href="mailto:adityasrivastava.niet@gmail.com" className="contact-link">
                  adityasrivastava.niet@gmail.com
                </a>
              </div>
              
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <a href="tel:+918840591937" className="contact-link">
                  +91-8840591937
                </a>
              </div>
              
              <div className="contact-item">
                <FaLinkedin className="contact-icon" />
                <a href="https://www.linkedin.com/in/adityakumar29" target="_blank" rel="noopener noreferrer" className="contact-link">
                  linkedin.com/in/adityakumar29
                </a>
              </div>
              
              <div className="contact-item">
                <FaGithub className="contact-icon" />
                <a href="https://github.com/adityaSrivastava29" target="_blank" rel="noopener noreferrer" className="contact-link">
                  github.com/adityaSrivastava29
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your email"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message"
                  rows="5"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          padding: 80px 0;
          background-color: #f8f9fa;
        }

        .section-title {
          text-align: center;
          margin-bottom: 50px;
        }

        .section-title h2 {
          font-size: 2.5rem;
          color: #2c3e50;
          margin-bottom: 15px;
        }

        .title-underline {
          width: 80px;
          height: 4px;
          background: #3498db;
          margin: 0 auto;
          border-radius: 2px;
        }

        .contact-container {
          display: flex;
          flex-wrap: wrap;
          gap: 40px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .contact-info {
          flex: 1;
          min-width: 300px;
        }

        .contact-info h3 {
          font-size: 1.8rem;
          color: #2c3e50;
          margin-bottom: 20px;
        }

        .contact-description {
          color: #666;
          margin-bottom: 30px;
          line-height: 1.6;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .contact-icon {
          font-size: 1.2rem;
          color: #3498db;
        }

        .contact-link {
          color: #2c3e50;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-link:hover {
          color: #3498db;
        }

        .contact-form-container {
          flex: 1;
          min-width: 300px;
        }

        .contact-form {
          background: white;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          color: #2c3e50;
          font-weight: 500;
        }

        .form-control {
          width: 100%;
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 5px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }

        .form-control:focus {
          outline: none;
          border-color: #3498db;
          box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
        }

        textarea.form-control {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          background-color: #3498db;
          color: white;
          padding: 12px 30px;
          border: none;
          border-radius: 5px;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
          width: 100%;
        }

        .submit-btn:hover {
          background-color: #2980b9;
        }

        .submit-btn:disabled {
          background-color: #bdc3c7;
          cursor: not-allowed;
        }

        @media (max-width: 768px) {
          .contact-container {
            flex-direction: column;
          }
          
          .contact-form {
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
