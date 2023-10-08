"use client";
import React, { useState, useEffect } from 'react';
import { CldUploadWidget } from 'next-cloudinary';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation'
import { getBaseUrl } from '../../util/baseURL';

const Edit = () => {
    const [imageUrl, setImageUrl] = useState(null);
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const params = useParams()
    const { id } = params; 
    const router = useRouter();
    const baseURL = getBaseUrl()
    console.log(id)
    useEffect(() => {
        if (id) {
            const fetchData = async () => {
                try {
                    const response = await fetch(`${baseURL}/api/posts/${id}`);
                    if (!response.ok) {
                        throw new Error('Failed to fetch data');
                        
                    }
                    const data = await response.json();
                    console.log(data)
                    setTitle(data.message.title);
                    setContent(data.message.content);
                    setImageUrl(data.message.url);
                } catch (error) {
                    console.error('Error fetching old content:', error);
                }
            };

            fetchData();
        }
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const baseURL = getBaseUrl()

        // Update the content in the database
        const response = await fetch(`${baseURL}/api/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, content, url: imageUrl })
        });

        if (response.ok) {
            // Content updated successfully, you can redirect to a different page or display a success message
            router.push('/');
        } else {
            console.error('Error updating content');
        }
    };

    return (
        <div className='h-auto mx-auto  flex justify-center items-center max-w-4xl mt-24'>
            <div className='flex flex-col space-y-6'>
            <form onSubmit={handleSubmit} className="bg-white p-6 max-w-sm mx-auto rounded-md shadow-md">
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-sm text-gray-600 mb-2">Title:</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md outline-none focus:border-indigo-500 focus:ring"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="content" className="block text-sm text-gray-600 mb-2">Content:</label>
                        <textarea
                            id="content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md outline-none focus:border-indigo-500 focus:ring"
                            required
                        ></textarea>
                    </div>

                    <CldUploadWidget uploadPreset="snjuchgw"
                        onUpload={(result, widget) =>
                            // @ts-ignore
                            setImageUrl(result.info.url)}
                    >
                        {({ open }) => {

                            return (
                                <button className="bg-indigo-700 py-4 px-2 rounded-md m-4 text-white" onClick={(e) => { e.preventDefault(); open(); }}>
                                    Upload an Image
                                </button>
                            );
                        }}
                    </CldUploadWidget>
                    {imageUrl && (
                        <div className="mb-4">
                            <label className="block text-sm text-gray-600 mb-2">Image Preview:</label>
                            <img src={imageUrl} alt="Preview" className="w-full h-64 object-cover rounded-md" />
                        </div>
                    )}

                    {imageUrl && (<button type="submit" className="w-full bg-indigo-700 py-2 px-4 rounded-md text-white">
                        Update the post
                    </button>)}
                </form>
            </div>
        </div>
    );
};

export default Edit;
