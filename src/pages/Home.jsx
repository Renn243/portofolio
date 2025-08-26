import React, { useState, useEffect, useRef } from 'react';
import bgVideo from "../assets/persona3reload.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope as faEnvelopeSolid } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { I1, I2, I3, I4, I5, I6, I7, I8, I9 } from '../assets/icons'
import Char from '../assets/character.jpg'
import projectsData from "../data/projects.json";
import { Link } from "react-router-dom";

const Home = () => {
    const horizontalRef = useRef(null);
    const projectsRef = useRef(null);
    const [scrollY, setScrollY] = useState(0);

    const backgroundColors = [
        '#5ba4d7',
        '#2563eb',
        '#14b8a6',
        '#9333ea',
        '#f59e0b'
    ];


    const [currentSlide, setCurrentSlide] = useState(0);
    const [bgColor, setBgColor] = useState(backgroundColors[0]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrollY(currentScrollY);

            if (!horizontalRef.current || !projectsRef.current) return;

            const container = horizontalRef.current;
            const projectsSection = projectsRef.current;
            const rect = projectsSection.getBoundingClientRect();
            const containerHeight = window.innerHeight;

            // Cek apakah section projects ada di viewport
            if (rect.top <= 0 && rect.bottom >= containerHeight) {
                // Hitung progress scroll di section
                const progress = Math.abs(rect.top) / (rect.height - containerHeight);
                const maxScroll = container.scrollWidth - container.clientWidth;

                // Scroll horizontal berdasarkan progress
                const targetScrollLeft = progress * maxScroll;
                container.scrollLeft = targetScrollLeft;

                // Hitung slide saat ini
                const totalSlides = 1 + 3 + 1; // 1 header + 3 projects + 1 "See More" slide
                const slideProgress = progress * (totalSlides - 1);
                const newSlide = Math.floor(slideProgress);

                if (newSlide !== currentSlide && newSlide >= 0 && newSlide < totalSlides) {
                    setCurrentSlide(newSlide);
                    setBgColor(backgroundColors[newSlide]);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // panggil awal

        return () => window.removeEventListener('scroll', handleScroll);
    }, [currentSlide]);

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

                            <a href="/CV.pdf" download>
                                <button className="group relative px-16 py-4 border border-white text-white hover:text-black transition-all duration-500 overflow-hidden">
                                    <span className="relative z-10 text-sm tracking-[0.3em] font-light">
                                        DOWNLOAD CV
                                    </span>
                                    <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                                </button>
                            </a>

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
                    height: `${(5) * 100}vh`,
                    backgroundColor: bgColor
                }}
            >
                <div className="sticky top-0 h-screen overflow-hidden">
                    <div className="h-full flex items-center">
                        <div
                            ref={horizontalRef}
                            className="flex overflow-x-hidden"
                            style={{ width: `${(5) * 100}vw` }}
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
                            {projectsData.slice(0, 3).map((project, index) => (
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
                                                        src={project.images[0]}
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
                                { icon: faLinkedin, label: "LINKEDIN", value: "Muhammad Raihan Resa", href: "https://www.linkedin.com/in/muhraihanresa243/" },
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