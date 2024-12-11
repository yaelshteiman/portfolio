"use client";
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion";

const HeroSection = () => {
    return (
        <section className="lg:py-16 font-sans">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5}}
                    className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
                >
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-exterabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-700 font-bold font-serif">
                            Yael Shteiman.
                        </span>
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl ">
                        Highly motivated Software Engineer with BSC in Computer Science and Mathematics from the
                        Technion -
                        Israel Institute of Technology.
                    </p>
                    <div>
                        <Link
                            href="/#contact"
                            className="mr-3 px-1 inline-block py-1 rounded-full bg-gradient-to-br from-teal-500 via-cyan-600 to-sky-700 hover:bg-slate-200 text-white mt-3"
                        >
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                                Contact Me
                            </span>
                        </Link>
                        <Link
                            href="https://drive.google.com/file/d/1GYVWMYKNAFD4UgTcFHNm3EqLLUcz8Suw/view?usp=sharing"
                            className="px-1 inline-block py-1 rounded-full bg-gradient-to-br from-teal-500 via-cyan-600 to-sky-700 hover:bg-slate-200 text-white mt-3"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                                Resume
                            </span>

                        </Link>

                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5}}
                    className="col-span-4 place-self-center mt-4 lg:mt-0"
                >
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative">
                        <Image
                            src="/images/portfolio-hero-img.png"
                            alt="hero image"
                            className=" rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={300}
                            height={300}
                        />
                    </div>

                </motion.div>


            </div>
        </section>
    )
};

export default HeroSection;