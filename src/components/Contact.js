import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the mailto URL
    const { name, email, message } = formData;
    const mailtoLink = `mailto:adityasrivastava.niet@gmail.com?subject=Message%20from%20${name}&body=Name:%20${name}%0AEmail:%20${email}%0A%0A${message}`;
    
    // Open the user's email client
    window.location.href = mailtoLink;

    // Optionally show a submitted message (won't display if routed to an email client)
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);

    // Reset the form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact Me</h2>
        </div>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
          <div style={{ flex: 1, minWidth: '300px' }}>
            <h3>Get In Touch</h3>
            <p>Feel free to contact me for any work or suggestions below.</p>
            
            <div style={{ marginTop: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <FaEnvelope style={{ marginRight: '10px' }} />
                <a href="mailto:adityasrivastava.niet@gmail.com">adityasrivastava.niet@gmail.com</a>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <FaPhone style={{ marginRight: '10px' }} />
                <a href="tel:+918840591937">+91-8840591937</a>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <FaLinkedin style={{ marginRight: '10px' }} />
                <a href="https://www.linkedin.com/in/adityakumar29" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/adityakumar29
                </a>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <FaGithub style={{ marginRight: '10px' }} />
                <a href="https://github.com/adityaSrivastava29" target="_blank" rel="noopener noreferrer">
                  github.com/adityaSrivastava29
                </a>
              </div>
            </div>
          </div>
          
          <div style={{ flex: 1, minWidth: '300px' }}>
            <form className="contact-form" onSubmit={handleSubmit}>
              {submitted && (
                <div style={{ 
                  padding: '10px', 
                  backgroundColor: '#d4edda', 
                  color: '#155724',
                  border: '1px solid #c3e6cb',
                  borderRadius: '4px',
                  marginBottom: '20px'
                }}>
                  Thank you for your message! I'll get back to you soon.
                </div>
              )}
              
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
                ></textarea>
              </div>
              
              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
