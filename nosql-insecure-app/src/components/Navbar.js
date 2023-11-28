import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const isUserSignedIn = !!localStorage.getItem('token');
    const navigate = useNavigate();

    const handleSignOut = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }

    return (
        <nav className='flex items-center justify-between bg-gradient-to-r from-blue-800 to-teal-700 text-white py-4 px-6 border-b border-blue-900 shadow-lg'>
            <Link to='/' className='text-4xl font-extrabold hover:text-blue-300 tracking-wider'>
                <h1>Home</h1>
            </Link>

            <h1 className='text-4xl font-extrabold tracking-wider'>NoSQL-DB Exploit</h1> {/* Added centered title */}

            <ul className='flex gap-6 text-lg'>
                {isUserSignedIn ? (
                    <>
                        <Link to='/account' className='py-2 px-4 hover:bg-blue-700 rounded-lg transition duration-300 ease-in-out'>
                            <li>Account</li>
                        </Link>
                        <li>
                            <button onClick={handleSignOut} className='py-2 px-4 bg-red-600 hover:bg-red-800 rounded-lg transition duration-300 ease-in-out'>
                                Sign Out
                            </button>
                        </li>
                    </>
                ) : (
                    <>
                        <Link to='/login' className='py-2 px-4 hover:bg-blue-700 rounded-lg transition duration-300 ease-in-out'>
                            <li>Login</li>
                        </Link>
                        <Link to='/signup' className='py-2 px-4 hover:bg-blue-700 rounded-lg transition duration-300 ease-in-out'>
                            <li>Signup</li>
                        </Link>
                    </>
                )}
            </ul>
        </nav>
    );
}

export default Navbar;
