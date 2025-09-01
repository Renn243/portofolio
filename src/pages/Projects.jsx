import React, { useState } from 'react';
import projectsData from "../data/projects.json";
import { Link } from "react-router-dom";

const Projects = () => {

    return (
        <div className="relative min-h-screen py-12 px-4 bg-blue-50 overflow-hidden">
            <div className="relative max-w-4xl mx-auto z-10">
                <div className="text-center mb-16">
                    <h1 className="text-4xl lg:text-5xl font-bold text-blue-500 mb-4">
                        MY PROJECTS
                    </h1>
                    <p className="lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        A collection of projects I have worked on
                    </p>
                    <div className="mt-10 w-32 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-12"></div>
                </div>

                <div className="space-y-8">
                    {projectsData.map((project, index) => (
                        <div
                            key={project.id}
                            className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 transform"
                        >
                            <div className="md:flex">
                                <div className="lg:h-100 w-80 relative overflow-hidden">
                                    <img
                                        src={project.images[0]}
                                        alt={project.title}
                                        className="w-full h-64 lg:h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                                </div>

                                <div className="flex-1 p-8">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-800 mb-2 hover:text-indigo-600 transition-colors duration-300">
                                                {project.title}
                                            </h3>
                                            <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                                                <div className="flex items-center space-x-1">
                                                    <span>{project.category}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 leading-relaxed mb-6 font-thin">
                                        {project.description}
                                    </p>

                                    <div className="mb-6">
                                        <h4 className="text-sm font-semibold text-gray-700 mb-3">Technology:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="px-4 py-2 bg-gradient-to-r bg-blue-500 text-white text-sm rounded-full font-medium shadow-lg"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex space-x-4">
                                        <Link
                                            to={`/projects/${project.id}`}
                                        >
                                            <button className="group relative px-5 py-2 border border-blue-400 text-blue-400 hover:text-black transition-all duration-500 overflow-hidden">
                                                <span className="relative z-10 text-sm tracking-[0.3em] font-light">Details</span>
                                                <div className="absolute inset-0 bg-blue-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="fixed bottom-0 left-0 w-full pointer-events-none z-0">
                <svg
                    className="w-full h-60"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="#3b82f6"
                        d="M0,224L48,202.7C96,181,192,139,288,144C384,149,480,203,576,224C672,245,768,235,864,224C960,213,1056,203,1152,192C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                </svg>
            </div>

            <Link
                to="/"
                className="z-10 fixed bottom-4 right-4 flex items-center space-x-2 px-3 py-2 rounded-lg border border-white bg-black text-white font-bold italic hover:bg-blue-500 transition-colors duration-300 cursor-pointer"
            >
                <div className="w-6 h-6 flex items-center justify-center bg-black text-white rounded-full border border-white font-bold">
                    B
                </div>

                <span className="italic">Back</span>
            </Link>

        </div>
    );
}

export default Projects;