//latest working

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, User, Facebook, Loader2 } from "lucide-react";
import "leaflet/dist/leaflet.css";
import "leaflet-ant-path";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Login.css"



const Login = () => {
 
const emailRegex =/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}$/i;
// "/^(?:[a-zA-Z0-9_'^&\/+{}!#%`~=*$?|-]+(?:\.[a-zA-Z0-9_'^&\/+{}!#%`~=*$?|-]+)*)@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/";

const fieldVariants = {
  hidden: { opacity: 0, y: 10 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.05 * i, duration: 0.25 } }),
};


const [mode, setMode] = useState("login"); // 'login' | 'signup'
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});

  const title = mode === "login" ? "Welcome back" : "Create your account";
  const subtitle = mode === "login" ? "Let’s get you signed in" : "Start your journey in seconds";

  const gradient = useMemo(
    () =>
      mode === "login"
        ? "from-indigo-500 via-sky-500 to-cyan-400"
        : "from-fuchsia-500 via-rose-500 to-orange-400",
    [mode]
  );

  function validate() {
    const next = {};
    if (mode === "signup" && !form.name.trim()) next.name = "Name is required";
    if (!emailRegex.test(form.email)) next.email = "Enter a valid email";
    if (form.password.length < 6) next.password = "Min 6 characters";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    // Simulate request
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    alert(`${mode === "login" ? "Logged in" : "Account created"}!\nEmail: ${form.email}`);
  }

  const fields = [
    ...(mode === "signup"
      ? [
          {
            name: "name",
            label: "Full name",
            type: "text",
            icon: <User className="w-4 h-4" />,
            placeholder: "Your name",
          },
        ]
      : []),
    {
      name: "email",
      label: "Email",
      type: "email",
      icon: <Mail className="w-4 h-4" />,
      placeholder: "you@example.com",
    },
    {
      name: "password",
      label: "Password",
      type: showPassword ? "text" : "password",
      icon: <Lock className="w-4 h-4" />,
      placeholder: "••••••••",
    },
  ];



  return (
    <>
      <div>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </div>
      <div>
        <div className="travel-icon-buttons-container"> 
        
  <div className="min-h-screen w-full bg-slate-950 text-white flex items-center justify-center p-4 relative overflow-hidden">
      {/* Floating gradient blobs */}
      <motion.div
        aria-hidden
        className={`absolute -top-32 -right-32 h-72 w-72 rounded-full blur-3xl opacity-40 bg-gradient-to-br ${gradient}`}
        animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className={`absolute -bottom-32 -left-32 h-80 w-80 rounded-full blur-3xl opacity-30 bg-gradient-to-tr ${gradient}`}
        animate={{ y: [0, 12, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 w-full max-w-md">
        {/* Card */}
        <motion.div
          layout
          className="bg-slate-900/70 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl p-6 sm:p-8"
        >
          {/* Mode toggle */}
          <div className="flex items-center justify-between gap-2 mb-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-semibold">{title}</h1>
              <p className="text-slate-300 text-sm mt-1">{subtitle}</p>
            </div>
            <button
              onClick={() => setMode((m) => (m === "login" ? "signup" : "login"))}
              className="shrink-0 inline-flex items-center gap-2 rounded-full border border-#1976D2/10 px-3 py-2 text-sm hover:bg-green/5 transition"
            >
              <span>{mode === "login" ? "Sign up" : "Log in"}</span>
            </button>
          </div>

          <form onSubmit={onSubmit} className="space-y-4">
            <AnimatePresence initial={false} mode="popLayout">
              {fields.map((f, idx) => (
                <motion.div
                  key={f.name}
                  custom={idx}
                  variants={fieldVariants}
                  initial="hidden"
                  animate="show"
                  exit={{ opacity: 0, y: -8, transition: { duration: 0.15 } }}
                  className="space-y-1"
                >
                  <label htmlFor={f.name} className="text-sm text-slate-200">
                    {f.label}
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">{f.icon}</span>
                    <input
                      id={f.name}
                      name={f.name}
                      type={f.type}
                      placeholder={f.placeholder}
                      value={form[f.name]}
                      onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                      className="w-full rounded-xl bg-slate-800/70 border border-white/10 focus:border-white/20 outline-none px-10 py-3 text-sm sm:text-base placeholder:text-slate-500"
                      autoComplete={f.name === "password" ? (mode === "login" ? "current-password" : "new-password") : f.name}
                    />
                    {f.name === "password" && (
                      <button
                        type="button"
                        onClick={() => setShowPassword((s) => !s)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    )}
                  </div>
                  {errors[f.name] && (
                    <p className="text-xs text-rose-400">{errors[f.name]}</p>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>

            <div className="flex items-center justify-between text-sm">
              <label className="inline-flex items-center gap-2 select-none">
                <input type="checkbox" className="appearance-none h-4 w-4 rounded border border-white/20 bg-slate-800 checked:bg-white/80 checked:border-white transition" />
                <span className="text-slate-300">Remember me</span>
              </label>
              <button type="button" className="text-sky-300 hover:text-sky-200">
                Forgot password?
              </button>
            </div>

            <motion.button
              whileTap={{ scale: 0.98 }}
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-white/90 to-white text-slate-900 font-medium py-3 disabled:opacity-70"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>{mode === "login" ? "Signing in..." : "Creating account..."}</span>
                </>
              ) : (
                <span>{mode === "login" ? "Sign in" : "Create account"}</span>
              )}
            </motion.button>

            <div className="relative text-center text-xs text-slate-400">
              <span className="bg-slate-900/70 px-3 relative z-10">or continue with</span>
              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-white/10" />
            </div>

            <div className="grid grid-cols-3 gap-3">
              <button type="button" className="flex items-center justify-center gap-2 rounded-xl border border-white/10 py-3 hover:bg-white/5">
                <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden>
                  <path fill="currentColor" d="M12 2.04c-5.51 0-9.96 4.45-9.96 9.96 0 4.41 2.86 8.15 6.83 9.47.5.09.68-.22.68-.49 0-.24-.01-.86-.01-1.68-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.84.09-.64.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03.8-.22 1.66-.33 2.52-.33s1.72.11 2.52.33c1.9-1.3 2.74-1.03 2.74-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85 0 1.34-.01 2.41-.01 2.74 0 .27.18.59.69.49A9.972 9.972 0 0 0 22 12c0-5.51-4.45-9.96-9.96-9.96Z"/>
                </svg>
                <span className="sr-only">GitHub</span>
              </button>
              <button type="button" className="flex items-center justify-center gap-2 rounded-xl border border-white/10 py-3 hover:bg-white/5">
                <svg viewBox="0 0 48 48" className="w-5 h-5" aria-hidden>
                  <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303C33.62 31.658 29.227 35 24 35c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.676 5.1 29.676 3 24 3 12.955 3 4 11.955 4 23s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.651-.389-3.917z"/>
                  <path fill="#FF3D00" d="M6.306 14.691l6.571 4.817C14.4 16.246 18.846 13 24 13c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.676 5.1 29.676 3 24 3 15.318 3 7.97 8.298 6.306 14.691z"/>
                  <path fill="#4CAF50" d="M24 43c5.166 0 9.807-1.977 13.263-5.197l-6.118-5.161C29.977 34.484 27.18 35.5 24 35c-5.212-.514-9.594-3.826-11.284-8.249l-6.5 5.007C8.83 38.498 15.82 43 24 43z"/>
                  <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-1.243 3.129-4.086 5.593-7.303 6.764l6.118 5.161C36.447 40.844 42 36.667 42 23c0-1.341-.138-2.651-.389-3.917z"/>
                </svg>
                <span className="sr-only">Google</span>
              </button>
              <button type="button" className="flex items-center justify-center gap-2 rounded-xl border border-white/10 py-3 hover:bg-white/5">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </button>
            </div>
          </form>

          <p className="text-center text-xs text-slate-400 mt-6">
            By continuing you agree to our
            <button className="mx-1 underline hover:text-slate-200">Terms</button>
            and
            <button className="ml-1 underline hover:text-slate-200">Privacy Policy</button>.
          </p>
        </motion.div>

        {/* Footer switch */}
        <div className="text-center mt-4 text-sm text-slate-300">
          {mode === "login" ? (
            <span>
              No account? {" "}
              <button className="underline hover:text-white" onClick={() => setMode("signup")}>
                Sign up
              </button>
            </span>
          ) : (
            <span>
              Already have an account? {" "}
              <button className="underline hover:text-white" onClick={() => setMode("login")}>
                Log in
              </button>
            </span>
          )}
        </div>
      </div>
    </div>
  


        </div>
      </div>
    </>
  );
};

export default Login;