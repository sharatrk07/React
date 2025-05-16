// Contact.tsx
import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
  FaPaperPlane,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { MdSportsCricket } from "react-icons/md";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log(formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card border-0 shadow-lg overflow-hidden">
            <div className="card-body p-0">
              <div className="bg-gradient-dark text-white py-4 px-4 text-center">
                <MdSportsCricket size={45} className="mb-2" />
                <h1 className="display-6 fw-bold">Get in Touch with CricBot</h1>
                <p className="lead">
                  Questions, feedback or just say hello — we're here for you!
                </p>
              </div>
              
              <div className="row g-0">
                <div className="col-md-5 bg-light p-4 p-lg-5">
                  <h3 className="fw-bold mb-4 border-bottom pb-2">Contact Information</h3>
                  
                  <div className="d-flex mb-4">
                    <div className="flex-shrink-0">
                      <div className="contact-icon bg-primary text-white rounded-circle">
                        <FaMapMarkerAlt />
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h5 className="fw-bold">Our Location</h5>
                      <address className="mb-0">
                        Vinayaka Mens PG,<br />
                        Maruthi Timber Rd,<br />
                        Kudlu Gate, Krishna Reddy Industrial Area,<br />
                        Bangalore - 560068
                      </address>
                    </div>
                  </div>
                  
                  <div className="d-flex mb-4">
                    <div className="flex-shrink-0">
                      <div className="contact-icon bg-primary text-white rounded-circle">
                        <FaEnvelope />
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h5 className="fw-bold">Email Us</h5>
                      <a href="mailto:sharatrk59@gmail.com" className="text-decoration-none text-primary">
                        sharatrk59@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="d-flex mb-4">
                    <div className="flex-shrink-0">
                      <div className="contact-icon bg-primary text-white rounded-circle">
                        <FaPhone />
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h5 className="fw-bold">Call Us</h5>
                      <a href="tel:+919740065770" className="text-decoration-none text-primary">
                        +91 97400 65770
                      </a>
                    </div>
                  </div>
                  
                  <div className="d-flex mb-4">
                    <div className="flex-shrink-0">
                      <div className="contact-icon bg-primary text-white rounded-circle">
                        <FaClock />
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h5 className="fw-bold">Working Hours</h5>
                      <p className="mb-0">Monday – Friday: 9:30 AM – 6:30 PM</p>
                      <p className="mb-0">Saturday: 10:00 AM – 4:00 PM</p>
                    </div>
                  </div>
                  
                  <div className="mt-5">
                    <h5 className="fw-bold mb-3">Connect With Us</h5>
                    <div className="d-flex gap-3">
                      <a href="https://twitter.com/sharatrk07" className="social-link bg-info text-white" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                      </a>
                      <a href="https://wa.me/919740065770" className="social-link bg-success text-white" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp />
                      </a>
                      <a href="https://instagram.com/" className="social-link bg-danger text-white" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                      </a>
                      <a href="https://linkedin.com/" className="social-link bg-primary text-white" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-7 p-4 p-lg-5">
                  <h3 className="fw-bold mb-4">Send Us a Message</h3>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label fw-bold">Your Name</label>
                      <input 
                        type="text" 
                        className="form-control form-control-lg" 
                        id="name" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name" 
                        required 
                      />
                    </div>
                    
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label fw-bold">Email Address</label>
                      <input 
                        type="email" 
                        className="form-control form-control-lg" 
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email" 
                        required 
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="message" className="form-label fw-bold">Your Message</label>
                      <textarea 
                        className="form-control form-control-lg" 
                        id="message" 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5} 
                        placeholder="Type your message here..." 
                        required
                      ></textarea>
                    </div>
                    
                    <button type="submit" className="btn btn-primary btn-lg d-flex align-items-center">
                      <FaPaperPlane className="me-2" /> Send Message
                    </button>
                  </form>
                  
                  <div className="mt-5">
                    <div className="alert alert-info d-flex align-items-center" role="alert">
                      <MdSportsCricket size={20} className="me-2" />
                      <div>
                        <strong>Tip:</strong> Ask IPL stats and queries like CricBot on ESPN Cricinfo:
                        <a href="https://www.espncricinfo.com/ask" className="ms-2 btn btn-sm btn-primary text-white text-decoration-none" target="_blank" rel="noopener noreferrer">
                          Visit ESPN Cricinfo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .bg-gradient-dark {
          background: linear-gradient(135deg, #343a40 0%, #212529 100%);
        }
        
        .contact-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .social-link {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
        
        .social-link:hover {
          transform: translateY(-3px);
          opacity: 0.9;
        }
      `}</style>
    </div>
  );
};

export default Contact;