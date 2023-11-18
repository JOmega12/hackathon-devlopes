import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react";
import { DogTypes } from "../types"
// import { getAllDogs } from "../api/getAllDogs";
import { getBookings, toggleBookingAPI } from "../api/BookingsAPI";




type TBookingContext = {
    toggleBooking: ({userId, dogId}: {userId:number, dogId:number}) => void
    bookDog: DogTypes | null;
    setBookDog: Dispatch<SetStateAction<DogTypes | null>>
    // isBooked: boolean;
    // setIsBooked: Dispatch<SetStateAction<boolean>>
}

type BookContextProps = {
    children: ReactNode
}

const BookingContext = createContext<TBookingContext | undefined>(undefined);


export const BookingProvider = ({children}: BookContextProps) => {
    const [bookDog, setBookDog]= useState<DogTypes | null>(null);
    
    const refetch = () => {
        getBookings().then(setBookDog);
    }

    useEffect(() => {
        refetch();
    }, []);


    const toggleBooking = async({userId, dogId}: {userId:number, dogId:number}) => {
         await toggleBookingAPI({ userId, dogId});
         return refetch();
    }
    return(
        <BookingContext.Provider value={{
            bookDog, setBookDog, toggleBooking, 
        }}>
            {children}
        </BookingContext.Provider>
    )
}


// eslint-disable-next-line react-refresh/only-export-components
export const useBooking = () => {
    const context = useContext(BookingContext);
    if(!context) {
        throw new Error('Please use the bookDogs Context');
    }
    return context;
}