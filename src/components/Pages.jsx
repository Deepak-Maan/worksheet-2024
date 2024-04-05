import { useState } from "react";
import labs from "../assets/images/248labs.png";
import cloopp from "../assets/images/cloopp.png";
import nexai from "../assets/images/nexai.png";
import exgames from "../assets/images/exgames.bmp";
import dino from "../assets/images/dinolfg.png";
import js from "../assets/images/js-img.png";
import furniture from "../assets/images/furniture.png";
import calculator from "../assets/images/calculator.jpg";
import dompkong from "../assets/images/dompkong.png";
import lemon from "../assets/images/lemon.png";
import NobleMind from '../assets/images/noble-mind.png'

const Pages = () => {
    const [first, setFirst] = useState(0);

    const tabChange = (tabIndex) => {
        setFirst(tabIndex);
    };

    const workData = [
        {
            month: "January",
            projects: [
                { id: 1, title: "DompKong", gitHubLink: "https://github.com/Deepak-Maan/dompkong1.git", liveLink: "https://dompkong-topaz.vercel.app/", image: dompkong, date: 6 },
                { id: 2, title: "Furniture", gitHubLink: "https://github.com/Deepak-Maan/furniture-design.git", liveLink: "https://furniture-fawn-tau.vercel.app/", image: furniture, date: 16 },
                { id: 3, title: "Lemon-Wares", gitHubLink: "https://github.com/Deepak-Maan/lemon-wares.git", liveLink: "https://lemon-wares-six.vercel.app/", image: lemon, date: 25 },

            ]
        },
        {
            month: "February",
            projects: [
                { id: 1, title: "Exclusive Games", gitHubLink: "https://github.com/Deepak-Maan/exclusive-games.git", liveLink: "https://exclusive-games.vercel.app/", image: exgames, date: 5 },
                { id: 2, title: "Js-Test", gitHubLink: "https://github.com/Deepak-Maan/js-test", image: js, date: 7 },
                { id: 3, title: "Dino-LFG", gitHubLink: "https://github.com/Deepak-Maan/Dino_LFG.git", liveLink: "https://dino-lfg.vercel.app/", image: dino, date: 10 },
                { id: 4, title: "NEXAI", gitHubLink: "https://github.com/Deepak-Maan/nexai.git", liveLink: "https://nexai-kappa.vercel.app/", image: nexai, date: 19 },
                { id: 5, title: "Calculator", gitHubLink: "https://github.com/Deepak-Maan/calculator", liveLink: "https://calculator-two-black.vercel.app/", image: calculator, date: 22 },
                { id: 6, title: "NEXAI with html-bootstrap", gitHubLink: "https://github.com/Deepak-Maan/calculator", liveLink: "https://nexai2.vercel.app/", image: nexai, date: 29 },

            ]
        },
        {
            month: "March",
            projects: [
                { id: 1, title: "Cloopp", gitHubLink: "https://github.com/Deepak-Maan/Cloopp.git", liveLink: "https://cloopp-seven.vercel.app/", image: cloopp, date: 4 },
                { id: 2, title: "2048-Labs", gitHubLink: "https://github.com/Deepak-Maan/labs.git", liveLink: "https://labs-alpha.vercel.app/", image: labs, date: 21 },
                { id: 3, title: "html-swiper", gitHubLink: "https://github.com/Deepak-Maan/swiper-practice.git", liveLink: "https://swiper-html.vercel.app/", image: labs, date: 21 },
                { id: 4, title: "NextJs-topics", gitHubLink: "https://github.com/Deepak-Maan/nextSwiper.git", liveLink: "https://nextjs-topics.vercel.app/", image: labs, date: 21 },
                { id: 5, title: "html with vite", gitHubLink: "https://github.com/Deepak-Maan/html-vite.git", liveLink: "https://html-vite.vercel.app/", image: labs, date: 21 },
                { id: 6, title: "html form-validater", gitHubLink: "https://github.com/Deepak-Maan/html-form-validater.git", liveLink: "https://html-form-validater.vercel.app/", image: labs, date: 21 },

            ]
        },
        {
            month: "April",
            projects: [
                { id: 1, title: "Noble-Mind", gitHubLink: "https://github.com/Deepak-Maan/noble-mind.git", liveLink: "https://noble-mind-376.vercel.app/", image: NobleMind, date: 5 },
            ]
        },
    ];

    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-8">
                <div className="col-span-2 bg-white rounded-lg shadow-md">
                    <h1 className="pt-10 text-3xl font-medium text-center text-black">WorkSheet 2024</h1>
                    <div className="flex flex-col items-center justify-center gap-6 pt-16">
                        <button onClick={() => tabChange(0)} className={`${first === 0 && "text-[#1B59F8] bg-[#E9EFFF]"} text-base capitalize py-3 px-10 rounded-lg`}>January</button>
                        <button onClick={() => tabChange(1)} className={`${first === 1 && "text-[#1B59F8] bg-[#E9EFFF]"} text-base capitalize py-3 px-10 rounded-lg`}>February</button>
                        <button onClick={() => tabChange(2)} className={`${first === 2 && "text-[#1B59F8] bg-[#E9EFFF]"} text-base capitalize py-3 px-10 rounded-lg`}>March</button>
                        <button onClick={() => tabChange(3)} className={`${first === 3 && "text-[#1B59F8] bg-[#E9EFFF]"} text-base capitalize py-3 px-10 rounded-lg`}>April</button>
                    </div>
                </div>
                <div className="col-span-6 p-20 overflow-y-scroll">
                    {workData.map((monthData, index) => (
                        <div key={index} className={`${first === index ? 'block' : 'hidden'}`}>
                            <div className="p-4 bg-white shadow-xl rounded-2xl">
                                <h2 className="text-2xl text-black opacity-90">{monthData.month} Topics :-</h2>
                                <div className="flex flex-col gap-5">
                                    {monthData.projects.map((project, projectIndex) => (
                                        <div key={projectIndex} className="flex gap-3 pt-5 min-h-20">
                                            <span className="flex items-center justify-center p-2 text-xs text-white bg-blue-500 rounded-full">{project.id}</span>
                                            <img src={project.image} alt={project.title} className="rounded-xl max-w-[200px] w-full" />
                                            <div className="flex flex-col max-w-[470px] w-full gap-2">
                                                <h3 className="text-xl font-bold capitalize">{project.title}<span className="ml-5 text-sm font-light opacity-90">Date of submission:- {project.date}</span></h3>
                                                <a href={project.gitHubLink} target="_blank" rel="noreferrer" className="text-gray-600">GitHub link:- <span className="text-blue-500">{project.gitHubLink}</span></a>
                                                <a href={project.liveLink} target="_blank" rel="noreferrer" className="text-gray-600">Live link:- <span className="text-blue-500">{project.liveLink}</span></a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Pages;
