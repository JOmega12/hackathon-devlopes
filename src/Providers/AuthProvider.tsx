import { createContext, Dispatch, SetStateAction, useState, ReactNode, useContext } from "react";
import { UserInformation } from "../types";


type TAuthContext = {
    user: UserInformation | null;
    setUser: Dispatch<SetStateAction<UserInformation | null>>;
}

type AuthProviderProps = {
    children: ReactNode;
}


const AuthContext = createContext<TAuthContext | undefined>(undefined);


export const AuthProvider = ({children}: AuthProviderProps) => {

    const [user, setUser] = useState<UserInformation | null>(null);

    return(
        <AuthContext.Provider
            value={{
                user,
                setUser
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}


// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context) {
        throw new Error('Please use `useAuth` hook in context in AuthContext')
    }
    return context;
}