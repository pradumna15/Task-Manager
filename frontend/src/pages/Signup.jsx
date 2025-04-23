import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

const Signup = () => {
  const [username, setUsername] = useState(""); // changed from name
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/signup", {
        username,
        email,
        password,
      });

      if (response.status === 201) {
        navigate("/login");
      } else {
        setError("Signup failed. Please try again.");
      }
    } catch (error) {
      setError(error.response?.data?.msg || "Signup failed. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-green-400 to-blue-600">
      <motion.form
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSignup}
        className="p-8 bg-white/20 backdrop-blur-lg shadow-lg rounded-lg w-96"
      >
        <h2 className="text-3xl font-bold text-white text-center">Sign Up</h2>

        <input
          type="text"
          placeholder="Username"
          className="border p-2 mt-4 w-full bg-transparent text-white placeholder-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="border p-2 mt-4 w-full bg-transparent text-white placeholder-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 mt-4 w-full bg-transparent text-white placeholder-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="text-red-300 text-center mt-2">{error}</p>}

        <button
          type="submit"
          className="mt-6 w-full py-2 text-lg font-semibold text-white bg-green-600 rounded-md hover:bg-green-700 transition-all"
        >
          Sign Up
        </button>
      </motion.form>
    </div>
  );
};

export default Signup;
