import { useState } from "react";
import { MailIcon , Eye , EyeOff , LockKeyhole  } from "lucide-react";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);


    const submitHandler = () => {
        console.log("Form Submitted");
        console.log("Email is : ", email);
        console.log("Password is : ", password);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-900 to-gray-800 px-4">
            {/* FORM WRAPPER */}
            <form
                onSubmit={submitHandler}
                className="w-full max-w-md bg-gray-900/90 backdrop-blur-xl rounded-2xl shadow-2xl p-8 relative overflow-hidden border border-gray-800"
            >
                {/* Decorative Gradient */}
                <div className="absolute -top-16 -right-16 w-40 h-40 bg-indigo-700/30 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-purple-700/30 rounded-full blur-3xl"></div>

                {/* Heading */}
                <h2 className="text-3xl font-extrabold text-center text-gray-100 mb-1">
                    Welcome Back 👋
                </h2>
                <p className="text-center text-gray-400 mb-8">
                    Login to your employee dashboard
                </p>

                {/* Email */}
                <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-300 mb-1">
                        Email
                    </label>
                    <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                            <MailIcon />
                        </span>
                        <input
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            type="email"
                            required
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            placeholder="Enter Email"
                            className="w-full pl-10 pr-4 py-2.5 border border-gray-700 bg-gray-800 text-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 transition placeholder-gray-500"
                        />
                    </div>
                </div>

                {/* Password */}
                <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-300 mb-1">
                        Password
                    </label>

                    <div className="relative">
                        {/* Lock Icon */}
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                            <LockKeyhole />
                        </span>

                        {/* Input */}
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter password"
                            className="w-full pl-10 pr-12 py-2.5 border border-gray-700 bg-gray-800 text-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 transition placeholder-gray-500"
                        />

                        {/* Eye Icon */}
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200 transition cursor-pointer"
                        >
                            {showPassword ? <EyeOff /> : <Eye />}
                        </button>
                    </div>
                </div>


                {/* Options */}
                <div className="flex items-center justify-between text-sm mb-6">
                    <label className="flex items-center gap-2 text-gray-400">
                        <input type="checkbox" className="accent-indigo-500" />
                        Remember me
                    </label>
                    <a href="#" className="text-indigo-400 font-medium hover:underline">
                        Forgot password?
                    </a>
                </div>

                {/* Button */}
                <button
                    type="submit"
                    className="w-full py-3 rounded-lg font-semibold text-white cursor-pointer bg-linear-to-r from-indigo-700 to-purple-700 hover:opacity-90 transition duration-200 shadow-lg"
                >
                    Login
                </button>

                {/* Footer */}
                <p className="text-center text-sm text-gray-500 mt-8">
                    © 2025 Employee Management System
                </p>
            </form>
        </div>
    );
};

export default Login;
