import { useQuery } from "@tanstack/react-query";
import { findPostById, getPosts, type Post } from "../services/PostService";

export const usePostById = (postId: string): {
    isFetching: boolean,
    data: Post | undefined,
    error: Error | null,
    isError: boolean
} => {

    const { isFetching, data, error, isError } = useQuery({
        queryKey: ['postById'],
        queryFn: () => findPostById(postId),
        retry: 2
    });

    return { isFetching, data, error, isError };
}

export const usePosts = (): {
    isFetching: boolean,
    data: Post[] | undefined,
    error: Error | null,
    isError: boolean
} => {

    const { isFetching, data, isError, error } = useQuery({
        queryKey: ["posts"],
        queryFn: getPosts,
        retry: 2
    });

    return { isFetching, data, error, isError };
}
