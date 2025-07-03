import React from "react";

function NotFound() {
  return (
    <div style={{ lineHeight: 1.6, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', textAlign: 'center', padding: '5rem 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '9999px', width: 80, height: 80, marginBottom: 24 }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" style={{ color: '#ef4444' }}>
          <circle cx="12" cy="12" r="10" stroke="#ef4444" strokeWidth="2" fill="none" />
          <line x1="12" y1="8" x2="12" y2="12" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
          <circle cx="12" cy="16" r="1" fill="#ef4444" />
        </svg>
      </div>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#facc15' }}>404</h1>
      <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.7)', marginTop: 8, marginBottom: 24 }}>
        ไม่พบหน้าที่คุณต้องการค้นหา
      </p>
      <a href="/" style={{
        display: 'inline-block',
        padding: '0.5rem 1.5rem',
        background: '#facc15',
        color: '#222',
        borderRadius: 8,
        fontWeight: 'bold',
        textDecoration: 'none',
        fontSize: '1rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
      }}>
        กลับสู่หน้าหลัก
      </a>
    </div>
  );
}

export default NotFound;