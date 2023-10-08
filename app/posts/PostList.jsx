import Link from 'next/link';
import React, { Suspense } from 'react';
import DeleteButton from './DeleteButton';

const PostList = async () => {
    const data = await fetch('http://localhost:3000/api/posts', { cache: "no-store" });
    const postsData = await data.json();

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="flex flex-col items-center">
                <h1 className="text-4xl font-bold mt-8 mb-4">Posts List</h1>
                {postsData.length > 0 ? (
                    <div className="w-full md:w-2/3 lg:w-1/2">
                        <ul>
                            {postsData.map(post => (
                                <li key={post.id} className="mb-6 bg-white p-4 rounded-md shadow-lg">
                                    <div className='w-[200px]'>
                                        <img src={post.url} alt={post.title} className="w-full h-full object-cover rounded-md mb-4" />
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <div>
                                            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                                            <p className="text-gray-600">{post.content}</p>
                                        </div>
                                        <div>
                                            <DeleteButton id={post.id} />
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <div className="text-center">
                        <h1 className="text-2xl font-semibold mb-2">No posts available</h1>
                        <p className="text-gray-600">There are currently no posts in here.</p>
                        <p className="text-gray-600">create new post in <span className=" font-semibold mb-2"><Link href="/create-post">HERE</Link></span></p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PostList;
