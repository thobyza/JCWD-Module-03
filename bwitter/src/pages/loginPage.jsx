import twitterLogo from '../assets/Twitter-Logo-2012.png'
import googleLogo from '../assets/google_g_icon.svg'
import appleLogo from '../assets/apple_icon.svg'
import twitterBg from '../assets/Twitter-bg.jpg'

import { Link } from "react-router-dom"

export const LoginPage = () => {
    return (
        <div className="flex min-h-screen">
            <div className="flex justify-center items-center w-1/2">
                <img src={twitterLogo} alt="" className="h-1/3" />
            </div>
            <div className="flex flex-col justify-center w-1/2">
                <h2 className="text-5xl font-bold">Happening Now</h2>
                <h4 className="text-2xl font-bold mt-6">Join today.</h4>
                <div className="flex flex-col w-2/4 mt-6">
                    <button 
                        type="button"
                        className="flex justify-center items-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-1 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2 mb-2"
                    >
                        <img src={googleLogo} alt="" className="h-5 mr-3"/>
                        Sign up with Google
                    </button>
                    <button 
                        type="button"
                        className="flex justify-center items-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-1 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2 mb-2"
                    >
                        <img src={appleLogo} alt="" className="h-5 mr-3"/>
                        Sign up with Apple
                    </button>
                    <span className="flex justify-center items-center text-sm">or</span>
                    <Link 
                        to="/register"
                        type="button"
                        className="flex justify-center items-center text-white bg-sky-500 hover:bg-sky-600 focus:ring-1 font-medium rounded-full text-sm px-5 py-2 mt-2 mb-2"
                    >
                        Create account
                    </Link>
                    <p className="text-sm font-medium mt-4 mb-3">Already have an account?</p>
                    <Link 
                        to="/signin"
                        type="button"
                        className="flex justify-center items-center text-sky-500 bg-white border border-gray-300 focus:outline-none hover:bg-sky-100 hover:border-sky-500 focus:ring-1 focus:ring-sky-500 font-medium rounded-full text-sm px-5 py-2 mb-2"
                    >
                        Sign in
                    </Link>
                </div>
            </div>
        </div>
    )
}