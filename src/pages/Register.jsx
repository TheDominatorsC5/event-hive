import { Link } from 'react-router';
import googleIcon from '../assets/images/google-icon.png';
import registerImage from '../assets/images/register.png';

export default function Register() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
            <div className="flex w-full max-w-5xl shadow-lg rounded-lg overflow-hidden">
                {/* Left side - Image and Message */}
                <div className="hidden md:flex w-2/5 bg-cover bg-center items-center justify-center relative"
                    style={{ backgroundImage: "url(" + registerImage + ")" }}>
                    <div className="absolute inset-0 bg-[#1313154D]"></div>
                    <div className="z-10 rounded-lg text-center text-white max-w-sm">
                        <h2 className="text-2xl font-bold mb-6">Welcome back</h2>
                        <p className="mb-8 text-xs">To keep connected with us please sign up with your personal info</p>
                        <Link to="/login" style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }} className="py-2 px-6 rounded-md hover:text-black transition">
                            Sign In
                        </Link>
                    </div>
                </div>

                <div className="w-full md:w-3/5 py-16 px-24">
                    <div className='flex flex-col items-center mb-12 space-y-9'>
                        <h2 className="text-2xl font-semibold text-center">Event
                            <span className="text-primary">Hive</span>
                        </h2>
                        <h3 className="text-xl font-semibold text-center">Sign Up to Event Hive</h3>
                    </div>

                    <form className='flex flex-col items-center space-y-9'>
                        <div className="w-full">
                            <label className="block mb-1">YOUR NAME</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                        <div className="w-full">
                            <label className="block mb-1">YOUR EMAIL</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                        <div className="w-full">
                            <label className="block mb-1">PASSWORD</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                         <div className="w-full">
                            <label className="block mb-1">CONFIRM PASSWORD</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full md:w-1/2 bg-primary text-white py-2 rounded-md hover:bg-primary transition cursor-pointer"
                        >
                            Sign Up
                        </button>
                    </form>

                    <div className="my-6 text-center text-sm text-gray-400">Or</div>

                    <button className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-md hover:bg-gray-50 transition cursor-pointer">
                        <img src={googleIcon} alt="Google Icon" className="w-5 h-5 mr-2" />
                        Sign up with Google
                    </button>
                </div>
            </div>
        </div>

    );
}