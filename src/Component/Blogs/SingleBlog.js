import React from 'react';
import {
    UsersIcon,
    CubeIcon
} from "@heroicons/react/outline"
const SingleBlog = ({ blog }) => {
    return (
        <div className="max-w-sm p-3 text-left rounded-3xl overflow-hidden shadow-2xl border-double border-4 border-light-green-500">
            <div>
                <img src={blog.imageURL} alt="" className="w-full" />
                <h2 className="my-3 text-3xl font-bold">{blog.title}</h2>
            </div>
            <div className="author mb-3">
                <span className="flex items-center"><UsersIcon className="h-8 w-5 mr-3" />{blog.author}</span>
                <span className="flex items-center"><CubeIcon className="h-8 w-5 mr-3" />{blog.date}</span>
            </div>
            <div className="">
                <p className="mb-3">{blog.summary}</p>
                <button className="bg-red-600 hover:bg-red-700 rounded-full px-4 py-2 text-white">Read More</button>
            </div>
        </div>
    );
};

export default SingleBlog;