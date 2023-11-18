import { useEffect, useState } from "react";
import { useBooking } from "../Providers/BookingProvider";
import { useDog } from "../Providers/DogProvider";
import { DogTypes } from "../types";
import { useAuth } from "../Providers/AuthProvider";



export const BookedDogs = () => {

    const {bookDog, toggleBooking} = useBooking();
    const {dogs} = useDog();
    const {user, isRegister} = useAuth();

    // const bookDogIds = bookDog?.map((item) => item.dogId) || [];
    // console.log(bookDogIds, 'book-dog-ids');


    const [bookDogsData, setBookDogsData] = useState<(DogTypes | undefined)[]>([])



    useEffect(() => {        
        if(Array.isArray(bookDog)) {
            // when user is loggedIn, this shows what the user has booked
            const userBookings = bookDog.filter((selfUser: {userId: number| undefined}) => {
                return selfUser.userId === user?.id
            })
            console.log(userBookings, 'userBookings')

            if(Array.isArray(dogs)) {
                // this gets the information of the specific dog
                const matchedData = userBookings.map((bookDogId: {dogId: number}) => {
                    return dogs.find((specificDogId) => {
                        return specificDogId.id === bookDogId.dogId
                    })
                });
                console.log(matchedData, 'matchedData')
                setBookDogsData(matchedData);
            }
        }

    }, [bookDog, dogs, user?.id])

      // onClick this either creates a booking or does not book the person
  const onBookingClick = (dogId:number | undefined) => {
    if (user && user?.id && dogId !== undefined) {
      toggleBooking({
        dogId: dogId,
        userId: user?.id, 
      });
    }

    // this code will render the dogs to not show as active in the active section
    const updatedActiveDogs = (bookDogsData || [])?.filter((dog) => dog?.id !== dogId)
    
    // .map((dog) => {
    //     if(dog?.id === dogId) {
    //       return{
    //         ...dog,
    //         available: !dog?.available
    //       };
    //     }
    //     return dog
    //   })
// .filter((dog) => dog.id !== dogId)
    setBookDogsData(updatedActiveDogs)
  };


    return(
              <div>
        <div className="flex flex-col min-h-screen flex-grow mx-auto p-8 ">
          <h1 className="text-6xl font-extrabold text-center mb-16">Our Dogs</h1>
          <div className="flex flex-row flex-wrap gap-5 px-20 justify-center">
            {bookDogsData &&
            Array.isArray(bookDogsData) &&
            user &&
            isRegister ? (
              bookDogsData.map((dog, index) => (
                
                <div key={index} className="flex flex-col">
                  <div className="">
                    <img
                      src={dog?.image}
                      alt="dog image"
                      className="w-[250px] h-[250px]"
                    />
                  </div>
                  <div className="flex flex-col text-center gap-2">
                    <h2 className="text-4xl font-bold">{dog?.name}</h2>
                    <h3 className="text-2xl font-semibold">{dog?.breed}</h3>
                    <div>
                      <p>Is it available?</p>
                      <p>{dog?.timeAvailable}</p>
                      {dog?.available ? (
                        <p>Dog Is Available!</p>
                      ) : (
                        <p>Dog Is Not Available</p>
                      )}
                    </div>
                    <button onClick={() => onBookingClick(dog?.id)}>Book now!</button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-5xl font-semibold">No dogs available. Please Login</div>
            )}

          </div>
        </div>

        <div></div>
      </div>
        //     const updatedActiveDogs = allActiveDogs?.filter((dog) => dog.id !== dogId)
    )
}