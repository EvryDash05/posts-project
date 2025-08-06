import type React from "react";
import type { ReactNode } from "react";
import Header from "./Header";

interface Props {
    children: ReactNode
}

const MainLayout: React.FC<Props> = ({ children }) => {
    return (
        <div className="min-h-screen bg-[#bdbfc2]">
            <Header />
            <div className="flex flex-col">
                {children}
            </div>
        </div>
    )
}

export default MainLayout;