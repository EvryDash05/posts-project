import PostCard from "../components/PostCard";
import SpinnerLoader from "../components/SpinnerLoader";
import { usePosts } from "../hooks/postHooks";
import MainLayout from "../layout/MainLayout";

const PostPage: React.FC = () => {

    const { isFetching, data: posts, error, isError } = usePosts();

    return (
        <MainLayout>
            <div className="flex justify-center place-items-center">
                {isFetching && (<SpinnerLoader />)}
                {isError && (<h1>{`${error?.message}`}</h1>)}
            </div>
            <div className="grid grid-cols-1 place-items-center md:grid-cols-2 md:gap-3 lg:grid-cols-3 xl:grid-cols-4 pt-2 pb-2 gap-4 items-stretch">
                {posts?.map(p => (
                    <PostCard key={p.id} post={p} />
                ))
                }
            </div>
        </MainLayout>
    );
}

export default PostPage;