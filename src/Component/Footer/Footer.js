import React from 'react';

const Footer = () => {
    return (
        <div className=" py-5 mt-5 text-left text-white">
            <div className="bg-red-600 container mx-auto px-5 shadow-lg">
                <div className="py-5 grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1">
                    <div className="p-3">
                        <h3 className="text-3xl font-bold text-white mb-3">INFINITY</h3>
                        <p className="mb-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, adipisci.</p>
                        <strong>+800-0XXXX97655</strong>
                    </div>
                    <div className="p-3">
                        <h3 className="text-xl font-bold text-white mb-3">COMPANY</h3>
                       <ul className="cursor-pointer">
                           <li>About</li>
                           <li>Blog</li>
                           <li>Customers</li>
                           <li>Hire Us</li>
                           <li>Careers</li>
                       </ul>
                    </div>
                    <div className="p-3">
                        <h3 className="text-xl font-bold text-white mb-3">FEATURES</h3>
                        <ul className="cursor-pointer">
                           <li>Press</li>
                           <li>Release Notes</li>
                           <li>Integrations</li>
                           <li>Pricing</li>
                       </ul>
                    </div>
                    <div className="p-3">
                        <h3 className="text-xl font-bold text-white mb-3">DOCUMENTATION</h3>
                        <ul className="cursor-pointer">
                           <li>Support</li>
                           <li>Docs</li>
                           <li>API Reference</li>
                           <li>Status</li>
                           <li>Tech References</li>
                       </ul>
                    </div>
                </div>
                
            </div>
            <div className="copyright p-5  text-center">
                    <strong className="text-red-500">ronybarua.ethical18@gmail.com | All rights Reserved 2021</strong>
                </div>
        </div>
    );
};

export default Footer;