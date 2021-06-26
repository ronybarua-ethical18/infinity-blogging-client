import React from 'react';
import {
    UsersIcon,
    CubeIcon
} from "@heroicons/react/outline"
import { useHistory } from 'react-router-dom';
const SingleBlog = (props) => {

    const {_id, imageURL, title, author, date, summary} = props.blog

    const history = useHistory()
    
    const handleClick = (id) => {
        const url = `blogDetails/${id}`;
        history.push(url)
    }

    return (
        <div onClick={() => handleClick(_id)} className="max-w-sm p-3 text-left rounded-3xl overflow-hidden shadow-2xl border-double border-4 border-light-green-500">
            <div>
                <img src={imageURL} alt="" className="w-full" />
                <h2 className="my-3 text-3xl font-bold">{title}</h2>
            </div>
            <div className="author mb-3">
                <span className="flex items-center"><UsersIcon className="h-8 w-5 mr-3" />{author}</span>
                <span className="flex items-center"><CubeIcon className="h-8 w-5 mr-3" />{date}</span>
            </div>
            <div className="">
                <p className="mb-3">{summary}</p>
                <button className="bg-red-600 hover:bg-red-700 rounded-full px-4 py-2 text-white">Read More</button>
            </div>
        </div>
    );
};

export default SingleBlog;