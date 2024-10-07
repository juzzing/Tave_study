import './Header.css'
import memoImage2 from "../assets/미모지브이.png"
import { useState } from 'react';

const Header = () => {
        const [isOpen, setIsOpen] = useState(false); // 햄버거 메뉴의 열림/닫힘 상태
    
        const toggleMenu = () => {
            setIsOpen(!isOpen);
        };

    return (
        <header className="header">
        <div className="logo">
            <h1 className="logo-text">P</h1>
            <img className="logo-image" src={memoImage2}/>
            <h1 className="logo-text">RTFOLIO.</h1>
        </div>
        <div className="nav-container">
                <nav className={`nav ${isOpen ? 'open' : ''}`}>
                    <ul className="nav-links">
                        <li><a href="#about">ABOUT</a></li>
                        <li><a href="#goal">GOAL</a></li>
                    </ul>
                </nav>

            <div className="hamburger" onClick = {toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        </header>
    );
}

export default Header;