import React from 'react';

function Account() {
    // Assuming you might fetch user details or similar
    const username = 'User'; // Placeholder for username

    return (
        <div className='w-full h-screen bg-gray-900 flex flex-col justify-center items-center space-y-6'>
            <h2 className='text-5xl text-blue-500 font-extrabold tracking-wide uppercase animate-pulse mb-4'>Your Account, {username}</h2>
            <div className='bg-gray-700 p-8 rounded-2xl shadow-2xl text-center hover:bg-gray-600 transition duration-300 ease-in-out'>
                <h3 className='text-3xl text-red-600 mb-6'>Account Details</h3>
                <p className='text-xl text-gray-200 mb-4'>Username: {username}</p>
                <p className='text-xl text-gray-200 mb-4'>Email: user@example.com</p>
                <p className='text-xl text-gray-200'>Additional information, such as account creation date, last login, or other relevant details, can be displayed here.</p>
                {/* You can add more account related information here */}
            </div>
            <button className='py-3 px-6 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-md shadow-md transition duration-300 ease-in-out'>
                Edit Profile
            </button>
            <button className='py-3 px-6 mt-4 bg-red-500 hover:bg-red-700 text-white font-bold rounded-md shadow-md transition duration-300 ease-in-out'>
                Delete Account
            </button>
        </div>
    )
}

export default Account
