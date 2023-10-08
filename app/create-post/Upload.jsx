"use client";
import React, { useState } from 'react';
import { CldUploadWidget } from 'next-cloudinary';
import { useRouter } from 'next/navigation';

const Upload = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const registerPost = await fetch('http://localhost:3000/api/posts', {
      method: 'POST',
      body: JSON.stringify({ title, content, url: imageUrl }),
    });

    setContent('');
    setTitle('');
    setImageUrl(null);

    router.push('/');
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-full max-w-md p-4">
        <h1 className="text-2xl font-bold mb-4">Create a New Post</h1>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md shadow-md">
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm text-gray-600 mb-2">
              Title:
            </label>
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
            <label htmlFor="content" className="block text-sm text-gray-600 mb-2">
              Content:
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-3 py-2 border rounded-md outline-none focus:border-indigo-500 focus:ring"
              required
              rows="4"
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-2">Image Preview:</label>
            {imageUrl && (
              <img src={imageUrl} alt="Preview" className="w-full h-40 object-cover rounded-md" />
            )}
          </div>

          <CldUploadWidget uploadPreset="snjuchgw" onUpload={(result, widget) => setImageUrl(result.info.url)}>
            {({ open }) => (
              <button
                className="w-full bg-indigo-700 py-2 px-4 rounded-md text-white"
                onClick={(e) => {
                  e.preventDefault();
                  open();
                }}
              >
                Upload an Image
              </button>
            )}
          </CldUploadWidget>

          {imageUrl && (
            <button type="submit" className="w-full bg-indigo-700 py-2 px-4 rounded-md text-white mt-4">
              Create the Post
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Upload;
