import React from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData';
import SingleBlog from './SingleBlog';
const Blogs = () => {
    const [blogs, setBlogs] = useState(fakeData)
    return (
        <div className="container mx-auto p-5 my-5">
            <div className="px-5 grid md:grid-cols-2 sm:grid-cols-1 items-center gap-4">
                <div className="BlogsHeading">
                    <label htmlFor="">Our Latest Blogs</label>
                    <h2 className="font-bold text-5xl my-5">This is what<br/> our blogs about</h2>
                </div>
                <div className="speech">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat itaque incidunt eaque esse soluta, optio delectus impedit fuga error, reiciendis minima sed eum dicta quasi rerum obcaecati at ab ex.</p>
                </div>
            </div>
            <div className="flex justify-center my-5">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-col-1 gap-4">
                    {
                        blogs.map((blog) => <SingleBlog key={blog.id} blog={blog} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Blogs;