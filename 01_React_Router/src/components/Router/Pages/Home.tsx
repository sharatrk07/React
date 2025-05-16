// Home.tsx
import React from "react";
import { MdSportsCricket } from "react-icons/md";
import { FaChartLine, FaUserAlt, FaTrophy, FaCalendarAlt } from "react-icons/fa";

const Home: React.FC = () => (
  <div className="container my-5">
    <div className="row justify-content-center">
      <div className="col-lg-10">
        <div className="card border-0 shadow-lg overflow-hidden">
          <div className="card-body p-0">
            <div className="bg-primary text-white text-center py-5 px-4">
              <MdSportsCricket size={60} className="mb-3" />
              <h1 className="display-5 fw-bold">Welcome to CricBot</h1>
              <p className="lead fs-5 mb-4">
                Your AI-powered cricket companion for instant match updates, player stats,
                and expert insights—all in one place.
              </p>
              <button className="btn btn-light btn-lg px-4 fw-bold text-primary">
                Get Started
              </button>
            </div>
            
            <div className="p-4 p-md-5">
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="card h-100 border-0 shadow-sm hover-card">
                    <div className="card-body p-4 text-center">
                      <div className="feature-icon bg-primary bg-gradient text-white rounded-circle p-3 mb-4 mx-auto" style={{ width: "65px", height: "65px" }}>
                        <FaChartLine size={24} />
                      </div>
                      <h3 className="fs-4 fw-bold">Live Scores</h3>
                      <p className="text-muted">
                        Stay updated with ball-by-ball commentary and live scorecards from matches around the world.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6">
                  <div className="card h-100 border-0 shadow-sm hover-card">
                    <div className="card-body p-4 text-center">
                      <div className="feature-icon bg-warning bg-gradient text-white rounded-circle p-3 mb-4 mx-auto" style={{ width: "65px", height: "65px" }}>
                        <FaUserAlt size={24} />
                      </div>
                      <h3 className="fs-4 fw-bold">Player Insights</h3>
                      <p className="text-muted">
                        Analyze player performance, averages, strike rates, and compare statistics over time.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6">
                  <div className="card h-100 border-0 shadow-sm hover-card">
                    <div className="card-body p-4 text-center">
                      <div className="feature-icon bg-danger bg-gradient text-white rounded-circle p-3 mb-4 mx-auto" style={{ width: "65px", height: "65px" }}>
                        <FaTrophy size={24} />
                      </div>
                      <h3 className="fs-4 fw-bold">Tournament Trackers</h3>
                      <p className="text-muted">
                        Follow tournaments like IPL, World Cup, and more with standings, fixtures, and results.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6">
                  <div className="card h-100 border-0 shadow-sm hover-card">
                    <div className="card-body p-4 text-center">
                      <div className="feature-icon bg-success bg-gradient text-white rounded-circle p-3 mb-4 mx-auto" style={{ width: "65px", height: "65px" }}>
                        <FaCalendarAlt size={24} />
                      </div>
                      <h3 className="fs-4 fw-bold">Match Predictions</h3>
                      <p className="text-muted">
                        Get AI-powered match predictions and analysis based on historical data and current form.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-5">
                <p className="text-muted mb-4">Trusted by cricket enthusiasts worldwide</p>
                <div className="d-flex justify-content-center flex-wrap gap-4">
                  <span className="badge bg-light text-dark fs-6 p-2">ESPN Cricinfo</span>
                  <span className="badge bg-light text-dark fs-6 p-2">ICC</span>
                  <span className="badge bg-light text-dark fs-6 p-2">BCCI</span>
                  <span className="badge bg-light text-dark fs-6 p-2">Cricket Australia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <style>{`
      .hover-card {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      
      .hover-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
      }
      
      .feature-icon {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `}</style>
  </div>
);

export default Home;