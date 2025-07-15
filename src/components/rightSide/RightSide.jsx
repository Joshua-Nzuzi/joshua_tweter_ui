/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import profile1 from "../../assets/profile1.jpg";
import profile2 from "../../assets/profile2.jpg";
import profile3 from "../../assets/profile3.jpg";

export default function RightSide({ searchInput, setSearchInput, theme }) {
    const users = [
        {
            image: profile1, // Replace with actual user images
            name: 'G.V.Prakash Kumar',
            userName: '@gvprakash',
        },
        {
            image: profile2,
            name: 'Living Abroad',
            userName: '@LivingAbroadLLC',
        },
        {
            image: profile3,
            name: 'Trish',
            userName: '@trishtrashers',
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    // Theme-based styles
    const containerStyle = theme === "dark" ? "bg-[#15202b] text-white" : "bg-gray-100 text-black";
    const cardStyle = theme === "dark" ? "bg-[#202327] text-white" : "bg-white text-black";
    const inputStyle = theme === "dark"
        ? "bg-[#202327] text-white placeholder-gray-500"
        : "bg-gray-200 text-black placeholder-gray-600";
    const hoverButtonStyle = theme === "dark"
        ? "hover:bg-gray-700"
        : "hover:bg-gray-300";

    return (
        <div
            className={`hidden sm:block md:block lg:block xl:block 2xl:block ${containerStyle} p-4 space-y-6 w-full md:w-auto`}
        >
            {/* Search Bar */}
            <form onSubmit={handleSubmit} className="w-full">
                <input
                    type="text"
                    placeholder="Search"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className={`w-full ${inputStyle} px-4 py-2 rounded-full focus:outline-none`}
                />
            </form>

            {/* Who to Follow Section */}
            <div className={`${cardStyle} rounded-xl p-4 space-y-4`}>
                <h2 className="text-xl font-bold">You might like</h2>
                {users.map((user, index) => (
                    <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center">
                            <img
                                src={user.image}
                                alt={user.name}
                                className="w-10 h-10 rounded-full mr-3"
                            />
                            <div>
                                <p className="font-bold">{user.name}</p>
                                <p className="text-gray-500 text-sm">{user.userName}</p>
                            </div>
                        </div>
                        <button
                            className={`bg-white text-black font-bold py-1 px-4 rounded-full ${hoverButtonStyle}`}
                        >
                            Follow
                        </button>
                    </div>
                ))}
                <button className="text-blue-500 hover:underline text-sm">Show more</button>
            </div>

            {/* What’s Happening Section */}
            <div className={`${cardStyle} rounded-xl p-4 space-y-4`}>
                <h2 className="text-xl font-bold">What’s happening</h2>
                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-gray-500 text-sm">Politics · Trending</p>
                            <p className="font-bold">Iran</p>
                            <p className="text-gray-500 text-sm">276K posts</p>
                        </div>
                        <button
                            className={`${theme === "dark" ? "text-gray-500 hover:text-white" : "text-gray-700 hover:text-black"}`}
                        >
                            <i className="fas fa-ellipsis-h"></i>
                        </button>
                    </div>
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-gray-500 text-sm">Politics · Trending</p>
                            <p className="font-bold">Israel</p>
                            <p className="text-gray-500 text-sm">1.08M posts</p>
                        </div>
                        <button
                            className={`${theme === "dark" ? "text-gray-500 hover:text-white" : "text-gray-700 hover:text-black"}`}
                        >
                            <i className="fas fa-ellipsis-h"></i>
                        </button>
                    </div>
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-gray-500 text-sm">Politics · Trending</p>
                            <p className="font-bold">Pappu</p>
                            <p className="text-gray-500 text-sm">17.5K posts</p>
                        </div>
                        <button
                            className={`${theme === "dark" ? "text-gray-500 hover:text-white" : "text-gray-700 hover:text-black"}`}
                        >
                            <i className="fas fa-ellipsis-h"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
