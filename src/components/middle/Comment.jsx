/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import UserImage from "../../assets/user.png";
import { useNavigate } from 'react-router-dom';


export default function Comment({ comment }) {
    const navigate = useNavigate();
    const profile = () => navigate("/profile");
    return (
        <div className="p-4 sm:p-6 md:p-8 shadow-md mx-auto border-y-[1.5px] border-gray-700 w-[95%] sm:w-[90%] md:w-[80%] lg:w-[750px]">
            {/* User Information */}
            <div className="flex items-center mb-3">
                {/* User Avatar */}
                <img
                    src={UserImage}
                    alt="User"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-2 sm:mr-3"
                />
                <div>
                    {/* Username and Date */}
                    <div className="flex flex-wrap items-center text-xs sm:text-sm md:text-base text-white">
                        <span className="font-bold">Aasfah Selene</span>
                        <span className="text-[#8899a6] ml-2 cursor-pointer">
                            <span onClick={profile}>@aasfahselne</span> · {new Date().toLocaleDateString()}
                        </span>
                    </div>
                </div>
            </div>

            {/* Comment Text */}
            <p className="mt-3 text-xs sm:text-sm md:text-base text-white leading-relaxed">
                {comment}
            </p>
        </div>
    );
}
