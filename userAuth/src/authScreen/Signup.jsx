import { useState } from "react";
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import API_URL from "../config/global";
const Signup = () => {
    const [formData, serFormData] = useState({
        name: '',
        email: '',
        password: '',
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        serFormData({
            ...formData, [name]: value,
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(formData)
        try {
            const response = await axios.post(`${API_URL}/signup/verify`, formData)
            if (response.data === true) {
                alert("Registration link is sent to your Email Id")
            } else if (response.data === false) {
                alert("User Already Exists")
            }
        } catch (error) {
            console.error("Error during Registration : ", error)
        }
    }
    return (
        <section className="rounded-lg p-2 bg-white">
            <div className="flex items-center justify-center my-3">
                <div className="xl:mx-auto rounded-lg shadow-md p-4 xl:w-full xl:max-w-sm 2xl:max-w-md">
                    <div className="mb-2"></div>
                    <h2 className="text-2xl font-bold leading-tight">
                        Sign up
                    </h2>

                    <form className="mt-5" onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div>
                                <div className="flex items-center justify-between">
                                    <label className="text-base font-medium text-gray-900">
                                        User Name
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        placeholder="Full Name"
                                        type="text"
                                        className="flex h-10 w-full rounded-md border focus:border-none border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label className="text-base text-left font-medium text-gray-900">
                                        Email address
                                    </label>
                                </div>

                                <div className="mt-2">
                                    <input
                                        placeholder="Email"
                                        type="email"
                                        className="flex h-10 w-full rounded-md border border-gray-300  focus:border-none bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label className="text-base font-medium text-gray-900">
                                        Password
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        placeholder="Password"
                                        type="password"
                                        className="flex h-10 w-full rounded-md border border-gray-300  focus:border-none bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <p className="mt-2 text-base text-gray-600">
                                Already have an account?
                                <NavLink className="text-green-700 underline" to='/'>Sign In</NavLink>
                            </p>
                            <div>
                                <button
                                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                                    type="submit"
                                >
                                    Create Account
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Signup