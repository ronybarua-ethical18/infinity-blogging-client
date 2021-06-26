import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import Navigation from '../Navigation/Navigation';
import { createUserWithEmailAndPassword, handleGoogleSignIn, initializeFirebase, signInWithEmailAndPassword } from './LoginManager';

const Login = () => {
    initializeFirebase()
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        error: '',
        password: '',
        success: false
    });
    console.log(user)
    const [newUser, setNewUser] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleResponse = (res, redirect) => {
        setLoggedInUser(res);
        setUser(res);
        if (redirect) {
            history.replace(from);
        }
    }
    const handleBlur = (event) => {
        let isFormValid = true;
        if (event.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(event.target.value);
            if (!isFormValid) {
                setEmailError('Email is invalid')
            }
            else {
                setEmailError('');
            }
        }
        if (event.target.name === 'password') {
            const passwordLength = event.target.value.length > 6;
            const hasNumber = /\d{1}/.test(event.target.value);
            isFormValid = passwordLength && hasNumber;
            if (!isFormValid) {
                setPasswordError('Password should have number and letters and length must be greater than 6');
            }
            else {
                setPasswordError('');
            }
        }
        if (isFormValid) {
            const newUserInfo = { ...user };
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);
        }
    }
    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true)
            })
    }
    const handleSubmit = (event) => {
        if (newUser && user.email && user.password) {
            createUserWithEmailAndPassword(user.name, user.email, user.password)
                .then(res => {
                    handleResponse(res, true)
                    console.log(res)
                })
        }
        if (!newUser && user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    handleResponse(res, true)
                    console.log(res)
                })
        }
        event.preventDefault();
    }
    return (
        <div className="">
            <Navigation />
            <div className="flex justify-center h-screen items-center">
                <div class="w-full max-w-sm">
                    <div className="text-center"><label htmlFor="" >User Authentication</label></div>
                    {/* <p className="text-red-500">{user.error}</p> */}
                    {user.success && <p className="text-green-500">User {newUser ? 'Created' : 'Logged In'} Successfully</p>}
                    <form class="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                        {newUser && <div class="mb-4">
                            <span> Name</span>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                name="name"
                                onBlur={handleBlur}
                                type="text"
                                placeholder="Name" />
                        </div>}
                        <div class="mb-4">
                            <span> User Email</span>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                name="email"
                                onBlur={handleBlur}
                                type="text"
                                placeholder="Email" />
                        </div>
                        <p className="text-danger">{emailError}</p>
                        <div class="mb-6">
                            <span>Password</span>
                            <input
                                class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                name="password"
                                type="password"
                                onBlur={handleBlur}
                                placeholder="password" />
                        </div>
                        <p className="text-danger">{passwordError}</p>
                        <div className="checkbox mb-2">
                            <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
                            <span> Sign up if you are new here</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <button
                                class="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none "
                                type="button">{newUser ? 'Sign Up' : 'Sign In'}
                            </button>
                            <button onClick={googleSignIn} className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none  mb-2">Sign in with google</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;