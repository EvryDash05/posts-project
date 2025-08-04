import { createContext } from "react";

export interface AuthContextType {
    token: string | null,
    userProfile: User | null,
    handleLogin: (email: string, password: string) => Promise<void>,
    handleLogout: () => void;
    handleRefreshToken: () => void;
    isAuthenticated: boolean;
}

export interface User {
    cod: string,
    name: string,
    last_name: string,
    avatar: string,
    email: string
}

export const AuthContext = createContext<AuthContextType>({
    token: null,
    userProfile: null,
    handleLogin: async () => { },
    handleLogout: () => { },
    handleRefreshToken: () => { },
    isAuthenticated: false,
});