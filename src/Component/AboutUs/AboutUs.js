import React from 'react';
import  aboutImage from '../../images/2.jpg'
const AboutUs = () => {
    return (
        <div className=" grid md:grid-cols-2 sm:grid-cols-1 gap-4 text-left m-16 items-center px-5">
            <div className="about-image object-contain">
                <img src={aboutImage} alt="" />
            </div>
            <div className="about-us">
                <label className="animate-bounce">Know about us</label>
                <h2 className="mt-5 font-bold text-5xl">We are ultimate service provider</h2>
                <p className="my-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi ratione eligendi sint iste veritatis sequi quae. Laudantium nemo expedita rem! Debitis consequuntur est saepe voluptates repudiandae iste sapiente fuga corporis?</p>
                <button className="bg-red-600 hover:bg-red-700 rounded-full px-4 py-2 text-white">
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default AboutUs;