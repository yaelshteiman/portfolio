"use client"
import React, {useState, useRef} from 'react'
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import {motion, useInView} from "framer-motion";

const projectsData = [
    {
        id: 1,
        title: "Google Translate Clone",
        description: "Developed a functional clone of Google Translate, leveraging JavaScript and Node.js to provide " +
            "accurate language translation. This project integrates external translation APIs to support multiple " +
            "languages and real-time text processing.",
        image: "/images/projects/1.png",
        tag: ["All", "JavaScript", "React", "Node.js"],
        gitUrl: "https://github.com/yaelshteiman/google-translate-clone"
    },
    {
        id: 2,
        title: "Weather App",
        description: "A simple weather application built with React that allows users to explore current weather " +
            "conditions locally and worldwide. It provides additional details like \"Feels Like,\" \"Humidity,\" and " +
            "\"Wind Speed\" for a more comprehensive view of the weather. Weather data is fetched from the OpenWeatherMap API.",
        image: "/images/projects/2.png",
        tag: ["All", "JavaScript", "React", "Node.js"],
        gitUrl: "https://github.com/yaelshteiman/weather-app"
    },
    {
        id: 3,
        title: "Doodle Jump",
        description: "Recreated the classic Doodle Jump game using JavaScript, HTML, and CSS. This project demonstrates " +
            "interactive game mechanics, character movement, and dynamic rendering within the browser.",
        image: "/images/projects/3.png",
        tag: ["All", "JavaScript"],
        gitUrl: "https://github.com/yaelshteiman/js-doodle-jump"
    },
    {
        id: 4,
        title: "Memory Card Game",
        description: "Developed a strategic memory card game entirely in TypeScript, focusing on gameplay logic, " +
            "user interaction, and responsive design. The game challenges players' memory and strategic thinking skills" +
            " as they match cards while avoiding penalties.",
        image: "/images/projects/4.png",
        tag: ["All", "TypeScript", "TailwindCSS"],
        gitUrl: "https://github.com/yaelshteiman/memory-card-game"
    },
    {
        id: 5,
        title: "My Portfolio",
        description: "a portfolio website built with Next.js and Tailwind CSS. It showcases my skills, projects, and " +
            "achievements in an elegant and responsive design.",
        image: " /images/projects/5.png",
        tag: ["All", "JavaScript", "React" ,"NextJS", "TailwindCSS"],
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
            <div className="grid grid-cols-2 lg:grid-cols-7 md:grid-cols-4 text-white justify-center items-center gap-2 py-4">
                <ProjectTag
                    onClick={handleTagChange}
                    name="All"
                    isSelected={tag === "All"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="React"
                    isSelected={tag === "React"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="NextJS"
                    isSelected={tag === "NextJS"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="JavaScript"
                    isSelected={tag === "JavaScript"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="TypeScript"
                    isSelected={tag === "TypeScript"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Node.js"
                    isSelected={tag === "Node.js"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="TailwindCSS"
                    isSelected={tag === "TailwindCSS"}
                />
            </div>
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