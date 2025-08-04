import type React from "react";
import type { Post } from "../services/PostService";
import default_profile_picture from '../assets/default_profile_picture.jpg';
import { useNavigate } from "react-router";
import { useState } from "react";

interface Props {
    post: Post
}

export const PostCard: React.FC<Props> = ({ post }) => {

    const navigate = useNavigate();
    const [clicks, setClicks] = useState<number>(1);

    const sentToPost = () => {
        setClicks(prev => {
            const next = prev + 1
            if (clicks === 2) {
                navigate(`/posts/${post.id}`);
            }
            return next;
        });
    }

    return (
        <div className="w-74 h-auto p-2 sm:w-90 md:w-80 flex flex-col border-2 border-black bg-white rounded-[10px]" onClick={sentToPost}>
            <div className="flex flex-row gap-5">
                <div className="p-2">
                    <img src={default_profile_picture} alt={default_profile_picture} className="h-20 w-20 rounded-full" />
                </div>
                <div className="flex flex-col justify-center">
                    <span className="font-bold">{post.author}</span>
                    <span>{post.createdAt.split('T')[0]}</span>
                </div>
            </div>
            <div>
                <h4 className="font-semibold">{post.title}</h4>
            </div>
            <div className="flex flex-col justify-center">
                <p className="text-justify text-[13px]">{post.content}</p>
            </div>
        </div>
    )
}

export default PostCard;