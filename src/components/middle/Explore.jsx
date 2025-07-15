/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function Explore({ theme }) {
    const trends = [
        { category: "Entertainment · Trending", title: "Ajith", posts: "16.2K posts" },
        { category: "Business & finance · Trending", title: "$BTC", posts: "1.14M posts" },
        { category: "Politics · Trending", title: "#Israel", posts: "20.4K posts" },
        { category: "Trending", title: "#ElvishYadav", posts: "52.6K posts" },
        { category: "Trending in Denmark", title: "Niels", posts: "1,318 posts" },
        { category: "Trending", title: "Brahmin", posts: "2,675 posts" },
        { category: "Trending in Denmark", title: "Luigi", posts: "125K posts" },
    ];

    // Dynamic styles based on theme
    const backgroundColor = theme === "dark" ? "bg-black" : "bg-white";
    const textColor = theme === "dark" ? "text-white" : "text-black";
    const borderColor = theme === "dark" ? "border-gray-700" : "border-gray-300";
    const inputBg = theme === "dark" ? "bg-gray-800" : "bg-gray-200";
    const inputTextColor = theme === "dark" ? "text-white" : "text-black";
    const hoverBg = theme === "dark" ? "hover:bg-gray-800" : "hover:bg-gray-200";
    const secondaryTextColor = theme === "dark" ? "text-gray-500" : "text-gray-600";

    return (
        <div className={`${backgroundColor} ${textColor} min-h-screen`}>
            {/* Search Bar */}
            <div
                className={`p-4 ${borderColor} border-b sticky top-0 ${backgroundColor} z-10`}
            >
                <input
                    type="text"
                    placeholder="Search"
                    className={`w-full p-2 ${inputBg} ${inputTextColor} rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
            </div>

            {/* Navigation */}
            <div className={`flex ${borderColor} border-b`}>
                <button
                    className={`flex-1 text-center p-3 font-semibold ${hoverBg}`}
                >
                    For You
                </button>
                <button
                    className={`flex-1 text-center p-3 ${secondaryTextColor} ${hoverBg}`}
                >
                    Trending
                </button>
                <button
                    className={`flex-1 text-center p-3 ${secondaryTextColor} ${hoverBg}`}
                >
                    News
                </button>
                <button
                    className={`flex-1 text-center p-3 ${secondaryTextColor} ${hoverBg}`}
                >
                    Sports
                </button>
                <button
                    className={`flex-1 text-center p-3 ${secondaryTextColor} ${hoverBg}`}
                >
                    Entertainment
                </button>
            </div>

            {/* Trends List */}
            <div className="mt-4">
                {trends.map((trend, index) => (
                    <div
                        key={index}
                        className={`p-4 ${hoverBg} transition duration-300 cursor-pointer`}
                    >
                        <p className={`text-sm ${secondaryTextColor}`}>
                            {trend.category}
                        </p>
                        <h3 className="text-lg font-semibold">{trend.title}</h3>
                        <p className={`text-sm ${secondaryTextColor}`}>
                            {trend.posts}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Explore;
