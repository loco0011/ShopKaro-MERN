import React, { useState } from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const { token, setToken, navigate, backend_url } = useContext(ShopContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(`${backend_url}/api/user/register`, {
          name,
          email,
          password,
        });
        const data = response.data;
        if (data.success) {
          setToken(data.token);
          localStorage.setItem("token", data.token);
          toast.success("Registration successful!");
        } else {
          toast.error(data.message);
        }
      } else {
        const response = await axios.post(`${backend_url}/api/user/login`, {
          email,
          password,
        });
        const data = response.data;
        if (data.success) {
          setToken(data.token);
          localStorage.setItem("token", data.token);
          toast.success("Login successful!");
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentState === "Login" ? (
        ""
      ) : (
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          className="border px-3 py-2 border-gray-800 w-full"
          placeholder="Name"
          required
        />
      )}
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        className="border px-3 py-2 border-gray-800 w-full"
        placeholder="Email"
        required
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        className="border px-3 py-2 border-gray-800 w-full"
        placeholder="Password"
        required
      />
      <div className="w-full justify-between text-sm mt-[-8px] mb-2 flex">
        <p className="cursor-pointer hover:text-gray-800">Forgot Password?</p>
        <p
          onClick={() =>
            setCurrentState((prev) => (prev === "Login" ? "Sign Up" : "Login"))
          }
          className="cursor-pointer hover:text-gray-800"
        >
          {currentState === "Login" ? (
            <span className="cursor-pointer">Create an account</span>
          ) : (
            <span className="cursor-pointer">Login</span>
          )}
        </p>
      </div>
      <button className="bg-black text-white font-light px-8 py-2 mt-4">
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
