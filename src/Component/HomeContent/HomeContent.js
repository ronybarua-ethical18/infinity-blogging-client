import React from 'react';
import BrandImage from '../../images/1.jpg'
const HomeContent = () => {
    return (
       <div className="container mx-auto px-5 my-5">
            <div className="px-5 items-center grid md:grid-cols-2 sm:grid-cols-1 gap-4">
                <div className="text-left">
                    <label className="text-sm">Welcome to Infinity Blogging</label>
                    <h1 className="font-bold text-5xl my-5">Starting with digital Marketing and Networking</h1>
                    <p className="mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus vel provident explicabo. Dicta consectetur nostrum impedit necessitatibus totam tempore aliquam.</p>
                    <button className="bg-red-600 hover:bg-red-700 rounded-full px-4 py-2 text-white">Get Started</button>
                </div>
                <div className="object-cover group">
                    <img src={BrandImage} alt=""  className="group-hover:animate-bounce"/>
                </div>
            </div>
       </div>
    );
};

export default HomeContent;