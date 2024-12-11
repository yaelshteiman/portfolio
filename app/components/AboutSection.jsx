"use client"
import React, {useTransition, useState} from 'react'
import Image from 'next/image';
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-z">
                <li>JavaScript</li>
                <li>React</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Node.js</li>
                <li>Git</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <p>
                <span className="font-bold">Technion - Israel Institute of Technology</span>
                <br></br>
                BSC in Mathematics with Computer Science
            </p>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <p>
                <span className="font-bold">Pendo.io</span> - Software Engineer Intern
            </p>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return <section className="text-white" id="about">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 font-sans">
            <Image
                src="/images/about-image.png"
                alt="About Image"
                width={500}
                height={500}
                className="hidden lg:block md:block"
            />
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className="text-4xl font-bold text-white mb-4 font-serif">About Me</h2>
                <p className="text-base md:text-lg">
                    I am Yael, a junior software engineer with a passion for creating interactive and responsive web
                    applications.<br></br> I hold a B.Sc. in Computer Science and Mathematics from the Technion and gained
                    hands-on experience as a software engineering intern. <br></br>Proficient in JavaScript, React, Node.js,
                    HTML, CSS, and Git.<br></br> I am a quick learner who’s always eager to expand my knowledge and skill set.<br></br>
                    When I am not coding, you’ll find me on the yoga mat, recharging and drawing inspiration for my
                    next project. <br></br>Let’s connect and build something impactful together!
                </p>
                <div className="flex flex-row justify-start mt-8">
                    <TabButton
                        selectTab={() => handleTabChange("skills")}
                        active={tab === "skills"}
                    >
                        {" "}
                        Skills{" "}
                    </TabButton>
                    <TabButton
                        selectTab={() => handleTabChange("education")}
                        active={tab === "education"}
                    >
                        {" "}
                        Education{" "}
                    </TabButton>
                    <TabButton
                        selectTab={() => handleTabChange("experience")}
                        active={tab === "experience"}
                    >
                        {" "}
                        Experience{" "}
                    </TabButton>
                </div>
                <div className="mt-8">
                    {TAB_DATA.find((t) => t.id === tab).content}
                </div>
            </div>

        </div>
    </section>
};

export default AboutSection;