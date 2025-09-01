import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (index) => {
        const targetY = window.innerHeight * index;
        window.scrollTo({
            top: targetY,
            behavior: 'smooth'
        });
        setIsMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto px-6 py-4">
                <div className="flex justify-end items-center">
                    <div className="hidden md:flex space-x-20">
                        {['HOME', 'ABOUT', 'SKILLS', 'PROJECTS', 'CONTACT'].map((item, index) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(index)}
                                className="relative text-lg font-bold text-white transition-all duration-300 group px-4 py-1 transform hover:scale-105"
                            >
                                <span className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                                    <svg
                                        width="60"
                                        height="60"
                                        viewBox="0 0 100 100"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="rotate-45"
                                    >
                                        <polygon points="50,0 100,100 0,100" fill="red" />
                                    </svg>
                                </span>

                                <span className="relative text-white group-hover:text-black transition-colors duration-300">
                                    {item}
                                </span>
                            </button>
                        ))}
                    </div>


                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                            <div className={`w-full h-px bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
                            <div className={`w-full h-px bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                            <div className={`w-full h-px bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
                        </div>
                    </button>
                </div>

                <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-64 mt-6' : 'max-h-0'
                    }`}>
                    <div className="space-y-4 py-4">
                        {['HOME', 'ABOUT', 'SKILLS', 'PROJECTS', 'CONTACT'].map((item, index) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(index)}
                                className="block w-full text-left text-sm font-light tracking-[0.2em] text-gray-400 hover:text-white transition-colors duration-300"
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar