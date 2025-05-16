// Footer.tsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaGithub,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { MdSportsCricket } from "react-icons/md";

const Footer: React.FC = () => (
  <footer className="bg-dark text-light mt-5">
    <div className="container py-5">
      <div className="row g-4">
        <div className="col-lg-4 col-md-6">
          <div className="mb-4">
            <h3 className="d-flex align-items-center mb-3">
              <MdSportsCricket className="me-2 text-warning" size={28} />
              <span className="fw-bold fs-4">CricBot</span>
            </h3>
            <p className="fs-6 text-light mb-3">Your AI-powered cricket companion that provides expert insights and real-time analysis</p>
            <div className="d-flex align-items-start mb-2">
              <FaMapMarkerAlt className="me-2 mt-1 text-danger" />
              <address>
                <strong>Sharat RK</strong><br />
                Vinayaka Mens PG,<br />
                Maruthi Timber Rd, Kudlu Gate,<br />
                Krishna Reddy Industrial Area,<br />
                <strong>Bangalore - 560068</strong>
              </address>
            </div>
          </div>
        </div>
        
        <div className="col-lg-2 col-md-6">
          <h5 className="mb-3 pb-2 border-bottom border-secondary">Quick Links</h5>
          <ul className="list-unstyled">
            <li className="mb-2">
            <Link to="/" className="text-decoration-none text-white d-flex align-items-center">

                <FaExternalLinkAlt className="me-2 text-warning" size={12} />
                Home
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/about" className="text-decoration-none text-white d-flex align-items-center">
                <FaExternalLinkAlt className="me-2 text-warning" size={12} />
                About Us
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/privacy" className="text-decoration-none text-white d-flex align-items-center">
                <FaExternalLinkAlt className="me-2 text-warning" size={12} />
                Privacy Policy
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/terms" className="text-decoration-none text-white d-flex align-items-center">
                <FaExternalLinkAlt className="me-2 text-warning" size={12} />
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="col-lg-3 col-md-6">
          <h5 className="mb-3 pb-2 border-bottom border-secondary">Contact Us</h5>
          <ul className="list-unstyled">
            <li className="mb-3 d-flex align-items-center">
              <FaEnvelope className="me-2 text-warning" />
              <a href="mailto:sharatrk59@gmail.com" className="text-decoration-none text-white">
                sharatrk59@gmail.com
              </a>
            </li>
            <li className="mb-3 d-flex align-items-center">
              <FaPhone className="me-2 text-warning" />
              <a href="tel:+919740065770" className="text-decoration-none text-white">
                +91 97400 65770
              </a>
            </li>
            <li className="mb-3 d-flex align-items-center">
              <FaWhatsapp className="me-2 text-warning" />
              <a href="https://wa.me/919740065770" className="text-decoration-none text-white">
                WhatsApp Support
              </a>
            </li>
          </ul>
        </div>
        
        <div className="col-lg-3 col-md-6">
          <h5 className="mb-3 pb-2 border-bottom border-secondary">Connect With Us</h5>
          <div className="d-flex gap-3 mb-4">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaFacebook size={24} className="text-light social-hover" />
            </a>
            <a href="https://github.com/sharatrk07" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub size={24} className="text-light social-hover" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaInstagram size={24} className="text-light social-hover" />
            </a>
            <a href="https://twitter.com/sharatrk07" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaTwitter size={24} className="text-light social-hover" />
            </a>
          </div>
          <div className="newsletter">
            <h6>Subscribe to our newsletter</h6>
            <div className="input-group">
              <input type="email" className="form-control" placeholder="Enter your email" />
              <button className="btn btn-warning" type="button">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-darker py-3 text-center">
      <div className="container">
        <p className="mb-0 text-light-emphasis">
          &copy; {new Date().getFullYear()} <span className="fw-bold">CricBot</span>. All rights reserved.
        </p>
      </div>
    </div>
    
    <style>{`
      .bg-darker {
        background-color: #1a1a1a;
      }
      
      .social-hover:hover {
        color: #ffc107 !important;
        transform: translateY(-3px);
        transition: all 0.3s ease;
      }
      
      .social-icon {
        transition: all 0.3s ease;
      }
      
      .text-light-emphasis {
        color: #d1d5db;
      }
      
      .border-bottom {
        border-width: 2px !important;
      }

      .brand-text {
        letter-spacing: 1px;
      }
    `}</style>
  </footer>
);

export default Footer;