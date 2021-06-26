import React, { useEffect, useState } from 'react';
import BlogList from './BlogList'
import {
    Link
  } from "react-router-dom";
  import {
    UserCircleIcon,
    HomeIcon
} from "@heroicons/react/outline"
const ManageBlogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() =>{
        fetch('https://nameless-dusk-43163.herokuapp.com/blogs')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="mx-auto">
            <div class="">
                <div class=" bg-red-500 p-5 flex justify-between items-center flex-col sm:flex-row">
                    <h3 className="text-3xl font-bold text-white text-left">INFINITY</h3>
                    <div className="nav-links ">
                        <Link to="/home" className="mr-3" Icon={HomeIcon}><strong className="text-white">Home</strong></Link>
                        <Link to="/admin" className="mr-3" Icon={HomeIcon}><strong className="text-white">Add Blog</strong></Link>
                        <Link to="/manageBlogs"><strong className="text-white">Manage Blogs</strong></Link>
                    </div>
                </div>
                <div class="bg-white p-5">
                    <h2 className="text-3xl font-bold">Manage Blogs</h2>
                    <hr />
                    <div className="w-full data-records mt-5 text-left">
                        <table className="shadow w-full">
                            <thead>
                                <tr className="border">
                                    <th className="p-3">Title</th>
                                    <th className="p-3">Author</th>
                                    <th className="p-3">Date</th>
                                    <th className="p-3 text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    blogs.map(blog => <BlogList blog={blog}></BlogList>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageBlogs;