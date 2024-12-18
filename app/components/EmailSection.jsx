import React from 'react'
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link"
import Image from "next/image"

// const access_key = process.env.ACCESS_KEY


const EmailSection = () => {
    return <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative" id="contact">
        <div>
            <h5 className="text-xl font-bold text-white my-2 font-serif">Keep in touch.</h5>
            <p className="text-[#ADB7BE] mb-4 max-w-md">
                {" "}
                Feel free to reach out to me with your questions, ideas, or just to say hello
            </p>
            <div className="socials flex flex-row gap-2">
                <Link
                    href="https://github.com/yaelshteiman/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image src={GithubIcon} alt="Github Icon"/>
                </Link>
                <Link
                    href="https://www.linkedin.com/in/yaelshteiman/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image src={LinkedinIcon} alt="Linkedin Icon"/>
                </Link>
            </div>
        </div>
        <div>
            <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="flex flex-col"
            >
                <div className="mb-6">
                    <input type="hidden" name="access_key" value="8bb61661-88be-4cce-aaa3-6a061a47b563"/>
                    <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">Your Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder="yourname@gmail.com"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="subject" className="text-white block text-sm mb-2 font-medium">
                        Subject
                    </label>
                    <input
                        name="name"
                        type="text"
                        id="subject"
                        required
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder="Just saying hello"
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="message"
                        className="text-white block text-sm mb-2 font-medium"
                    >
                        Message
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder="Let's talk about..."
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-400 hover:bg-blue-500 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                >
                    Send Message
                </button>
            </form>
        </div>
    </section>
};

export default EmailSection;