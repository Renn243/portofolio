import { Route, Routes } from "react-router-dom";
import React from 'react'
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import Projects from "../pages/Projects";
import ProjectDetail from "../pages/ProjectDetail";

const AppRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="" element={
                    <>
                        <Navbar />
                        <Home />
                    </>
                } />
                <Route path="/projects" element={
                    <>
                        <Projects />
                    </>
                } />
                <Route path="/projects/:id" element={
                    <>
                        <ProjectDetail />
                    </>
                } />
            </Routes>
        </div>
    )
}

export default AppRoutes