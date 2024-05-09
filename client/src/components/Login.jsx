import React, { useState } from "react";
import Button from "./Button";

import { loginUser } from "../utils/API";
import Auth from "../utils/auth";

function Login() {
  // Define the state for username, email, and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission
  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent form submission from refreshing the page

    try {
        const response = await loginUser({ username, password });
        console.log(response)
    
        if (!response.ok) {
            throw new Error('something went wrong!');
        }
    
        const { token, user } = await response.json();
        console.log(user);
        Auth.login(token);
    } catch (err) {
        console.error(err);
        // Display error message to the user
        alert(err.message || "An error occurred during login.");
    }

    setUsername("");
    setPassword("");

    console.log("Logging in with:", {
      username,
      password,
    });
  };

  // Render the login form
  return (
    <div
      className="login-form-container absolute top-0 right-0 m-4 p-2 bg-white rounded shadow-lg"
      style={{ width: "250px" }}
    >
      <form
        onSubmit={handleLogin}
        className="login-form flex flex-col p-4 bg-gray-100 rounded"
      >
        <div className="mb-3">
          <label htmlFor="username" className="block mb-1 text-sm font-medium">
            Username:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
        <Button
          actionType="login"
          // onClick={handleLogin}
          type="submit"
          className="w-40 ml-6 py-2 px-4 rounded bg-black text-white font-bold"
        >
          Log In
        </Button>
      </form>
    </div>
  );
}

export default Login;
