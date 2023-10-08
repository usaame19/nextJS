import React, { Suspense } from 'react';
import PostList from './PostList';
import PostSkeleton from '../components/PostSkeleton';


const PostsPage = () => {
    return (
        <>
            <div>
                
                {/* <Suspense fallback={<PostSkeleton />}> */}
                <PostList />
                {/* </Suspense> */}
            </div>
        </>
    );
};

export default PostsPage;