import React from 'react';
import Image from "next/image";

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center">
                    <h1 className="text-white mb-4 text-4xl lg:text-6xl font-exterabold">
                        Hello, I'm Yael
                    </h1>
                    <p className="text-[#ADB7BE] text-lg lg:text-xl">
                        Highly motivated Software Engineer with BSC in Computer Science and Mathematics from the
                        Technion -
                        Israel Institute of Technology.
                    </p>
                </div>
                <div className="col-span-4 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
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