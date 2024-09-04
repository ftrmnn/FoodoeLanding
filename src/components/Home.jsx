import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react";


export default function Home () {
    useEffect(() => {
        AOS.init({ duration: 700 });
      }, []);

    return (
        <div id="home" className="font-poppins mt-[90px] flex flex-col md:flex-row gap-16 items-center justify-center h-screen min-h-screen px-4">
            <div className="md:w-2/5 md:mt-4" data-aos="zoom-in">
                <img src="/piring.png" alt="" className="mx-auto w-64 md:w-9/12 object-cover object-top"/>
            </div>
            <div className="md:w-3/5 text-left md:text-left " data-aos="zoom-in">
                <h1 className="text-yellow-500 text-3xl font-extrabold lg:text-5xl">Your Favourite Food Delivered Hot & Fresh</h1>
                <p className="mt-3 text-sm leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, sint tenetur earum iure nostrum rem amet reiciendis quos atque autem aliquam eligendi nihil architecto nisi praesentium? Architecto culpa numquam non?</p>
                <button className="mt-6 py-3 px-6 rounded-lg bg-yellow-500 text-white text-xl transition-all hover:scale-105">Order Now</button>
            </div>
        </div>
    );
};
