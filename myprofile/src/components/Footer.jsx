import React from 'react';
import './Footer.css'; // 스타일을 위한 별도의 CSS 파일

const Footer = () => {
    return (
    <footer className="footer">
    <div className="footer-icons">
        {/* 아이콘을 4개로 구성 */}
        <div className="icon"></div>
        <div className="icon"></div>
        <div className="icon"></div>
        <div className="icon"></div>
    </div>
        <div className="footer-text">
        <span>PORTFOLIO.</span>
    </div>
    </footer>
);
};

export default Footer;
