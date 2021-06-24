import React from 'react';

const ContactUs = () => {
    return (
        <div className="container mx-auto text-center p-5 my-5">
            <div className="contact-info">
                <label htmlFor="">Contact Us</label>
                <h2 className="font-bold text-3xl my-5">Got Confused? Don't Worry Just <br />Contact Wtih Us</h2>
                <span>We are open for giving you world class support</span>
                <div className="flex w-full items-center justify-center p-5 ">
                    <div className="">
                        <div className="w-full max-w-lg mb-6">
                            <form className="w-full max-w-sm">
                                <input class="bg-gray-200 text-gray-700 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-light" id="grid-first-name" type="text" placeholder="Send Email"></input>
                                <button class="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none ">
                                    Email
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;