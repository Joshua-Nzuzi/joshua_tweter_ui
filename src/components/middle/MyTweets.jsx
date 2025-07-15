/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart, FaRetweet, FaComment, FaShare } from "react-icons/fa";
import UserImage from "../../assets/user.png";  // Static user image
import { useNavigate } from "react-router-dom";
import CommentBox from "./CommentBox";
import Comment from "./Comment";

function MyTweets({ tweets, searchQuery, theme }) {  // Accept the theme prop
    const navigate = useNavigate();
    const profile = () => navigate("/profile");

    const [apiPosts, setApiPosts] = useState([]);
    const [userImage, setUserImage] = useState([]);
    const [reposts, setReposts] = useState([]);
    const [likes, setLikes] = useState({});
    // comment
    const [comments, setComments] = useState({});
    const [activeCommentBox, setActiveCommentBox] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => setApiPosts(data.slice(0, 50)))
            .catch((err) => console.error("Error fetching posts:", err));
    }, []);

    useEffect(() => {
        if (apiPosts.length > 0) {
            fetch(`https://randomuser.me/api/?results=${apiPosts.length}`)
                .then((res) => res.json())
                .then((data) => setUserImage(data.results))
                .catch((err) => console.error("Error fetching images:", err));
        }
    }, [apiPosts]);

    const handleLikeToggle = (id) => {
        setLikes((prevLikes) => ({
            ...prevLikes,
            [id]: !prevLikes[id],
        }));
    };

    const handleRepost = (post) => {
        setReposts((prev) => [{ ...post, isRepost: true }, ...prev]);
    };
    const handleAddComment = (postId, newComment) => {
        setComments((prevComments) => ({
            ...prevComments,
            [postId]: [...(prevComments[postId] || []), newComment],  // Append the new comment
        }));
    };

    const renderPost = (post, index, isRepost = false, isApiPost = false) => {
        const user = isApiPost
            ? userImage[index % userImage.length]
            : { name: { first: "Aasfah Selene" }, login: { username: "aasfahselene" }, picture: { thumbnail: UserImage } };

        const liked = likes[post.id] || false;
        const likeCount = isApiPost ? post.id : 1;

        const backgroundColor = theme === "dark" ? "#15202b" : "#f0f0f0";
        const textColor = theme === "dark" ? "text-white" : "text-black";
        const borderColor = theme === "dark" ? "border-gray-700" : "border-gray-300";

        return (
            <div key={post.id} className={`p-8 shadow-md mx-auto border-y-[1.5px] ${borderColor} w-full max-w-[600px] md:max-w-[750px]`} style={{ backgroundColor }}>
                {isRepost && <div className="text-[#8899a6] text-sm mb-2">Reposted</div>}

                {/* User Information */}
                <div className="flex items-start mb-3">
                    <img src={user.picture.thumbnail || UserImage} alt="User" className="w-12 h-12 rounded-full mr-3" />
                    <div>
                        <div className={`flex items-center text-sm md:text-base ${textColor}`}>
                            <span className="font-bold">{user.name.first}</span>
                            <span className="text-[#8899a6] ml-2 cursor-pointer" onClick={isApiPost !== true ? profile : undefined}>
                                @{user.login.username} · {new Date().toLocaleDateString() || "Joined N/A"}
                            </span>
                        </div>
                        <p className="text-[#8899a6] text-xs sm:text-sm">{isApiPost ? post.title : "My Tweet"}</p>
                    </div>
                </div>

                {/* Post Content */}
                <p className={`mt-3 text-sm md:text-base ${textColor}`}>{post.body || post.message}</p>

                {/* Action Buttons */}
                <div className="flex justify-between text-[#8899a6] mt-4">
                    <button className="flex items-center space-x-1 hover:text-blue-400" onClick={() => setActiveCommentBox(post.id)}>
                        <FaComment />
                        <span>0</span>
                    </button>
                    <button onClick={() => handleRepost(post)} className="flex items-center space-x-1 hover:text-green-400">
                        <FaRetweet />
                        <span>0</span>
                    </button>
                    <button onClick={() => handleLikeToggle(post.id)} className={`flex items-center space-x-1 ${liked ? "text-red-500" : "hover:text-red-500"}`}>
                        {liked ? <FaHeart /> : <FaRegHeart />}
                        <span>{likeCount}k</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-blue-400">
                        <FaShare />
                    </button>
                </div>

                {/* Comment Box */}
                {activeCommentBox === post.id && (
                    <CommentBox theme={theme} postId={post.id} onAddComment={handleAddComment} />
                )}

                {/* Render Comments */}
                {comments[post.id]?.map((comment, idx) => (
                    <Comment key={`${post.id}-comment-${idx}`} comment={comment} />
                ))}
            </div>
        );
    };


    if (!apiPosts.length || !userImage.length) {
        return <p className="text-center text-white">Loading...</p>;
    }

    return (
        <div className="w-full">
            {reposts.map((repost, index) => renderPost(repost, index, true))}
            {tweets.map((twt, index) => renderPost({ ...twt, id: `user-${index}` }, index, false, false))}
            {apiPosts
                .filter((post) => post.body.toLowerCase().includes(searchQuery.toLowerCase()))
                .map((post, index) => renderPost(post, index, false, true))}
        </div>
    );
}

export default MyTweets;
