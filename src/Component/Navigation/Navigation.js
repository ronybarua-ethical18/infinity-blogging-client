import React from 'react';
import NavItem from './NavItem'
import {
    HomeIcon,
    SupportIcon,
    UsersIcon,
    BookOpenIcon,
    PhoneIcon,
    UserCircleIcon
} from "@heroicons/react/outline"
import {
    Link
} from "react-router-dom";
const Navigation = () => {
    return (
        <div className="shadow-md sticky top-0 bg-white w-100 flex px-4 mb-5 justify-between items-center flex-col sm:flex-row">
            <div className="nav-links flex flex-grow max-w-2xl">
                <Link to="/home"><NavItem title="Home" Icon={HomeIcon}/></Link>
                <NavItem title="Service" Icon={SupportIcon}/>
                <NavItem title="Users" Icon={UsersIcon}/>
                <NavItem title="Blogs" Icon={BookOpenIcon}/>
                <NavItem title="Contact" Icon={PhoneIcon}/>
                <Link to="/admin"><NavItem title="Admin" Icon={UserCircleIcon}/></Link>
            </div>
            <div className="nav-brand pr-4">
                <h1 className="text-3xl font-bold text-red-600">INFINITY</h1>
            </div>
        </div>
    );
};

export default Navigation;