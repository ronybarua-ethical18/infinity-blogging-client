import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Blog from './Blog';

const BlogDetails = () => {
    const { blogId } = useParams()
    const [blogs, setBlogs] = useState([])
    console.log(blogs)

    useEffect(() => {
        fetch('https://nameless-dusk-43163.herokuapp.com/blog/' + blogId)
            .then(res => res.json())
            .then(data => setBlogs(data))

    }, [blogId])
    return (
        <div>
            {
                <Blog blogs={blogs} />
            }
        </div>
    );
};

export default BlogDetails;