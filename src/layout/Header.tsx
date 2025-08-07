import type React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { HamburgerMenuIcon, MoonIcon, SunIcon } from "../assets/SvgIcons";
import { useTheme } from "../hooks/useTheme";

const Header: React.FC = () => {

    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { handleTheme, isDark } = useTheme();

    return (
        <nav className="w-fullh-auto items-center transition-colors duration-300 relative z-50 bg-blue-500">
            <button
                className="md:hidden w-10 h-10 bg-slate-400 place-items-center justify-center"
                onClick={() => setIsOpen(!isOpen)}
            >
                <HamburgerMenuIcon />
            </button>

            <div
                className={`absolute left-0 w-full h-max bg-blue-500 transition-all duration-300 ${isOpen ? 'block' : 'hidden'
                    } md:static md:block md:flex-row gap-4 p-2 justify-between z-50`}
            >
                <div className="flex flex-col md:flex-row text-center place-items-center gap-4 bg-blue-500">
                    <button className="bg-orange-300 p-1 rounded-[10px]" onClick={() => navigate('/posts')}>Publicaciones</button>
                    <button className="bg-orange-300 p-1 rounded-[10px]" onClick={() => navigate('/createPost')}>Publicar</button>
                    <div className="flex items-center">
                        <button
                            className="bg-slate-400 dark:bg-sky-400 ring-2 ring-black rounded-[10px] h-10 w-10 justify-center place-items-center"
                            onClick={() => handleTheme()}
                        >
                            {isDark ? <SunIcon /> : <MoonIcon />}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );

}
export default Header;
