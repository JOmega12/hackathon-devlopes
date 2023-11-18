import { getAllDogs } from "../api/getAllDogs";
import { DogTypes } from "../types";
import {
  Dispatch,
  SetStateAction,
  ReactNode,
  useState,
  createContext,
  useContext,
  useEffect,
} from "react";

type TDogContext = {
  dogs: DogTypes | null;
  setDog: Dispatch<SetStateAction<DogTypes | null>>;
};

type DogProviderProps = {
  children: ReactNode;
};

const DogContext = createContext<TDogContext | undefined>(undefined);

export const DogProvider = ({ children }: DogProviderProps) => {
  const [dogs, setDog] = useState<DogTypes | null>(null);

  const refetch = () => {
    getAllDogs().then(setDog);
  };

  useEffect(() => {
    refetch();
  }, []);


  return (
    <DogContext.Provider
      value={{
        dogs,
        setDog,
      }}
    >
      {children}
    </DogContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useDog = () => {
  const context = useContext(DogContext);
  if (!context) {
    throw new Error("Please use `DogAuth` hook in context in DogContext");
  }
  return context;
};