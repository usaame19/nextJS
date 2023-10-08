import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-[200px]">
                <div className="animate-spin rounded-full border-t-4 border-blue-500 border-solid h-16 w-16 mx-auto"></div>
            </div>
        </div>
    );
};

export default LoadingSpinner;
