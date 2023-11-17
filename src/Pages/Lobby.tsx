import { useEffect, useState } from "react";
import { useAuth } from "../Providers/AuthProvider";
import { useBooking } from "../Providers/BookingProvider";
import { useDog } from "../Providers/DogProvider";
import { DogTypes } from "../types";
import { toggleBookingAPI } from "../api/BookingsAPI";

export const Lobby = () => {
    
    const {user, isRegister} = useAuth();
    const {dogs} = useDog();
    const {bookDog, toggleBooking} = useBooking();
    // const {dogId} = useParams();
    // console.log(dogId, 'dogId')
// console.log(dogs,"Calling all dogs")
    const [allActiveDogs, setAllActiveDogs] = useState<DogTypes[] | undefined>(undefined)

    useEffect(() => {
      if(Array.isArray(dogs)) {
        const activeDog = dogs.filter((dog) => {
          return dog.available;
        })
        setAllActiveDogs(activeDog)
        console.log(activeDog);
      }
    }, [dogs])
    // console.log(allActiveDogs, 'allActiveDogs');

const onFavoriteClick = () => {
if (allActiveDogs) {
  toggleBookingAPI({
dogId:allActiveDogs.id,
userId: user?.id
  })
}
}

    return (
      <>
        
        <div>
              <div className="flex flex-col min-h-screen flex-grow mx-auto p-8 ">
                  <h1>dog test</h1>
                  <div
                  className="flex flex-row flex-wrap justify-center items-center gap-5">  

                  {allActiveDogs && Array.isArray(allActiveDogs) && user && isRegister ? (
                    allActiveDogs.map((dog, index) => (
                      <div key={index}>
                                      <div className="w-1/2 h-full">
                                        <img src={dog.image} alt="dog image" 
                                          className="w-1/2 h-1/3"
                                        />
                                      </div>
                                      <h1>{dog.name}</h1>
                                      <h3>{dog.breed}</h3>
                                      <div>
                                          <p>Is it available?</p>
                                          <p>{dog.available}</p>
                                          <p>Avialble for 8-2pm</p>
                                      </div>
                                      <button onClick={()=> onFavoriteClick()}>Book now!</button>
                                  </div>
                    ))
                  ) : (
                    <div>No dogs available. Please Login</div>
                  )}
                      {/* { dogs && Array.isArray(dogs)  ? (
                          dogs.map((dog, index) => (
                            
                                  <div key={index}>
                                      <div className="w-1/2 h-full">
                                        <img src={dog.image} alt="dog image" 
                                          className="w-1/2 h-1/3"
                                        />
                                      </div>
                                      <h1>{dog.name}</h1>
                                      <h3>{dog.breed}</h3>
                                      <div>
                                          <p>Is it available?</p>
                                          <p>{dog.available}</p>
                                          <p>Avialble for 8-2pm</p>
                                      </div>
                                      <button>Book now!</button>
                                  </div>
                          )) 
                          ) : (
                          <div>theres none</div>
                      )} */}
                  </div>
              </div>
              
              <div>
                  
              </div>
          </div>
      </>
    )
}
