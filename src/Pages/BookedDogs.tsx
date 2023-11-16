import { useEffect, useState } from "react";
import { useBooking } from "../Providers/BookingProvider";
import { useDog } from "../Providers/DogProvider";
import { DogTypes } from "../types";
import { useAuth } from "../Providers/AuthProvider";



export const BookedDogs = () => {

    const {bookDog} = useBooking();
    // const bookDogs = bookingContext.bookDog;
    const {dogs} = useDog();
    const {user} = useAuth();
    // console.log(dogs, 'dogs')

    // const bookDogIds = bookDog?.map((item) => item.dogId) || [];
    // console.log(bookDogIds, 'book-dog-ids');


    const [bookDogsData, setBookDogsData] = useState<(DogTypes | undefined)[]>([])


    useEffect(() => {
        
        if(Array.isArray(bookDog)) {
            // when user is loggedIn, this shows what the user has booked
            const userBookings = bookDog.filter((selfUser: {userId: number| undefined}) => {
                return selfUser.userId === user?.id
            })

            if(Array.isArray(dogs)) {
                // this gets the information of the specific booking
                const matchedData = userBookings.map((bookDogId: {dogId: number}) => {
                    return dogs.find((specificDogId) => {
                        return specificDogId.id === bookDogId.dogId
                    })
                });
                setBookDogsData(matchedData);
            }
        }

    }, [bookDog, dogs, user?.id])

    console.log(bookDogsData, 'what user has booked for dog')
    return(
        <div>This is UnavaiableDogs Component</div>
        
    )
}