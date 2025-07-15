/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { useNavigate } from 'react-router-dom';
import UserImage from "../../assets/user.png";
import { FaHeart, FaRegHeart, FaRetweet, FaComment, FaShare } from 'react-icons/fa';

function Profile({ tweet, theme }) {
    const navigate = useNavigate();
    const home = () => {
        navigate('/');
    }

    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);

    const handleLikeToggle = () => {
        if (liked) {
            setLiked(false);
            setLikeCount((prev) => prev - 1);
        } else {
            setLiked(true);
            setLikeCount((prev) => prev + 1);
        }
    };

    // Theme Handling
    const isLightTheme = theme === "light";

    const bgClass = isLightTheme ? "bg-white" : "bg-black";
    const textClass = isLightTheme ? "text-black" : "text-white";
    const borderColor = isLightTheme ? "border-gray-300" : "border-gray-700";
    const hoverBgClass = isLightTheme ? "hover:bg-gray-100" : "hover:bg-gray-800";
    const buttonClass = isLightTheme ? "bg-gray-100 text-black" : "bg-gray-900 text-white";

    return (
        <div className={`${bgClass} ${textClass} min-h-screen`}>
            {/* Header Section */}
            <div className="flex items-center px-4 py-3">
                <FaArrowLeft className="text-xl mr-4 cursor-pointer" onClick={home} />
                <div>
                    <div className="font-bold text-lg">Joshua Mavinga</div>
                    <div className="text-sm text-gray-500">{tweet.length} Posts</div>
                </div>
            </div>

            {/* Background Cover and Profile Image Section */}
            <div className="relative">
                <div className="bg-gray-700 h-40"></div>
                <div className="absolute -bottom-14 left-4">
                    <img src={UserImage} alt="" className="w-[8rem] h-[8rem] bg-gray-500 rounded-full border-4 border-black" />
                </div>
                <button className={`${buttonClass} absolute top-[12rem] right-4 border-2 px-4 py-1 rounded-full ${theme == "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200 text-black"}`} style={{
                    border: "1px solid #fff"
                }}>
                    Set up profile
                </button>
            </div>

            {/* User Details Section */}
            <div className="px-4 pt-12 mt-12">
                <div className="font-bold text-xl">Joshua Mavinga</div>
                <div className="text-gray-500">@joshuamavinga</div>
                <div className="flex items-center text-gray-500 mt-2">
                    <SlCalender className="mr-2" /> Joined April 2025
                </div>
                <div className="flex gap-6 mt-6">
                    <div className="cursor-pointer">
                        <span className="font-bold">121</span> <span className='text-gray-500'>Following</span>
                    </div>
                    <div className="cursor-pointer">
                        <span className="font-bold">17</span> <span className='text-gray-500'>Followers</span>
                    </div>
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex justify-between px-4 border-b border-gray-700 mt-4">
                <div className="py-2 px-2 hover:bg-gray-800 rounded cursor-pointer font-semibold border-b-4 border-[#1da1f2]">
                    Posts
                </div>
                <div className="py-2 px-2 hover:bg-gray-800 rounded cursor-pointer text-gray-500">
                    Replies
                </div>
                <div className="py-2 px-2 hover:bg-gray-800 rounded cursor-pointer text-gray-500">
                    Highlights
                </div>
                <div className="py-2 px-2 hover:bg-gray-800 rounded cursor-pointer text-gray-500">
                    Articles
                </div>
                <div className="py-2 px-2 hover:bg-gray-800 rounded cursor-pointer text-gray-500">
                    Media
                </div>
                <div className="py-2 px-2 hover:bg-gray-800 rounded cursor-pointer text-gray-500">
                    Likes
                </div>
            </div>

            {/* my tweet */}
            {tweet &&
                tweet.map((twt, index) => (
                    <div
                        className={`${bgClass} p-8 shadow-md mx-auto border-y-[1.5px] border-gray-700 w-full max-w-[600px] md:max-w-[750px]`}
                        key={index}
                    >
                        <div className="flex items-start mb-3">
                            <img
                                src={UserImage}
                                alt="User"
                                className="w-12 h-12 rounded-full mr-3"
                            />
                            <div>
                                <div className="flex flex-wrap items-center text-sm md:text-base">
                                    <span className="font-bold">Joshua Mavinga</span>
                                    <span className="text-[#8899a6] ml-2">
                                        <span
                                            className="hover:text-[#1da1f2] cursor-pointer"
                                        >
                                            @joshuamavinga
                                        </span>{" "}
                                        · {twt.date}
                                    </span>
                                </div>
                                <p className="text-[#8899a6] text-xs sm:text-sm">My Tweet</p>
                            </div>
                        </div>
                        <p className="mt-3 text-sm md:text-base">{twt.message}</p>

                        <div className="flex justify-between items-center text-[#8899a6] mt-4 flex-wrap sm:flex-nowrap">
                            <button className="flex items-center space-x-1 hover:text-blue-400 text-xs sm:text-sm">
                                <FaComment />
                                <span>0</span>
                            </button>
                            <button
                                className="flex items-center space-x-1 hover:text-green-400 text-xs sm:text-sm"

                            >
                                <FaRetweet />
                                <span>0</span>
                            </button>
                            <button
                                className={`flex items-center space-x-1 ${liked ? "text-red-500" : "hover:text-red-500"} text-xs sm:text-sm`}
                                onClick={handleLikeToggle}
                            >
                                {liked ? <FaHeart /> : <FaRegHeart />}
                                <span>{likeCount}</span>
                            </button>
                            <button className="flex items-center space-x-1 hover:text-blue-400 text-xs sm:text-sm">
                                <FaShare />
                            </button>
                        </div>
                    </div>
                ))
            }
        </div >
    );
}

export default Profile;
