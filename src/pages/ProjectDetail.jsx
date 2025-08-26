import React, { useState } from "react";
import { useParams } from "react-router-dom";
import projectsData from "../data/projects.json";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectDetail = () => {
    const { id } = useParams();
    const [selectedImage, setSelectedImage] = useState(0);
    const [showImageModal, setShowImageModal] = useState(false);

    const project = projectsData.find((p) => p.id === parseInt(id));

    if (!project) {
        return (
            <div className="min-h-screen py-12 px-4 bg-blue-50 overflow-hidden justify-center items-center flex">
                <div className="text-center">
                    <h2 className="text-blue-500 text-5xl md:text-6xl font-extralight leading-tight mb-8">
                        Project Not Found
                    </h2>
                    <p className="text-gray-600 mb-6">Project yang Anda cari tidak ditemukan.</p>

                    <Link
                        to={`/projects`}
                    >
                        <button className="group relative px-16 py-5 border border-blue-400 text-blue-400 hover:text-black transition-all duration-500 overflow-hidden">
                            <span className="relative z-10 text-sm tracking-[0.3em] font-light">Kembali</span>
                            <div className="absolute inset-0 bg-blue-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                        </button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-12 px-4 bg-blue-50 overflow-hidden">

            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Project Title Section */}
                <div className="mb-12">
                    <div className="flex flex-wrap items-center justify-between mb-6">
                        <div className="flex-1 min-w-0 mr-6">
                            <h1 className="text-blue-500 text-4xl md:text-5xl font-bold mb-4 leading-tight text-center">
                                {project.title}
                            </h1>
                            <div className="mt-10 w-32 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-12"></div>
                            <p className="text-xl text-gray-600 leading-relaxed mb-6">
                                {project.description}
                            </p>
                        </div>
                    </div>
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex justify-center"
                        >
                            <button className="group relative px-16 py-5 border border-blue-400 text-blue-400 hover:text-black transition-all duration-500 overflow-hidden">
                                <span className="relative z-10 text-sm tracking-[0.3em] font-light">DEMO</span>
                                <div className="absolute inset-0 bg-blue-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                            </button>
                        </a>
                    )}
                </div>

                {/* Project Gallery */}
                <div className="mb-12">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="relative">
                            <img
                                src={project.images[selectedImage]}
                                alt={`${project.title} - Preview ${selectedImage + 1}`}
                                className="w-full h-96 md:h-[500px] object-cover cursor-pointer"
                                onClick={() => setShowImageModal(true)}
                            />
                            <button
                                onClick={() => setShowImageModal(true)}
                                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-lg hover:bg-black/70 transition-colors duration-300"
                            >
                                <i className="fas fa-camera text-lg"></i>
                            </button>
                        </div>
                        <div className="p-4">
                            <div className="flex space-x-3 overflow-x-auto">
                                {project.images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`Preview ${index + 1}`}
                                        className={`w-20 h-12 object-cover rounded-lg cursor-pointer transition-all duration-300 ${selectedImage === index ? 'ring-2 ring-indigo-500 opacity-100' : 'opacity-70 hover:opacity-100'
                                            }`}
                                        onClick={() => setSelectedImage(index)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 mb-12">
                    <div className="lg:col-span-2 space-y-8">
                        {/* Project Overview */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                <i className="fas fa-bullseye text-indigo-600 text-xl mr-3"></i>
                                Project Overview
                            </h2>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                {project.longDescription}
                            </p>
                        </div>

                        {/* Features */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                <i className="fas fa-check-circle text-green-600 text-xl mr-3"></i>
                                Key Features
                            </h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                {project.features.map((feature, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <i className="fas fa-check-circle text-green-500 text-lg mt-0.5 flex-shrink-0"></i>
                                        <span className="text-gray-700">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {/* Project Info */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Role</h3>
                            <div className="space-y-4">
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    {project.role}
                                </p>
                            </div>
                        </div>

                        {/* Technologies */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Technologies</h3>
                            <div className="flex flex-wrap gap-3">
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-blue-500 text-white text-sm rounded-full font-medium shadow-lg"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Source Code / GitHub */}
                        {project.githubUrls && project.githubUrls.length > 0 && (
                            <div className="bg-white rounded-2xl shadow-lg p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Source Code</h3>
                                <div className="flex flex-col gap-3">
                                    {project.githubUrls.map((repo, index) => (
                                        <a
                                            key={index}
                                            href={repo.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 px-4 py-2 border-2 border-blue-500 text-blue-500 font-medium rounded-lg transition-colors duration-200 hover:bg-blue-500 hover:text-white"
                                        >
                                            {/* GitHub Icon from FontAwesome */}
                                            <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
                                            <span>{repo.label}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Image Modal */}
            {showImageModal && (
                <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setShowImageModal(false)}>
                    <div className="relative max-w-6xl max-h-full">
                        <img
                            src={project.images[selectedImage]}
                            alt={`${project.title} - Full Size`}
                            className="max-w-full max-h-full object-contain"
                        />
                        <button
                            onClick={() => setShowImageModal(false)}
                            className="absolute top-4 right-4 bg-white/20 text-white p-2 rounded-lg hover:bg-white/30 transition-colors duration-300"
                        >
                            <i className="fas fa-times text-lg"></i>
                        </button>
                    </div>
                </div>
            )}

            <Link
                to="/Projects"
                className="fixed bottom-4 right-4 flex items-center space-x-2 px-3 py-2 rounded-lg border border-white bg-black text-white font-bold italic hover:bg-blue-500 transition-colors duration-300 cursor-pointer"
            >
                {/* Icon B */}
                <div className="w-6 h-6 flex items-center justify-center bg-black text-white rounded-full border border-white font-bold">
                    B
                </div>

                {/* Teks */}
                <span className="italic">Back</span>
            </Link>
        </div>
    );
};

export default ProjectDetail;