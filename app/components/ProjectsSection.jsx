"use client"
import React, {useState, useRef} from 'react'
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import {motion, useInView} from "framer-motion";

const projectsData = [
    {
        id: 1,
        title: "Google Translate Clone",
        description: "A functional clone of Google Translate",
        image: "/images/projects/1.png",
        tag: ["All", "JavaScript/TypeScript", "React/Next.js", "Node.js"],
        gitUrl: "https://github.com/yaelshteiman/google-translate-clone"
    },
    {
        id: 2,
        title: "Weather App",
        description: "A simple weather application built with React",
        image: "/images/projects/2.png",
        tag: ["All", "JavaScript/TypeScript", "React/Next.js", "Node.js"],
        gitUrl: "https://github.com/yaelshteiman/weather-app"
    },
    {
        id: 3,
        title: "Doodle Jump",
        description: "Recreated the classic Doodle Jump game",
        image: "/images/projects/3.png",
        tag: ["All", "JavaScript/TypeScript"],
        gitUrl: "https://github.com/yaelshteiman/js-doodle-jump"
    },
    {
        id: 4,
        title: "Memory Card Game",
        description: "A strategic memory card game",
        image: "/images/projects/4.png",
        tag: ["All", "JavaScript/TypeScript", "TailwindCSS"],
        gitUrl: "https://github.com/yaelshteiman/memory-card-game"
    },
    {
        id: 5,
        title: "My Portfolio",
        description: "A portfolio website",
        image: " /images/projects/5.png",
        tag: ["All", "JavaScript/TypeScript", "React/Next.js" , "TailwindCSS"],
        gitUrl: "https://github.com/yaelshteiman/portfolio"
    }
]

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: {y: 50, opacity: 0},
        animate: {y: 0, opacity: 1},
    };

    return (
        <section id="projects">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12 font-serif">
                My Projects
            </h2>
            {/*<div className="text-white hidden sm:flex flex-row justify-center items-center gap-2 py-6">*/}
            {/*    <ProjectTag*/}
            {/*        onClick={handleTagChange}*/}
            {/*        name="All"*/}
            {/*        isSelected={tag === "All"}*/}
            {/*    />*/}
            {/*    <ProjectTag*/}
            {/*        onClick={handleTagChange}*/}
            {/*        name="React/Next.js"*/}
            {/*        isSelected={tag === "React/Next.js"}*/}
            {/*    />*/}
            {/*    <ProjectTag*/}
            {/*        onClick={handleTagChange}*/}
            {/*        name="JavaScript/TypeScript"*/}
            {/*        isSelected={tag === "JavaScript/TypeScript"}*/}
            {/*    />*/}
            {/*    <ProjectTag*/}
            {/*        onClick={handleTagChange}*/}
            {/*        name="Node.js"*/}
            {/*        isSelected={tag === "Node.js"}*/}
            {/*    />*/}
            {/*    <ProjectTag*/}
            {/*        onClick={handleTagChange}*/}
            {/*        name="TailwindCSS"*/}
            {/*        isSelected={tag === "TailwindCSS"}*/}
            {/*    />*/}
            {/*</div>*/}
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "inital"}
                        transition={{duration: 0.3, delay: index * 0.4}}
                    >
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                            tags={project.tags}
                            gitUrl={project.gitUrl}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    )
}

export default ProjectsSection;