import React from "react";
import { Routes, Route, Link } from "react-router";

import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const HeroBanner = () => (
  <div
    style={{
      background: `url('/images/rov-hero.jpg') center/cover no-repeat`,
      height: "70vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
    }}
  >
    <div
      style={{
        background: "rgba(0, 0, 0, 0.6)",
        padding: "2rem 3rem",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "3rem", color: "#f0c000", margin: 0 }}>
        ยินดีต้อนรับสู่สมรภูมิแห่งเกียรติยศ
      </h1>
      <p style={{ margin: "1rem 0", fontSize: "1.2rem" }}>
        จัดทีมฮีโร่ พิชิตศัตรู เพื่อเกียรติและชัยชนะ!
      </p>
      <Link to="/product" style={ctaButton}>
        ดูฮีโร่ & ไอเทม
      </Link>
    </div>
  </div>
);

const ctaButton = {
  backgroundColor: "#f0c000",
  color: "#000",
  padding: "0.8rem 2rem",
  borderRadius: "5px",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "1.1rem",
  transition: "all 0.3s ease",
};

const StyledLink = ({ to, children }) => (
  <Link
    to={to}
    style={{
      color: "#f0c000",
      textDecoration: "none",
      fontWeight: "bold",
      fontSize: "1.1rem",
      position: "relative",
      padding: "5px 10px",
      cursor: "pointer",
    }}
    onMouseEnter={(e) => {
      e.target.style.color = "#fff";
      e.target.style.borderBottom = "2px solid #f0c000";
    }}
    onMouseLeave={(e) => {
      e.target.style.color = "#f0c000";
      e.target.style.borderBottom = "none";
    }}
  >
    {children}
  </Link>
);

const contentBox = {
  padding: "2rem",
  maxWidth: "960px",
  margin: "0 auto",
  backgroundColor: "rgba(255, 255, 255, 0.03)",
};

function App() {
  return (
    <div
      style={{
        fontFamily: "Prompt, sans-serif",
        background: "linear-gradient(to right, #0f0f0f, #1a1a1a)",
        color: "#fff",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        overflowX: "hidden",
        width: "100%",
      }}
    >
      <style>{`
        html, body, #root {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          width: 100%;
          overflow-x: hidden;
        }
        /* Responsive nav */
        @media (max-width: 700px) {
          nav {
            flex-direction: column !important;
            gap: 10px !important;
            padding: 0.7rem 0.5rem !important;
          }
          nav img {
            margin: 0 0 10px 0 !important;
          }
        }
        @media (max-width: 600px) {
          .contentBox {
            padding: 1rem !important;
          }
        }
        @media (max-width: 500px) {
          nav {
            gap: 4px !important;
          }
          nav img {
            height: 32px !important;
          }
          .contentBox {
            padding: 0.5rem !important;
          }
        }
      `}</style>

      <nav
        style={{
          backgroundColor: "#121212",
          padding: "1rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "40px",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <img
          src="https://cdn-webth.garenanow.com/webth/rov/mainsite/v2/logo_rov.png"
          alt="RoV Logo"
          style={{
            height: "40px",
            marginRight: "20px",
          }}
        />
        <StyledLink to="/">🏠 หน้าหลัก</StyledLink>
        <StyledLink to="/about">🎮 เกี่ยวกับเกม</StyledLink>
        <StyledLink to="/product">🛡 ฮีโร่ & ไอเทม</StyledLink>
        <StyledLink to="/contact">📞 ติดต่อ</StyledLink>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroBanner />
              <div className="contentBox" style={contentBox}>
                <Home />
              </div>
            </>
          }
        />
        <Route path="/about" element={<div className="contentBox" style={contentBox}><About /></div>} />
        <Route path="/product" element={<div className="contentBox" style={contentBox}><Product /></div>} />
        <Route path="/contact" element={<div className="contentBox" style={contentBox}><Contact /></div>} />
        <Route path="/notfound" element={<div className="contentBox" style={contentBox}><NotFound /></div>} />
        {/* ✅ เส้นทาง fallback สำหรับเส้นทางที่ไม่ตรง */}
        <Route path="*" element={<div className="contentBox" style={contentBox}><NotFound /></div>} />
      </Routes>

      <footer
        style={{
          backgroundColor: "#121212",
          color: "#f0c000",
          textAlign: "center",
          padding: "1rem",
        }}
      >
        <p style={{ margin: 0 }}>
          © 2015 TencenT Games Inc. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
