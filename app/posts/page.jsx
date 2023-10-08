import React from 'react';
import PostList from './PostList';

export const dynamic = 'force-dynamic';

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