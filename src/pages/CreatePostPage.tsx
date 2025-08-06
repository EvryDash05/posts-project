import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import InputPostForm from "../components/InputPostForm";
import SpinnerLoader from "../components/SpinnerLoader";
import { useCreatePost } from "../hooks/postHooks";
import MainLayout from "../layout/MainLayout";
import { postFormSchema, type Inputs } from "../validations/postValidationForm";


const CreatePostPage: React.FC = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
        resolver: zodResolver(postFormSchema)
    });

    const { mutate, error, isError, isPending } = useCreatePost();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
        mutate(data);
    };

    return (
        <MainLayout>
            <div className="min-h-screen flex flex-col justify-center place-items-center px-4">
                {isPending ? (
                    <div>
                        <h1>Creando publicación</h1>
                        <SpinnerLoader />
                    </div>
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col w-80 h-auto p-2 gap-2 md:w-[40rem] md:h-[34rem] bg-white border-4 rounded-[15px] ">
                            <InputPostForm register={register('title')} label="Título" error={errors.title} />
                            <InputPostForm register={register('author')} label="Autor" error={errors.author} />
                            <div className="flex flex-col place-items-center w-full">
                                <div className="flex flex-col gap-2 text-center w-full">
                                    <label htmlFor="content">Contenido</label>
                                    <textarea id="content" {...register("content")} className="w-full h-60 border-black border-[1px]" />
                                </div>
                                {errors.content?.message && (
                                    <div>
                                        <span className="font-semibold text-red-400">{errors.content.message}</span>
                                    </div>
                                )
                                }
                            </div>
                            <button type="submit" className="bg-sky-200 w-">
                                Publicar
                            </button>
                        </div>
                    </form>
                )
                }
                {isError && (<h1>{error.message}</h1>)}
            </div>
        </MainLayout>
    )
}

export default CreatePostPage;