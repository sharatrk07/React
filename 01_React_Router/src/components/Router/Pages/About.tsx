// About.tsx
import React from "react";
import { MdSportsCricket } from "react-icons/md";
import { FaUsers, FaHistory, FaCode, FaMedal, FaToolbox } from "react-icons/fa";

const About: React.FC = () => (
  <div className="container my-5">
    <div className="row justify-content-center">
      <div className="col-lg-10">
        <div className="card border-0 shadow-lg">
          <div className="card-body p-0">
            <div className="bg-gradient-primary text-white py-5 px-4 text-center">
              <MdSportsCricket size={50} className="mb-3" />
              <h1 className="display-5 fw-bold">About CricBot</h1>
              <p className="lead">
                Empowering cricket fans with AI-driven insights and real-time information
              </p>
            </div>
            
            <div className="p-4 p-md-5">
              <div className="row mb-5">
                <div className="col-lg-8 mx-auto">
                  <p className="fs-5 text-center mb-4">
                    CricBot is an innovative chatbot designed specifically for cricket enthusiasts. 
                    Powered by advanced AI technology, it delivers real-time match updates, 
                    deep analytics, and personalized recommendations to enhance your cricket experience.
                  </p>
                  
                  <div className="d-flex justify-content-center gap-3 mb-4">
                    <span className="badge rounded-pill bg-primary px-3 py-2">Since 2023</span>
                    <span className="badge rounded-pill bg-success px-3 py-2">10,000+ Users</span>
                    <span className="badge rounded-pill bg-warning text-dark px-3 py-2">200+ Matches</span>
                  </div>
                </div>
              </div>
              
              <h2 className="text-center mb-4 fw-bold">What Sets Us Apart</h2>
              
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="card h-100 border-0 shadow-sm feature-card">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center mb-3">
                        <div className="feature-icon bg-primary text-white rounded p-2 me-3">
                          <FaUsers size={20} />
                        </div>
                        <h3 className="fs-5 fw-bold mb-0">Community Focused</h3>
                      </div>
                      <p className="text-muted">
                        Join a thriving community of cricket fans sharing insights and engaging in discussions about the game.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-4">
                  <div className="card h-100 border-0 shadow-sm feature-card">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center mb-3">
                        <div className="feature-icon bg-warning text-white rounded p-2 me-3">
                          <FaHistory size={20} />
                        </div>
                        <h3 className="fs-5 fw-bold mb-0">Historical Data</h3>
                      </div>
                      <p className="text-muted">
                        Access comprehensive archives of past matches, player records, and historic cricket milestones.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-4">
                  <div className="card h-100 border-0 shadow-sm feature-card">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center mb-3">
                        <div className="feature-icon bg-danger text-white rounded p-2 me-3">
                          <FaCode size={20} />
                        </div>
                        <h3 className="fs-5 fw-bold mb-0">Advanced AI</h3>
                      </div>
                      <p className="text-muted">
                        Powered by cutting-edge AI algorithms that deliver accurate predictions and personalized insights.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-5">
                <h2 className="fw-bold mb-4">Our Mission</h2>
                <p className="fs-5 mb-4">
                  To revolutionize how cricket fans engage with the sport by providing 
                  intelligent, personalized, and real-time cricket information.
                </p>
                
                <div className="row g-4 mt-4">
                  <div className="col-md-6">
                    <div className="card h-100 border-0 bg-light">
                      <div className="card-body p-4">
                        <FaMedal size={30} className="text-primary mb-3" />
                        <h4 className="fw-bold">Our Values</h4>
                        <ul className="list-unstyled">
                          <li className="mb-2">✓ Accuracy in information</li>
                          <li className="mb-2">✓ Innovation in technology</li>
                          <li className="mb-2">✓ Passion for cricket</li>
                          <li>✓ Community engagement</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="card h-100 border-0 bg-light">
                      <div className="card-body p-4">
                        <FaToolbox size={30} className="text-primary mb-3" />
                        <h4 className="fw-bold">Our Technology</h4>
                        <ul className="list-unstyled">
                          <li className="mb-2">✓ Natural Language Processing</li>
                          <li className="mb-2">✓ Machine Learning Models</li>
                          <li className="mb-2">✓ Real-time Data Analytics</li>
                          <li>✓ Predictive Algorithms</li>
                        </ul>
                      </div>
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
      .bg-gradient-primary {
        background: linear-gradient(135deg, #0d6efd 0%, #0a58ca 100%);
      }
      
      .feature-card {
        transition: transform 0.3s ease;
      }
      
      .feature-card:hover {
        transform: translateY(-5px);
      }
      
      .feature-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
      }
    `}</style>
  </div>
);

export default About;