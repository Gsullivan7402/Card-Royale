import { useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import authService from '../utils/auth';
import { ADD_USER, LOGIN_USER } from "../utils/mutations";
import Button from "./Button";

function Login() {
    // Define the state for email, password
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loginUser, { data, loading, error }] = useMutation(LOGIN_USER);
    const [signup, { data: signupData, loading: signupLoading, error: signupError }] = useMutation(ADD_USER);

    // Handle form submission for login
    const handleLogin = (e) => {
        e.preventDefault();
        console.log('login clicked')
        loginUser({ variables: { email: email, password: password } });
    };

    useEffect(() => {
        if (!data) return;
        console.log('loginData', data.login.token);
        // handle login
        authService.login(data.login.token);
    }, [data]);

    // Handle form submission for sign up
    const handleSignUp = (e) => {
        e.preventDefault();
        console.log('signup clicked')
        signup({ variables: { email: email, password: password } })
    };

    useEffect(() => {
        if (!signupData) return;
        console.log('signupData', signupData);
        // handle login
        authService.login(signupData.addUser.token);
    }, [signupData]);

    // Render the login form
    return (
        <div
            className="login-form-container absolute top-3 -right-8 p-2 bg-white rounded shadow-lg lg:block hidden"
            style={{ width: "250px" }}
        >
            <form
                className="login-form flex flex-col p-4 bg-gray-100 rounded"
            >
                <div className="mb-3">
                    <label htmlFor="email" className="block mb-1 text-sm font-medium">
                        Email:
                    </label>
                    <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-1.5 border border-gray-300 rounded text-sm"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="block mb-1 text-sm font-medium">
                        Password:
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-1.5 border border-gray-300 rounded text-sm"
                        required
                    />
                </div>

                {/* Login button */}
                <Button
                    onClick={handleLogin}
                    className="w-40 ml-6 py-2 px-4 rounded bg-black text-white font-bold mb-2"
                >
                    Log In
                </Button>

                {/* Sign Up button */}
                <Button
                    onClick={handleSignUp}
                    className="w-40 ml-6 py-2 px-4 rounded bg-black text-white font-bold"
                >
                    Sign Up
                </Button>
            </form>
        </div>
    );
}

export default Login;
