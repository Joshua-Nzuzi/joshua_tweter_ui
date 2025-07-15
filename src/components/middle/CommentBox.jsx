/* eslint-disable react/prop-types */
import { useState } from "react";

function CommentBox({ theme, postId, onAddComment }) {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            onAddComment(postId, inputValue); // Add comment
            setInputValue(""); // Clear input after submission
        }
    };

    return (
        <div className="w-full px-2 sm:px-4 mt-2">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-center sm:items-stretch gap-3"
            >
                {/* Input Field */}
                <input
                    type="text"
                    className={`flex-1 w-full sm:w-[80%] ${theme === "dark"
                        ? "bg-[#192734] text-white"
                        : "bg-gray-200 text-black"
                        } px-4 py-2 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400`}
                    placeholder="Type here..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />

                {/* Button */}
                <button
                    type="submit"
                    className={`w-full sm:w-[20%] ${theme === "dark"
                        ? "text-white bg-black"
                        : "text-black bg-gray-300"
                        } px-4 py-2 rounded-lg text-sm sm:text-base hover:bg-[#1da1f2] hover:text-white transition duration-300`}
                >
                    Comment
                </button>
            </form>
        </div>
    );
}

export default CommentBox;
