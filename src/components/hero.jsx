import React, { useState, useEffect } from 'react';

export default function Hero() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 800);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); 
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleIconClick = () => {
        document.querySelectorAll('#nav-icon3').forEach(icon => {
            icon.classList.toggle('open');
        });
    };

    return (
        <div className="intro">
            <div className="title">
                <h1>The best car ever.</h1>
                <h2>Nissan GT-R 2024</h2>
            </div>
            <header>
                <div className="logo">
                    <h1>GT-<span>R</span></h1>
                </div>
                {isMobileView ? (
                    <>
                        <nav style={{ top: isMenuOpen ? '20%' : '-50%' }}>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Info</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><button>Store</button></li>
                            </ul>
                        </nav>
                        <div id="nav-icon3" onClick={() => { handleToggleMenu(); handleIconClick(); }}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </>
                ) : (
                    <nav>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Info</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><button>Store</button></li>
                        </ul>
                    </nav>
                )}
            </header>
        </div>
    );
}
