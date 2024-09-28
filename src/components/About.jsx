import { FaPlayCircle } from "react-icons/fa";
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function About() {
    useEffect(() => {
        AOS.init({ duration: 700 });
    }, []);

    return (
        <div id="about" className=" font-poppins mt-20 flex flex-col md:flex-row gap-16 items-center justify-center h-screen min-h-screen px-4">
            <div className="md:w-2/5 order-1 md:order-2 " data-aos="zoom-in">
                <img src="/piring.png" alt="" className="mx-auto w-64 md:w-9/12 object-cover object-top"/>
            </div>
            <div className="md:w-3/5 text-left md:text-left order-2 md:order-1 ml-5" data-aos="zoom-in">
                <h1 className="text-yellow-500 text-3xl font-extrabold lg:text-5xl">Food Is An Important Part Of A balance Diet</h1>
                <p className="mt-3 text-sm leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, reiciendis quae! Ratione ipsa, consequuntur quos ducimus sunt saepe neque esse, harum numquam est minima magni accusantium voluptatibus nam, quidem rem.</p>
                <div className="flex ">
                    <button className="mt-6 p-2 rounded-lg bg-yellow-500 text-white text-lg transition-all hover:scale-105">Learn More</button>
                    <FaPlayCircle className="mt-8 ml-10 text-4xl"/>
                    
                </div>
            </div>
        </div>
    );
};
