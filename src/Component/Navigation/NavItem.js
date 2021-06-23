import React from 'react';

const NavItem = ({ title, Icon }) => {
    return (
        <div className="group w-12 pt-4 flex flex-col items-center cursor-pointer sm:w-20 hover:text-red-400">
            <Icon className="h-8 mb-1 text-red-500 group-hover:animate-bounce" />
            <p className="opacity-0 group-hover:opacity-100 tracking-widest">{title}</p>
        </div>
    );
};

export default NavItem;