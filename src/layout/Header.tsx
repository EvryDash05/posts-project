import type React from "react";
import { useNavigate } from "react-router";
import { MoonIcon, SunIcon } from "../assets/SvgIcons";
import { useTheme } from "../hooks/useTheme";

const Header: React.FC = () => {

    const navigate = useNavigate();
    const { handleTheme, isDark } = useTheme();

    return (
        <header className="w-full bg-white h-16 items-center transition-colors duration-300">
            <div className="flex flex-row justify-between p-2">
                <div className="flex gap-2">
                    < button className="rounded-[5px] h-10 w-40 bg-amber-500" onClick={() => { navigate('/posts') }}>
                        Publicaciones
                    </button>
                    < button className="rounded-[5px] h-10 w-40 bg-amber-500" onClick={() => { navigate('/createPost') }}>
                        Publicar
                    </button>
                </div>
                <div className="flex flex-row gap-2">
                    <button className="flex justify-center place-items-center bg-white rounded-[13px] w-12 h-12" onClick={handleTheme}>
                        {isDark ? (<SunIcon />) : (<MoonIcon />)}
                    </button>
                </div>
            </div>
        </header >
    )
}
export default Header;
