import { useParams } from "react-router";
import { usePostById } from "../hooks/postHooks";
import MainLayout from "../layout/MainLayout";
import PostCard from "../components/PostCard";
import PostCarrusel from "../components/PostCarrusel";

const PostByIdPage: React.FC = () => {

    const { postId } = useParams();
    const { isFetching, data: post, error, isError } = usePostById(String(postId));

    return (
        <MainLayout>
            <div className="min-h-screen flex flex-col place-items-center justify-center">
                <div >
                    {isFetching && (<h1>Cargando...</h1>)}
                    {isError && (<h1>{error?.message}</h1>)}
                    {post && (<PostCard post={post} />)}
                </div>
                <div className="flex flex-row gap-5">
                    <PostCarrusel />
                </div>
            </div>
        </MainLayout>
    );
}

export default PostByIdPage;