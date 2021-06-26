import React from 'react';

const Blog = (props) => {
    const { imageURL, title, description, author, date, summary } = props.blogs
    console.log(props)
    return (
        <div className="container mx-auto px-5">
            <div className="blog-title p-5 text-center bg-red-500">
                <h2 className="font-bold text-5xl my-5 text-white">{title}</h2>
                <strong className="text-white">{author}</strong>
                <strong className="text-white">  |  </strong>
                <strong className="text-white">{date}</strong>
            </div>
            <div className="blog-details p-5 shadow lg">
                <div className="blog-image object-contain mb-5 flex justify-center">
                    <img src={imageURL} alt="" />
                </div>
                <div className="description">
                    <p className="mb-5">{description}</p>
                </div>
                <div className="summary bg-gray-200 p-5 shadow-lg">
                    <p>{summary}</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;