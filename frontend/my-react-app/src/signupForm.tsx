// src/components/SignupForm.tsx
import React, { useState } from "react";

const SignupForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup:", { name, email, password });
    // TODO: Add signup logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSignup}
        className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800">Sign Up</h2>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
