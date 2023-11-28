import React from 'react';

function Home() {
  return (
    <div className='w-full h-screen bg-gray-900 flex flex-col justify-center items-center space-y-6'>
      <div className='animate-pulse'>
        <h2 className='text-5xl text-blue-500 font-extrabold tracking-wide uppercase'>HOME</h2>
      </div>
      
      <div className='bg-gray-700 p-8 rounded-2xl shadow-2xl text-center hover:bg-gray-600 transition duration-300 ease-in-out'>
        <h3 className='text-3xl text-red-600 mb-6'>NoSQL Injection Vulnerability Test Site</h3>
        <p className='text-xl text-gray-200'>
          This site is intentionally designed to be vulnerable to NoSQL injection attacks for educational and testing purposes. 
          It demonstrates how such vulnerabilities can be exploited and why it's crucial to secure your applications.
        </p>
        <p className='text-xl text-gray-200 mt-6'>
          Warning: This site is insecure by design. Do not enter real or sensitive information.
        </p>
      </div>

      <div className='mt-10'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'>
          Learn More
        </button>
      </div>

      {/* Additional content or functional components can be added here */}
    </div>
  );
}

export default Home;
