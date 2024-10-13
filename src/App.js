import React from 'react';
import './index.css';

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-indigo-200 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md p-10 space-y-8 bg-white rounded-3xl shadow-lg sm:max-w-lg">
        <h2 className="text-2xl font-extrabold text-center text-gray-800 sm:text-3xl">
          Welcome Back
        </h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 mt-2 text-gray-700 border rounded-full focus:ring-blue-400 focus:border-blue-400 outline-none bg-blue-50"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-600">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-3 mt-2 text-gray-700 border rounded-full focus:ring-blue-400 focus:border-blue-400 outline-none bg-blue-50"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full shadow-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <a href="#" className="font-medium text-blue-600 hover:underline">
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
