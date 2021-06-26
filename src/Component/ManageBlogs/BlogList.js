import React from 'react';

const BlogList = (props) => {
    const { _id, title, author, date } = props.blog
    const deleteBlog = (id) => {
        fetch(`http://localhost:8000/deleteBlog/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('Data deleted successfully from database')
                }
            })
    }
    return (

        <tr className="py-5">
            <td className="py-5">{title}</td>
            <td className="">{author}</td>
            <td className="">${date}</td>
            <td className="text-center">
                <button class="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none "
                    onClick={(e) => {
                        deleteBlog(_id)
                        e.target.parentNode.parentNode.style.display = 'none'
                    }}>
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default BlogList;