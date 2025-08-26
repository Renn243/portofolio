import React, { useState, useEffect, useRef } from 'react';
import bgVideo from "../assets/persona3reload.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope as faEnvelopeSolid } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { I1, I2, I3, I4, I5, I6, I7, I8, I9 } from '../assets/icons'
import Char from '../assets/character.jpg'

import { Link } from "react-router-dom";

const Home = () => {
    const horizontalRef = useRef(null);
    const projectsRef = useRef(null);
    const [scrollY, setScrollY] = useState(0);

    const projects = [
        {
            id: '01',
            title: 'E-COMMERCE PLATFORM',
            subtitle: 'Full-Stack Development',
            description: 'A modern e-commerce solution built with React and Node.js, featuring real-time inventory management, secure payment processing, and an intuitive admin dashboard.',
            tech: ['React.js', 'Node.js', 'MongoDB', 'Stripe API', 'Socket.io'],
            year: '2024',
            status: 'LIVE',
            image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMEYxNDE5Ii8+CjxyZWN0IHg9IjIwIiB5PSIyMCIgd2lkdGg9IjM2MCIgaGVpZ2h0PSIyNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzM0ODNGNiIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiBmb250LWZhbWlseT0iSW50ZXIiIGZvbnQtc2l6ZT0iMjAiIGZpbGw9IiMzNDgzRjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkUtQ09NTUVSQ0U8L3RleHQ+Cjx0ZXh0IHg9IjIwMCIgeT0iMTgwIiBmb250LWZhbWlseT0iSW50ZXIiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2Mzc0OEUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlBMQVRGT1JNPC90ZXh0Pgo8L3N2Zz4='
        },
        {
            id: '02',
            title: 'TASK MANAGEMENT SYSTEM',
            subtitle: 'Collaborative Application',
            description: 'Team collaboration platform with real-time updates, project tracking, and advanced reporting features. Built for modern remote teams.',
            tech: ['Next.js', 'PostgreSQL', 'Socket.io', 'Redis', 'Tailwind CSS'],
            year: '2024',
            status: 'DEVELOPMENT',
            image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMEYxNDE5Ii8+CjxyZWN0IHg9IjIwIiB5PSIyMCIgd2lkdGg9IjM2MCIgaGVpZ2h0PSIyNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIyRDNFRSIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiBmb250LWZhbWlseT0iSW50ZXIiIGZvbnQtc2l6ZT0iMjAiIGZpbGw9IiMyMkQzRUUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlRBU0sgTUdNVDwvdGV4dD4KPHRleHQgeD0iMjAwIiB5PSIxODAiIGZvbnQtZmFtaWx5PSJJbnRlciIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzYzNzQ4RSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+U1lTVEVNPC90ZXh0Pgo8L3N2Zz4='
        },
        {
            id: '03',
            title: 'WEATHER ANALYTICS',
            subtitle: 'Data Visualization',
            description: 'Advanced weather tracking application with predictive analytics, beautiful data visualization, and location-based forecasting.',
            tech: ['React.js', 'D3.js', 'Weather API', 'Chart.js', 'PWA'],
            year: '2023',
            status: 'LIVE',
            image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMEYxNDE5Ii8+CjxyZWN0IHg9IjIwIiB5PSIyMCIgd2lkdGg9IjM2MCIgaGVpZ2h0PSIyNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzEwQjk4MSIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiBmb250LWZhbWlseT0iSW50ZXIiIGZvbnQtc2l6ZT0iMjAiIGZpbGw9IiMxMEI5ODEiIHRleHQtYW5jaG9yPSJtaWRkbGUiPldFQVRIRVI8L3RleHQ+Cjx0ZXh0IHg9IjIwMCIgeT0iMTgwIiBmb250LWZhbWlseT0iSW50ZXIiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2Mzc0OEUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkFOQUxZVElDUzwvdGV4dD4KPC9zdmc+'
        }
    ];

    const backgroundColors = [
        '#5ba4d7',
        '#2563eb',
        '#14b8a6',
        '#9333ea',
        '#f59e0b'
    ];


    const [currentSlide, setCurrentSlide] = useState(0);
    const [bgColor, setBgColor] = useState(backgroundColors[0]);

    // Horizontal scroll effect with background color transition
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrollY(currentScrollY);

            if (!horizontalRef.current || !projectsRef.current) return;

            const container = horizontalRef.current;
            const projectsSection = projectsRef.current;
            const rect = projectsSection.getBoundingClientRect();
            const containerHeight = window.innerHeight;

            // Check if projects section is in viewport
            if (rect.top <= 0 && rect.bottom >= containerHeight) {
                // Calculate progress through the section
                const progress = Math.abs(rect.top) / (rect.height - containerHeight);
                const maxScroll = container.scrollWidth - container.clientWidth;

                // Apply horizontal scroll based on vertical scroll progress
                const targetScrollLeft = progress * maxScroll;
                container.scrollLeft = targetScrollLeft;

                // Calculate current slide based on scroll progress
                const totalSlides = projects.length + 2; // +2 for header and see more slides
                const slideProgress = progress * (totalSlides - 1);
                const newSlide = Math.floor(slideProgress);

                if (newSlide !== currentSlide && newSlide >= 0 && newSlide < totalSlides) {
                    setCurrentSlide(newSlide);
                    setBgColor(backgroundColors[newSlide]);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial call

        return () => window.removeEventListener('scroll', handleScroll);
    }, [currentSlide, projects.length]);

    return (
        <div className="">
            {/* Hero */}
            <section className="h-screen flex items-center justify-center relative overflow-hidden">
                <div className="w-full h-screen overflow-hidden">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute top-0 left-0 w-full h-full object-cover"
                    >
                        <source src={bgVideo} type="video/mp4" />
                    </video>

                    <div className="mt-30 mr-30 relative z-10 text-white text-right max-w-5xl ml-auto px-6">
                        <div className="mb-8">
                            <div className="text-sm tracking-[0.5em] mb-6 font-light opacity-80">
                                MUHAMMAD RAIHAN RESA
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-none mb-8">
                                <div className="overflow-hidden">
                                    <div
                                        className="transition-all duration-1000 delay-300"
                                    >
                                        <span className="block text-white">FRONTEND</span>
                                    </div>
                                </div>
                                <div className="overflow-hidden">
                                    <div
                                        className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent transition-all duration-1000 delay-500"
                                    >
                                        <span className="block">DEVELOPER</span>
                                    </div>
                                </div>
                            </h1>

                            <div className="w-32 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent ml-auto mb-12"></div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 justify-end items-center">
                            <Link
                                to="/Projects"
                            >
                                <button
                                    onClick={() => scrollToSection(3)}
                                    className="group relative px-12 py-4 border border-blue-400 text-blue-400 hover:text-black transition-all duration-500 overflow-hidden"
                                >
                                    <span className="relative z-10 text-sm tracking-[0.3em] font-light">VIEW MY WORK</span>
                                    <div className="absolute inset-0 bg-blue-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                                </button>
                            </Link>

                            <button className="text-white hover:text-blue-400 transition-all duration-300 text-sm tracking-[0.3em] font-light px-12 py-4">
                                DOWNLOAD CV
                            </button>
                        </div>
                    </div>

                </div>

                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                    <div className="text-xs text-gray-500 tracking-[0.3em] mb-4">SCROLL DOWN</div>
                    <div className="w-px h-16 bg-gradient-to-b from-blue-400 to-transparent mx-auto animate-pulse"></div>
                </div>
            </section>

            {/* About */}
            <section className="mt-10 h-screen flex items-center">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="text-blue-400 text-sm tracking-[0.5em] mb-6 font-light">ABOUT</div>
                            <h1 className="text-5xl md:text-6xl font-extralight leading-tight mb-8">
                                Growing as a
                                <span className="block text-blue-400">Frontend Developer</span>
                            </h1>

                            <div className="space-y-6 text-gray-500 leading-relaxed font-thin">
                                <p>
                                    I'm an enthusiastic junior Frontend Developer who is passionate about building engaging and user-friendly digital experiences.
                                    My journey in web development is still growing, and every project is an opportunity for me to learn and improve.
                                </p>
                                <p>
                                    Currently focusing on mastering the React.js ecosystem and modern JavaScript frameworks, I strive to combine clean code with
                                    creative solutions while continuously sharpening my skills.
                                </p>
                            </div>
                        </div>

                        {/* Gambar */}
                        <div className="relative w-full h-96 flex items-center justify-center">
                            <img
                                src={Char}
                                alt="character"
                                className="w-100 rounded-lg"
                            />
                        </div>

                    </div>
                </div>
            </section>


            {/* Skills */}
            <section className="mt-10 min-h-screen flex items-center bg-[#c0d5e8]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-blue-400 text-sm tracking-[0.5em] mb-6 font-light">
                            TECH STACK
                        </h2>
                        <h1 className="text-5xl md:text-8xl font-extralight">
                            Tools & Frameworks
                        </h1>
                    </div>

                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                            {[
                                { name: "React.js", icon: I1 },
                                { name: "Next.js", icon: I2 },
                                { name: "Tailwind CSS", icon: I3 },
                                { name: "Bootstrap", icon: I4 },
                                { name: "JavaScript", icon: I5 },
                                { name: "Node.js", icon: I6 },
                                { name: "Kotlin", icon: I7 },
                                { name: "Figma", icon: I9 },
                            ].map((skill, index) => (
                                <div
                                    key={index}
                                    className="relative flex flex-col items-center justify-center 
                                    rounded-xl p-6 bg-gradient-to-br from-white to-blue-100
                                    border border-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.3)]
                                    group hover:scale-105 hover:border-blue-400 hover:shadow-[0_0_25px_rgba(96,165,250,0.6)]
                                    transition-all duration-300 overflow-hidden"
                                >
                                    {/* Accent Line ala Persona */}
                                    <div className="absolute -top-1 -left-1 w-1/2 h-1 bg-gradient-to-r from-cyan-500 to-transparent"></div>

                                    {/* Icon */}
                                    <img
                                        src={skill.icon}
                                        alt={skill.name}
                                        className="w-12 h-12 mb-4 transition-transform duration-300 group-hover:scale-110"
                                    />

                                    {/* Name */}
                                    <span className="text-gray-900 font-medium tracking-wide group-hover:text-cyan-700 transition">
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section with Horizontal Scroll */}
            <section
                ref={projectsRef}
                className="relative transition-all duration-500 ease-in-out"
                style={{
                    height: `${(projects.length + 2) * 100}vh`,
                    backgroundColor: bgColor
                }}
            >
                <div className="sticky top-0 h-screen overflow-hidden">
                    <div className="h-full flex items-center">
                        <div
                            ref={horizontalRef}
                            className="flex overflow-x-hidden"
                            style={{ width: `${(projects.length + 2) * 100}vw` }}
                        >
                            {/* Header Project */}
                            <div className="min-w-screen flex-shrink-0 flex items-center justify-center px-6">
                                <div className="text-center">
                                    <h2 className="text-white text-sm tracking-[0.5em] mb-6 font-light">
                                        some projects that I have worked on
                                    </h2>
                                    <h1 className="text-5xl md:text-9xl font-extralight mb-8 text-white">
                                        MY PROJECTS
                                    </h1>
                                    <div className="w-32 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto"></div>
                                    <h2 className="text-white/80 mt-8 text-xl">
                                        Scroll to see my work →
                                    </h2>
                                </div>
                            </div>

                            {/* Projects */}
                            {projects.map((project, index) => (
                                <div
                                    key={project.id}
                                    className="min-w-screen flex-shrink-0 flex items-center px-12"
                                >
                                    <div className="container mx-auto">
                                        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
                                            <div>
                                                <div className="flex items-center gap-6 mb-6">
                                                    <span className="text-5xl font-extralight text-white/50">
                                                        {project.id}
                                                    </span>
                                                    <div className="flex-1 h-px bg-gradient-to-r from-white to-transparent"></div>
                                                </div>

                                                <h2 className="text-3xl md:text-4xl font-extralight mb-4 text-white">
                                                    {project.title}
                                                </h2>

                                                <p className="text-white/70 text-lg leading-relaxed mb-10 font-light">
                                                    {project.description}
                                                </p>

                                                {/* <div className="flex flex-wrap gap-3 mb-10">
                                                    {project.tech.map((tech) => (
                                                        <span
                                                            key={tech}
                                                            className="text-xs border border-white/30 text-white/60 px-4 py-2 tracking-[0.1em] hover:border-white hover:text-white transition-colors duration-300"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div> */}

                                                <button className="group/btn flex items-center gap-4 text-white hover:text-white/80 transition-all duration-300">
                                                    <h2 className="text-sm tracking-[0.3em] font-light">
                                                        VIEW PROJECT
                                                    </h2>
                                                    <div className="w-12 h-px bg-white group-hover/btn:w-20 transition-all duration-300"></div>
                                                </button>
                                            </div>

                                            <div className="relative">
                                                <div className="aspect-[4/3] border border-white/20 relative overflow-hidden hover:border-white/40 transition-colors duration-500">
                                                    <img
                                                        src={project.image}
                                                        alt={project.title}
                                                        className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* See More Projects Slide */}
                            <div className="min-w-screen flex-shrink-0 flex items-center justify-center px-6">
                                <div className="text-center">
                                    <h2 className="text-4xl md:text-6xl font-extralight text-white mb-10">
                                        Want to see more?
                                    </h2>
                                    <Link
                                        to="/Projects">
                                        <button className="group relative px-16 py-5 border border-white text-white hover:text-black transition-all duration-500 overflow-hidden">
                                            <span className="relative z-10 text-sm tracking-[0.3em] font-light">
                                                SEE MORE PROJECTS
                                            </span>
                                            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section className="my-10 h-screen flex items-center relative">
                <div className="z-10 container mx-auto px-6 text-center">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-blue-400 text-sm tracking-[0.5em] mb-6 font-light">CONTACT</div>
                        <h1 className="text-5xl md:text-8xl font-extralight mb-8">
                            Get in Touch
                            <span className="block text-blue-400">Let's Work Together</span>
                        </h1>

                        <div className="w-32 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-12"></div>

                        <p className="text-xl text-gray-500 font-thin leading-relaxed mb-16 max-w-3xl mx-auto">
                            Have a project in mind or just want to connect? Feel free to reach out, I’d be happy to discuss.
                        </p>

                        <div className="grid md:grid-cols-3 gap-12 mb-16">
                            {[
                                { icon: faEnvelopeSolid, label: "EMAIL", value: "muhraihanresa243@gmail.com", href: "mailto:muhraihanresa243@gmail.com" },
                                { icon: faLinkedin, label: "LINKEDIN", value: "Muh Raihan Resa", href: "https://www.linkedin.com/in/muhraihanresa243/" },
                                { icon: faGithub, label: "GITHUB", value: "Renn243", href: "https://github.com/Renn243" }
                            ].map((contact) => (
                                <div key={contact.label} className="group text-center">
                                    <a
                                        href={contact.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block"
                                    >
                                        <div className="w-20 h-20 border border-gray-600 group-hover:border-blue-400 transition-colors duration-300 flex items-center justify-center mx-auto mb-6 transform transition-transform group-hover:-translate-y-1">
                                            <FontAwesomeIcon
                                                icon={contact.icon}
                                                className="text-3xl transition-colors duration-300 group-hover:text-blue-400"
                                            />
                                        </div>
                                        <div className="text-xs tracking-[0.3em] text-gray-500 mb-3">{contact.label}</div>
                                        <div className="text-xs tracking-[0.3em] text-gray-500 mb-3">{contact.value}</div>
                                    </a>
                                </div>
                            ))}
                        </div>


                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            className="group relative px-16 py-5 border border-blue-400 text-blue-400 hover:text-black transition-all duration-500 overflow-hidden"
                        >
                            {/* Teks */}
                            <span className="relative z-10 text-sm tracking-[0.3em] font-light">
                                Back to top
                            </span>

                            {/* Background animasi */}
                            <div className="absolute inset-0 bg-blue-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;