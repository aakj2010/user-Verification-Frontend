import { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/api/forgot-password', { email });
            setMessage(response.data);
        } catch (error) {
            setMessage('Error sending password reset email');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
                <h2 className="text-2xl mb-4">Forgot Password</h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mb-4 p-2 border rounded w-full"
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
                {message && <p className="mt-4">{message}</p>}
            </form>
        </div>
    );
};

export default ForgotPassword;
