import { useEffect, useState } from "react";
import { useBooking } from "../Providers/BookingProvider";
import { useDog } from "../Providers/DogProvider";
import { DogTypes } from "../types";



export const UnavailableDogs = () => {

    // const {bookDog} = useBooking();
    // const bookDogs = bookingContext.bookDog;
    // console.log(bookDog);
    const {dogs} = useDog();

    // console.log(dogs, 'dogs')

    // const bookDogIds = bookDog?.map((item) => item.dogId) || [];

    // const unavailableDogs = dogs.filter((dog) => bookDogIds.includes(dog.id))

    const [bookDogsData, setBookDogsData] = useState<(DogTypes | undefined)[]>([])


    useEffect(() => {
        
    }, [])
    return(
        <div>This is UnavaiableDogs Component</div>
        
    )
}