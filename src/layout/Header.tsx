import type React from "react";
import { useNavigate } from "react-router";

const Header: React.FC = () => {

    const navigate = useNavigate();

    return (
        <header className="w-full bg-sky-200 h-16 items-center">
            <div className="flex flex-row gap-10 p-2">
                < button className="rounded-[5px] h-10 w-40 bg-amber-500" onClick={() => { navigate('/posts') }}>
                    Publicaciones
                </button>
                < button className="rounded-[5px] h-10 w-40 bg-amber-500" onClick={() => { navigate('/createPost') }}>
                    Publicar
                </button>
            </div>
        </header >
    )
}
export default Header;
