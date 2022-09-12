import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub, AiFillFacebook } from "react-icons/ai";
import BtnShadow from '../buttons/BtnShadow';

const LoginTags = () => {
    const google = () => {
        window.open("http://localhost:5000/auth/google", "_self");
    };

    const github = () => {
        window.open("http://localhost:5000/auth/github", "_self");
    };

    const facebook = () => {
        window.open("http://localhost:5000/auth/facebook", "_self");
    };
   
    return (
        <div className="login">

            <h1 className="loginTitle">Choose a Login Method</h1>
            <div className="wrapper">
                <div className="left">
                    <div className="loginButton google" onClick={google}>
                        <FcGoogle />
                        Google
                    </div>
                    <div className="loginButton facebook" onClick={facebook}>
                        <AiFillFacebook />
                        Facebook
                    </div>
                    <div className="loginButton github" onClick={github}>
                        <AiFillGithub />
                        Github
                    </div>
                    {/* <div onClick={logout}>Log out</div> */}
                </div>

            </div>
        </div>
    )
}

export default LoginTags