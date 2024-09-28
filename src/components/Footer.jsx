import { FaFacebookF, FaYoutube, FaGithub, FaInstagram } from "react-icons/fa";
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react";

const Footer = () => {
    useEffect(() => {
        AOS.init({ duration: 400 });
    }, []);

    return (
        <div className="mt-24 px-4 text-gray-800 mb-7" data-aos="zoom-in">
            <div className=" text-center md:text-left font-poppins flex flex-col md:flex-row md:gap-52 gap-5 justify-center">
                <div>
                    <h1 className="font-bold text-1xl">FOODOE</h1>
                    <div className="items-canter justify-center flex mt-2 text-2xl gap-2">
                        <FaYoutube />
                        <FaFacebookF />
                        <FaGithub />
                        <FaInstagram />
                    </div>
                </div>
                <div>
                    <ul>
                        <li>Quality</li>
                        <li>Help</li>
                        <li>Share</li>
                        <li>Careers</li>
                        <li>Work</li>
                        <li>Testimonial</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>244-5333-7783</li>
                        <li>hello@foodoe.com</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
            </div>
            <div className="text-center mt-10 text-gray-600">
                <p>@2024 FOODOE_fathurahman. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
