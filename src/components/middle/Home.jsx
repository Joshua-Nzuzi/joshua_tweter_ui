/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import TweetInput from './TweetInput';
import MyTweets from './MyTweets';

function Home({ searchQuery, tweet, setTweet, theme }) {
    // Month names for date formatting
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const date = new Date();
    const newDate = date.getDate() + " " + months[date.getMonth() - 1];

    // Function to add a new tweet
    const newTweet = (twt) => {
        setTweet([...tweet, { message: twt, date: newDate }]);
    };

    // Theme-based styles
    const containerStyle = theme === "dark" ? "bg-[#15202b] text-white" : "bg-gray-100 text-black";
    const headerStyle = theme === "dark" ? "border-gray-700" : "border-gray-300";
    const tweetSectionBorder = theme === "dark" ? "border-gray-700" : "border-gray-300";

    return (
        <div className={`flex flex-col items-center min-h-[100vh] ${containerStyle}`}>
            {/* Header */}
            <div className={`font-bold text-xl p-4 w-full border-b-[1px] ${headerStyle}`}>
                Home
            </div>

            {/* Content */}
            <div className="w-full flex-grow">
                {/* Input Section */}
                <div className={`border-b-[1px] ${tweetSectionBorder}`}>
                    <TweetInput addTweet={newTweet} theme={theme} />
                </div>

                {/* Tweets Section */}
                <div className="mt-2">
                    <MyTweets tweets={tweet} searchQuery={searchQuery} theme={theme} />
                </div>
            </div>
        </div>
    );
}

export default Home;
