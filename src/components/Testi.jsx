import { CgProfile } from "react-icons/cg";
import { FaStar } from "react-icons/fa6";
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react";

const Testimoni = () => {
    const stars = Array(5).fill(true);

    useEffect(() => {
        AOS.init({ duration: 700 });
    }, []);
    
    return (
        <div id="testimonial" className="flex flex-col items-center mt-10">
            <div>
                <h1 className="text-yellow-500 text-3xl font-extrabold text-center" data-aos="zoom-in">
                    What They Are Saying
                </h1>
            </div>

            <div className="shadow-lg md:w-full w-80 max-w-md h-auto mt-6 border-gray-200 rounded-lg shadow-lg flex flex-col items-center justify-center" data-aos="zoom-in">
                <CgProfile className="text-5xl mt-4" />
                <p className="text-center p-5 text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur quod, harum, reiciendis nostrum totam sapiente magni quia magnam rem, deleniti at incidunt ipsa ut? Alias?
                </p>
                <div className="flex text-yellow-500">
                    {stars.map((_, index) => (
                        <FaStar key={index} className="text-2xl" />
                    ))}
                </div>
                <h3 className="text-2xl mt-3 font-bold pb-5">Fathurahman</h3>
            </div>

            <div id="contact" className="text-center font-extrabold text-3xl md:text-4xl mx-2 mt-20 text-yellow-500" data-aos="zoom-in">
                <h1>Have Question In Mind?</h1>
                <h1>Let Us Help You</h1>
            </div>

            <div className="flex items-center border border-gray-200 rounded-3xl overflow-hidden mt-10 max-w-md w:40 md:w-full" data-aos="zoom-in">
                <input
                    type="email"
                    placeholder="Enter your question here"
                    className="p-5 w-full focus:outline-none"
                />
                <button className="bg-yellow-500 text-white px-5 py-2 mr-5 rounded-3xl ">
                    Submit
                </button>
            </div>
        </div>
    );
};

export default Testimoni;
