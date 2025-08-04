import PostCard from "../components/PostCard";
import { usePosts } from "../hooks/postHooks";
import MainLayout from "../layout/MainLayout";

const PostPage: React.FC = () => {

    const { isFetching, data: posts, error, isError } = usePosts();

    return (
        <MainLayout>
            {isFetching && (<h1>Cargando...</h1>)}
            {isError && (<h1>{`${error?.message}`}</h1>)}
            <div className="flex flex-col md:grid md:grid-cols-2 md:gap-3 lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-4 pt-2 pb-2 gap-4 place-items-center items-stretch">
                {posts?.map(p => (
                    <PostCard key={p.id} post={p} />
                ))
                }
            </div>
        </MainLayout>
    );
}

export default PostPage;