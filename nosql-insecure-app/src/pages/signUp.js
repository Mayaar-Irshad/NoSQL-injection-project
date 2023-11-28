import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const [users, setUsers] = useState([]);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        axios
            .get('http://localhost:3001/register')
            .then((res) => {
                // console.log(res.data)
            });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post('http://localhost:3001/register', { email, username, password })
            .then(() => {
                alert('Registration Successful');
                setEmail('');
                setUsername('');
                setPassword('');
                fetchUsers();
                navigate('/login');
            })
            .catch((error) => {
                console.log('Unable to register user');
            });
    };

    return (
        <div className='w-full h-screen flex'>
            <div className='w-1/2 h-full flex justify-center items-center bg-gray-900'>
                <form className='text-center border border-gray-600 rounded-2xl w-[600px] h-auto p-9 shadow-2xl bg-gray-700 hover:bg-gray-600 transition duration-300 ease-in-out'
                      onSubmit={handleSubmit}>
                    {/* Email Input */}
                    <label className='text-xl font-semibold text-white'>Email</label>
                    <br />
                    <input className='w-full h-10 mt-2 mb-4 rounded-xl bg-gray-800 p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
                           type='text'
                           placeholder='Email'
                           value={email}
                           onChange={(e) => setEmail(e.target.value)} />
                    <br />
                    {/* Username Input */}
                    <label className='text-xl font-semibold text-white'>Username</label>
                    <br />
                    <input className='w-full h-10 mt-2 mb-4 rounded-xl bg-gray-800 p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
                           type='text'
                           placeholder='Username'
                           value={username}
                           onChange={(e) => setUsername(e.target.value)} />
                    <br />
                    {/* Password Input */}
                    <label className='text-xl font-semibold text-white'>Password</label>
                    <br />
                    <input className='w-full h-10 mt-2 mb-4 rounded-xl bg-gray-800 p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
                           type='password'
                           placeholder='Password'
                           value={password}
                           onChange={(e) => setPassword(e.target.value)} />
                    <br />
                    {/* Button */}
                    <button className='w-48 h-12 mt-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out'
                            type='submit'>Sign Up</button>
                </form>
            </div>
            <div className='w-1/2 h-full bg-teal-700 flex justify-center items-center'>
                <h2 className='text-5xl text-white font-extrabold tracking-wide uppercase animate-pulse'>Sign Up</h2>
            </div>
        </div>
    );
}

export default SignUp;
