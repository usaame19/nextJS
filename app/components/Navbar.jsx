import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className='bg-gradient-to-r from-indigo-600 to-purple-500 shadow-md p-4'>
            <div className='container mx-auto flex justify-between items-center'>
                <Link href='/posts' className='text-white text-2xl font-bold'>
                <span class="self-center text-xl font-semibold whitespace-nowrap">
              Dugsiiye
            </span>
                </Link>
                <div className='space-x-4'>
                    <Link href='/' className='text-white hover:text-indigo-200 transition duration-300'>
                        Home
                    </Link>
                    <Link href='/posts' className='text-white hover:text-indigo-200 transition duration-300'>
                        Posts
                    </Link>
                    <Link href='/create-post' className='text-white hover:text-indigo-200 transition duration-300'>
                        Create Post
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
