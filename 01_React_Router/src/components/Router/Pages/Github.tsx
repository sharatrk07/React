import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  FaGithub,
  FaUserFriends,
  FaBook,
  FaCalendarAlt,
  FaYoutube,
  FaMapMarkerAlt
} from "react-icons/fa";

interface GitData {
  login: string;
  name: string;
  bio: string;
  followers: number;
  following: number;
  public_repos: number;
  html_url: string;
  type: string;
  id: number;
  avatar_url: string;
  location: string;
  created_at: string;
  blog: string;
}

const Github: React.FC = () => {
  const data = useLoaderData() as GitData;
  
  return (
    <div 
      style={{
        maxWidth: "600px",
        margin: "2rem auto",
        padding: "2.5rem",
        backgroundColor: "#f8f9fa",
        borderRadius: "12px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        textAlign: "center",
        fontFamily: "'Segoe UI', Arial, sans-serif",
        color: "#2d333b",
        border: "1px solid #e1e4e8"
      }}
    >
      <img
        src={data.avatar_url}
        alt={data.login}
        style={{
          width: "140px",
          height: "140px",
          borderRadius: "50%",
          marginBottom: "1.5rem",
          border: "4px solid white",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
        }}
      />

      <h1 style={{ 
        margin: "0.5rem 0", 
        fontSize: "1.8rem", 
        fontWeight: "600",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "12px"
      }}>
        <FaGithub /> {data.name || data.login}
      </h1>

      <h3 style={{ 
        color: "#586069", 
        fontWeight: "400",
        margin: "0.5rem 0 1.5rem" 
      }}>
        @{data.login}
      </h3>

      {data.bio && (
        <p style={{ 
          fontStyle: "italic", 
          marginBottom: "1.5rem",
          maxWidth: "450px",
          margin: "0 auto 1.5rem"
        }}>
          {data.bio}
        </p>
      )}

      {data.location && (
        <p style={{ 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center",
          gap: "8px",
          marginBottom: "1rem",
          color: "#586069"
        }}>
          <FaMapMarkerAlt /> {data.location}
        </p>
      )}

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "1.5rem",
        margin: "1.5rem 0",
        padding: "1.5rem",
        borderRadius: "8px",
        backgroundColor: "white",
        boxShadow: "0 2px 5px rgba(0,0,0,0.05)"
      }}>
        <div style={{ 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center" 
        }}>
          <span style={{ fontSize: "1.5rem", fontWeight: "600" }}>{data.followers}</span>
          <span style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: "6px",
            color: "#586069" 
          }}>
            <FaUserFriends /> Followers
          </span>
        </div>

        <div style={{ 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center" 
        }}>
          <span style={{ fontSize: "1.5rem", fontWeight: "600" }}>{data.following}</span>
          <span style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: "6px",
            color: "#586069" 
          }}>
            <FaUserFriends /> Following
          </span>
        </div>

        <div style={{ 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center" 
        }}>
          <span style={{ fontSize: "1.5rem", fontWeight: "600" }}>{data.public_repos}</span>
          <span style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: "6px",
            color: "#586069" 
          }}>
            <FaBook /> Repositories
          </span>
        </div>

        <div style={{ 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center" 
        }}>
          <span style={{ fontSize: "1.5rem", fontWeight: "600" }}>
            {new Date(data.created_at).getFullYear()}
          </span>
          <span style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: "6px",
            color: "#586069" 
          }}>
            <FaCalendarAlt /> Joined
          </span>
        </div>
      </div>

      <div style={{ 
        display: "flex", 
        flexDirection: "column", 
        gap: "1rem", 
        marginTop: "1.5rem" 
      }}>
        {data.blog && (
          <a
            href={data.blog.includes("youtube.com") ? data.blog : `https://www.youtube.com/c/HiteshChoudharydotcom`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "0.75rem 1.5rem",
              backgroundColor: "#FF0000",
              color: "white",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "500",
              transition: "all 0.2s ease",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#cc0000";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#FF0000";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
            }}
          >
            <FaYoutube /> Visit YouTube Channel
          </a>
        )}

        <a
          href={data.html_url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            padding: "0.75rem 1.5rem",
            backgroundColor: "#24292e",
            color: "white",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: "500",
            transition: "all 0.2s ease",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#1a1e22";
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#24292e";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
          }}
        >
          <FaGithub /> View on GitHub
        </a>
      </div>
    </div>
  );
};

export default Github;