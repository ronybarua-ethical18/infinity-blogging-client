import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import {
    Link
} from "react-router-dom";
import {
    UserCircleIcon
} from "@heroicons/react/outline"
const AdminDashboard = () => {

    const [disableState, setDisableState] = useState(true)
    const [imageURL, setImageURL] = useState(null);
    const { handleSubmit, register } = useForm();

    const onSubmit = data => {
        const blogData = {
            title: data.title,
            author: data.author,
            description: data.description,
            summary: data.summary,
            date: new Date().toDateString(),
            imageURL: imageURL
        }
        console.log(blogData)
        if (blogData.imageURL !== null) {
            const url = 'https://nameless-dusk-43163.herokuapp.com/addBlogs';
            fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(blogData)
            })
                .then(res => console.log('server side response', res))
                .then(data => {
                    alert('New blog added successfully');
                })
        }
        else {
            console.log('Image url is null')
        }
    };

    const handleImageUpload = (event) => {
        console.log(event.target.files[0]);
        const blogImage = new FormData();
        blogImage.set('key', 'f7bff2bc732c350dd2aed72fdcb8156b');
        blogImage.append('image', event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', blogImage)
            .then(function (response) {
                if (response) {
                    setDisableState(false);
                }
                setImageURL(response.data.data.display_url);
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div class="">
            <div class=" bg-red-500 p-5 flex justify-between items-center flex-col sm:flex-row">
                <h3 className="text-3xl font-bold text-white text-left">INFINITY</h3>
                <div className="nav-links ">
                    <Link to="/home" className="mr-3"><strong className="text-white">Home</strong></Link>
                    <Link to="/admin" className="mr-3" Icon={UserCircleIcon}><strong className="text-white">Add Blog</strong></Link>
                    <Link to="/manageBlogs"><strong className="text-white">Manage Blogs</strong></Link>
                </div>
            </div>
            <div class="bg-white p-5">
                <h2 className="text-3xl font-bold">Add Blog</h2>
                <hr />
                <div className="form-details text-left">
                    <form onSubmit={handleSubmit(onSubmit)} class="w-full mt-5">
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <span class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Title
                                </span>
                                <input {...register("title")} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="" name="title" type="text" placeholder="Title" />
                            </div>
                            <div class="w-full md:w-1/2 px-3">
                                <span class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Author
                                </span>
                                <input {...register("author")} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="" name="author" type="text" placeholder="Author" />
                            </div>
                        </div>

                        <div class="flex flex-wrap -mx-3 mb-2">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <span class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Description
                                </span>
                                <textarea {...register("description")} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="" name="description" placeholder="Description" cols="30" rows="10"></textarea>
                            </div>
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <span class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Summary
                                </span>
                                <textarea {...register("summary")} name="summary" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Summary" id="" cols="30" rows="10"></textarea>
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full md:w-1/2 px-3">
                                <span class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Cover Image
                                </span>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" onChange={handleImageUpload} id="input-file" type="file" placeholder="Author" />
                            </div>
                            <div className="mx-3 mt-3">
                                <button disabled={disableState} class="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none ">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;