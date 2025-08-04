import type { ReactNode } from "react";
import Header from "./Header";
import type React from "react";

interface Props {
    children: ReactNode
}

const MainLayout: React.FC<Props> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-200">
            <Header />
            <div className="flex flex-col">
                {children}
            </div>
        </div>
    )
}

export default MainLayout;