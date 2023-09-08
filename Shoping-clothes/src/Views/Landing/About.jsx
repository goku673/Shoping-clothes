import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
    return (
        <div className="flex justify-center h-screen items-center bg-gray-800">
            <div className="rounded-lg bg-gray-800 p-10 text-center text-white shadow-xl shadow-black">
                <p>Elaborado por los desarrolladores Web Full Stack, Franco y Freddy.</p>

                <div className="flex justify-center mb-4">
                    <a
                        className="mr-4 text-4xl"
                        href="https://www.linkedin.com/in/franco-silva-flores-389b69265/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin />
                    </a>

                    <a href="https://github.com/Franco22s" target="_blank" rel="noopener noreferrer" className="text-4xl">
                        <FaGithub className="text-white" />
                    </a>
                    <span className="text-white ml-2 ">Perfil de Franco Silva</span>
                </div>

                <div className="flex justify-center">
                    <a
                        className="mr-4 text-4xl"
                        href="https://www.linkedin.com/in/developer-freddyaminzapata/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin />
                    </a>

                    <a href="https://github.com/goku673" target="_blank" rel="noopener noreferrer" className="text-4xl">
                        <FaGithub className="text-white" />
                    </a>
                    <span className="text-white ml-2">Perfil de Freddy Amin</span>
                </div>
            </div>
        </div>
    );
};

export default About;