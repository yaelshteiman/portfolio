import React from 'react'
import ProjectCard from "./ProjectCard";

const projectsData = [
    {
        id: 1,
        title: "Google Translate Clone",
        description: "Developed a functional clone of Google Translate, leveraging JavaScript and Node.js to provide " +
            "accurate language translation. This project integrates external translation APIs to support multiple " +
            "languages and real-time text processing.",
        image: "/images/projects/1.png",
        tags: ["All", "JavaScript", "React", "Node.js", "APIs", "CSS"],
        gitUrl: "/https://github.com/yaelshteiman/google-translate-clone"
    },
    {
        id: 2,
        title: "Weather App",
        description: "A simple weather application built with React that allows users to explore current weather " +
            "conditions locally and worldwide. It provides additional details like \"Feels Like,\" \"Humidity,\" and " +
            "\"Wind Speed\" for a more comprehensive view of the weather. Weather data is fetched from the OpenWeatherMap API.",
        image: "/images/projects/2.png",
        tags: ["All", "JavaScript", "React", "Node.js", "APIs", "HTML","CSS"],
        gitUrl: "/https://github.com/yaelshteiman"
    },
    {
        id: 3,
        title: "Doodle Jump",
        description: "Recreated the classic Doodle Jump game using JavaScript, HTML, and CSS. This project demonstrates " +
            "interactive game mechanics, character movement, and dynamic rendering within the browser.",
        image: "/images/projects/3.png",
        tags: ["All", "JavaScript","HTML", "CSS"],
        gitUrl: "/https://github.com/yaelshteiman/js-doodle-jump"
    },
    {
        id: 4,
        title: "Memory Card Game",
        description: "Developed a strategic memory card game entirely in TypeScript, focusing on gameplay logic, " +
            "user interaction, and responsive design. The game challenges players' memory and strategic thinking skills" +
            " as they match cards while avoiding penalties.",
        image: "/images/projects/4.png",
        tags: ["All", "TypeScript", "HTML", "Tailwind CSS"],
        gitUrl: "/https://github.com/yaelshteiman/memory-card-game"
    },
    {
        id: 5,
        title: "My Portfolio",
        description: "a portfolio website built with Next.js and Tailwind CSS. It showcases my skills, projects, and " +
            "achievements in an elegant and responsive design.",
        image: " /images/projects/5.png",
        tags: ["All", "JavaScript", "React" ,"Next.js", "Tailwind CSS"],
        gitUrl: "/https://github.com/yaelshteiman"
    }
]

const ProjectsSection = () => {
    return (
        <>
            <h2> My Projects</h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <button className="rounded-full border-2 border-purple-500 px-6 py-3 text-xl cursor-pointer">All</button>
                <button className="rounded-full border-2 border-slate-600 hover:border-white px-6 py-3 text-xl cursor-pointer">JavaScript</button>
                <button>React</button>
            </div>
            <div>
                {projectsData.map((project) =>
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        tags={project.tags}
                        gitUrl={project.gitUrl}
                    />
                )}
            </div>
        </>
    )
}

export default ProjectsSection;