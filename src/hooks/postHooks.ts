import { useMutation, useQuery, type UseQueryResult } from "@tanstack/react-query";
import { createPost, findPostById, getPosts, type Post } from "../services/PostService";
import { useNavigate } from "react-router";

export const usePostById = (postId: string): UseQueryResult<Post, Error> => {
    return useQuery({
        queryKey: ['postById'],
        queryFn: () => findPostById(postId),
        retry: 2
    });
}

export const usePosts = (): UseQueryResult<Post[], Error> => {
    return useQuery({
        queryKey: ["posts"],
        queryFn: getPosts,
        retry: 2
    });
}

export const useCreatePost = () => {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: createPost,
        onSuccess: (postId: string) => {
            if (postId) {
                navigate(`/posts/${postId}`);
            }
        },
    });
}