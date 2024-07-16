import axios from 'axios';
import API_URL from './config/global'
import { useEffect, useState } from 'react';
const Home = () => {
    const [res, setRes] = useState({})
    const getData = async (token) => {
        try {
            const config = {
                headers: {
                    Authorization: token
                }
            }
            const response = await axios.get(`${API_URL}/home`, config);
            console.log(response)
            if (response.data === "Invalid Token") {
                alert("login Again")
            } else if (response.data === "Server busy") {
                alert("Un Authorized access")
            } else if (response?.status) {
                setRes(response.data)
            }
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('UserInfo'));
        if (user && user.token) {
            getData(user.token)
        }
    }, [])

    return (
        <section className="w-max mx-auto">
            <h1 className='text-3xl shadow-lg p-4 mb-4'>Welcome {res.name}</h1>
            <p>{res.email}</p>
        </section>
    )
}

export default Home