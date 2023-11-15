import { createContext, Dispatch, SetStateAction, useState, ReactNode } from "react";
import { UserInformation } from "../types";


type TAuthContext = {
    user: UserInformation | null;
    setUser: Dispatch<SetStateAction<UserInformation | null>>;
}

type AuthProviderProps = {
    children: ReactNode;
}


const AuthContext = createContext<TAuthContext | undefined>(undefined);


export const AuthProvider = () => {

    const [user, setUser] = useState<UserInformation | null>(null);

    return(
        <AuthContext.Provider>

        </AuthContext.Provider>
    )
}