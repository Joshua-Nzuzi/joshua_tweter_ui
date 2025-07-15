/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import { FaImage, FaSmile, FaMapMarkerAlt } from 'react-icons/fa';
import { MdGif, MdPoll, MdSchedule } from 'react-icons/md';
import UserImage from "../../assets/user.png";

function TweetInput({ addTweet, theme }) {
    const [post, setPost] = useState('');
    const inpt = useRef();

    useEffect(() => {
        inpt.current.focus();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (post === "") {
            return;
        }
        addTweet(post);
        setPost("");
    };

    // Dynamic theme-based styles
    const containerStyle = theme === "dark" ? "bg-[#15202b] text-white" : "bg-gray-100 text-black";
    const placeholderStyle = theme === "dark" ? "placeholder-gray-500" : "placeholder-gray-400";
    const inputTextStyle = theme === "dark" ? "text-white" : "text-black";
    const buttonStyle = theme === "dark"
        ? "bg-[#1da1f2] text-white hover:bg-blue-400"
        : "bg-blue-500 text-white hover:bg-blue-600";

    return (
        <div className={`${containerStyle} p-8 shadow-md w-full mx-auto`}>
            {/* Input Section */}
            <div className="flex items-start flex-col md:flex-row">
                {/* User Avatar */}
                <img
                    src={UserImage}
                    alt="User"
                    className="w-12 h-12 rounded-full mb-3 md:mb-0 md:mr-4"
                />

                {/* Input Field */}
                <form className="flex-1 w-full" onSubmit={handleSubmit}>
                    <textarea
                        ref={inpt}
                        placeholder="What is happening?!"
                        rows="3"
                        className={`w-full bg-transparent ${inputTextStyle} text-lg outline-none ${placeholderStyle} resize-none`}
                        value={post}
                        onChange={(e) => setPost(e.target.value)}
                    ></textarea>

                    <div className="flex items-center justify-between mt-4 flex-wrap md:flex-nowrap">
                        {/* Icons */}
                        <div className="flex items-center space-x-4 text-[#1da1f2] flex-wrap md:flex-nowrap mb-3 md:mb-0">
                            <MdGif className="cursor-pointer hover:text-blue-400" />
                            <FaSmile className="cursor-pointer hover:text-blue-400" />
                            <MdSchedule className="cursor-pointer hover:text-blue-400" />
                            <FaMapMarkerAlt className="cursor-pointer hover:text-blue-400" />
                        </div>

                        {/* Post Button */}
                        <button className={`${buttonStyle} px-4 py-1 rounded-full font-medium`}>
                            Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TweetInput;
