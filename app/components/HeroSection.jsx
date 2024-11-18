"use client";
import React from 'react';
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-exterabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-200 to-rose-400">
                            Hello, I&#39;m{" "}
                        </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                'Yael',
                                1000,
                                'Junior Software Engineer',
                                1000,
                                'graduate of the Technion',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                        Highly motivated Software Engineer with BSC in Computer Science and Mathematics from the
                        Technion -
                        Israel Institute of Technology.
                    </p>
                    <div>
                        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-fuchsia-300 via-pink-400 to-rose-500 hover:bg-slate-200 text-white">
                            Hire Me
                        </button>
                        <button className="px-1 py-1 w-full sm:w-fit  rounded-full bg-gradient-to-br from-fuchsia-300 via-pink-400 to-rose-500 hover:bg-slate-800 text-white mt-3">
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download Resume</span>
                        </button>

                    </div>
                </div>
                <div className="col-span-4 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[250px] lg:h-[250px] relative">
                        <Image
                            src="/images/portfolio-hero-img.png"
                            alt="hero image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={210}
                            height={220}

                        />
                    </div>

                </div>


            </div>
        </section>
    )
};

export default HeroSection;