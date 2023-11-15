
import { DogTypes } from "../types";
import {Dispatch, SetStateAction, ReactNode, useState, createContext, useContext} from 'react';


type TDogContext = {
    dog: DogTypes | null;
    setDog: Dispatch<SetStateAction<DogTypes | null>>;
}

type DogProviderProps = {
    children: ReactNode;
}


const DogContext = createContext<TDogContext | undefined>(undefined);

export const DogProvider = ({children}: DogProviderProps) => {

    const [dog, setDog] = useState<DogTypes | null>(null); 

    return(
        <DogContext.Provider
            value={{
                dog, setDog
            }}
        >
            {children}
        </DogContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useDog = () => {
    const context = useContext(DogContext);
    if(!context) {
        throw new Error("Please use `DogAuth` hook in context in DogContext")
    }
    return context;
}