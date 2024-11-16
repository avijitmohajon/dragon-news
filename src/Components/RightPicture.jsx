import React from 'react';

const RightPicture = () => {
    return (
        <div className="p-4 mt-5 bg-base-200 rounded-lg shadow-lg w-full">
            <h3 className="text-xl font-semibold mb-4">Articles</h3>
            <div className="space-y-6">
                <div className="flex items-start space-x-4">
                    {/* <img className="w-16 h-16 object-cover rounded-lg" /> */}
                    <div>
                        <h4 className="font-semibold text-sm"></h4>
                        <div className="text-xs text-gray-500 flex items-center space-x-1">
                            <span></span>
                            <span className="text-gray-400"></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightPicture;