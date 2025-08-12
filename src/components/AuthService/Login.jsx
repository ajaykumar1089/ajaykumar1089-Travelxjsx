import React, { useState } from "react";
import "./Login.css"
const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ email: "", password: "", confirmPassword: "" });

  const toggleMode = () => setIsLogin(!isLogin);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLogin && form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    alert(`${isLogin ? "Logging in" : "Signing up"} with ${form.email}`);
  };

  return (

    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="w-full max-w-sm bg-white rounded shadow p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">
        {isLogin ? "Login" : "Sign Up"}
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          className="w-full p-2 mb-3 border rounded"
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          className="w-full p-2 mb-3 border rounded"
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        {!isLogin && (
          <input
            className="w-full p-2 mb-3 border rounded"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />
        )}
        <button className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>
      <p className="text-center mt-4 text-sm">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button onClick={toggleMode} className="text-blue-500 underline">
          {isLogin ? "Sign up" : "Login"}
        </button>
      </p>
    </div>
    </div>
  );
};

export default AuthForm;
