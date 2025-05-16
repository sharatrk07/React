// useparams used to get the parameter given in the url, it has been declared like path="/user/:userid"

import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const User: React.FC = () => {
  const { userid } = useParams<{ userid: string }>();

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "2rem auto",
        padding: "2rem",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        fontFamily: "Arial, sans-serif",
        color: "#333",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        <FaUser style={{ fontSize: "4rem", color: "#007bff" }} />
        <h1 style={{ margin: "0.5rem 0" }}>
          {userid ? userid.toUpperCase() : "Guest"}
        </h1>
      </div>
      <div style={{ lineHeight: "1.6" }}>
        <p>
          <FaEnvelope style={{ marginRight: "8px", color: "#007bff" }} />{" "}
          sharatrk07@gmail.com
        </p>
        <p>
          <FaPhone style={{ marginRight: "8px", color: "#007bff" }} /> +91 97400
          65770
        </p>
        <p>
          <FaMapMarkerAlt style={{ marginRight: "8px", color: "#007bff" }} />{" "}
          Bangalore, India
        </p>
      </div>
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <Link
          to="/"
          style={{
            display: "inline-block",
            padding: "0.75rem 1.5rem",
            backgroundColor: "#007bff",
            color: "#fff",
            borderRadius: "4px",
            textDecoration: "none",
          }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default User;
