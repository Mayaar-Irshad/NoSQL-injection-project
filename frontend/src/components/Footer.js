import React from 'react';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='w-full bg-gradient-to-r from-blue-800 to-teal-700 text-white py-4 px-6 border-t border-blue-900 shadow-md'>
            <div className='container mx-auto text-center'>
                {/* <h3 className='text-xl font-bold'>NoSQL-DB Exploit</h3> */}
                <p className='text-md mt-1'>All Rights Reserved © {currentYear}. Ahmad Irshad Mayaar.</p>
            </div>
        </footer>
    );
}

export default Footer;
