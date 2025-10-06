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
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

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
          toast.success("Registration successful! Welcome to ShopKaro!");
          navigate("/");
        } else {
          toast.error(data.message || "Registration failed");
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
          toast.success("Login successful! Welcome back!");
          navigate("/");
        } else {
          toast.error(data.message || "Login failed");
        }
      }
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        toast.error(error.response.data.message || "An error occurred");
      } else if (error.request) {
        toast.error("Network error. Please check your connection.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 via-purple-100/30 to-pink-100/30 -z-10"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmMGYwZjAiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30 -z-10"></div>

      <div className="max-w-md w-full space-y-8">
        <div className="relative">
          {/* Main Form Container */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
            {/* Header */}
            <div className="px-8 pt-8 pb-6 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-indigo-600/10">
              <div className="text-center">
                {/* Logo */}
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-xl">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>

                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-700 via-blue-700 to-indigo-800 bg-clip-text text-transparent">
                  {currentState === "Login" ? "Welcome Back" : "Join ShopKaro"}
                </h2>
                <p className="text-gray-600 mt-2">
                  {currentState === "Login"
                    ? "Sign in to your account"
                    : "Create your account to get started"
                  }
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="px-8 pb-8">
              <form onSubmit={onSubmitHandler} className="space-y-6">
                {currentState === "Sign Up" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder="Enter your password"
                    required
                  />
                  {currentState === "Sign Up" && (
                    <p className="text-xs text-gray-500 mt-1">
                      Password should be at least 8 characters with mix of letters, numbers, and symbols
                    </p>
                  )}
                </div>

                {/* Additional Options */}
                <div className="flex items-center justify-between text-sm">
                  {currentState === "Login" && (
                    <button
                      type="button"
                      className="text-purple-600 hover:text-purple-700 font-medium transition-colors duration-200"
                    >
                      Forgot Password?
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() =>
                      setCurrentState((prev) => (prev === "Login" ? "Sign Up" : "Login"))
                    }
                    className="text-purple-600 hover:text-purple-700 font-medium transition-colors duration-200 ml-auto"
                  >
                    {currentState === "Login" ? "Create an account" : "Already have an account?"}
                  </button>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-4 px-6 rounded-xl font-semibold text-lg transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {loading ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      {currentState === "Login" ? "Signing In..." : "Creating Account..."}
                    </div>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      {currentState === "Login" ? "Sign In" : "Create Account"}
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  )}
                </button>
              </form>

              {/* Additional Info */}
              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500">
                  By continuing, you agree to our{" "}
                  <button className="text-purple-600 hover:text-purple-700 transition-colors duration-200">
                    Terms of Service
                  </button>{" "}
                  and{" "}
                  <button className="text-purple-600 hover:text-purple-700 transition-colors duration-200">
                    Privacy Policy
                  </button>
                </p>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-40 animate-pulse"></div>
        </div>

        {/* Additional Features */}
        <div className="text-center">
          <div className="grid grid-cols-3 gap-4 text-xs text-gray-600">
            <div className="flex items-center justify-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Secure</span>
            </div>
            <div className="flex items-center justify-center gap-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Fast</span>
            </div>
            <div className="flex items-center justify-center gap-1">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Premium</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
