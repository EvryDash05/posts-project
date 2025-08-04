import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface Props {
    label: string,
    register: UseFormRegisterReturn,
    error: FieldError | undefined
}

const InputPostForm: React.FC<Props> = ({ label, register, error }) => {
    return (
        <div className="flex flex-col w-full place-items-center">
            <div className="flex flex-col gap-2 text-center w-full">
                <label htmlFor={register.name}>{label}</label>
                <input
                    type="text"
                    id={register.name}
                    {...register}
                    className="w-full border-black border-[1px]"
                />
            </div>
            {error?.message && (
                <div className="flex text-center">
                    <span className="font-semibold text-red-400">{error.message}</span>
                </div>
            )
            }
        </div>
    )
}

export default InputPostForm;