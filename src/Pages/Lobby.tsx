import { useEffect } from "react";
import { useAuth } from "../Providers/AuthProvider";
import { useBooking } from "../Providers/BookingProvider";
import { useDog } from "../Providers/DogProvider";


export const Lobby = () => {
    
    const {user} = useAuth();
    const {dogs} = useDog();
    const {bookDog, toggleBooking} = useBooking();
    // const {dogId} = useParams();
    // console.log(dogId, 'dogId')
  
   
    useEffect(() => {
      if(dogs && bookDog && Array.isArray(dogs) && Array.isArray(bookDog)) {
        const foundDogitem = dogs.find((dog) =>{
          dog.id ===
        })
      }
    }, [])
  
    return (
      <>
        
        <div>
              <div className="flex flex-col min-h-screen flex-grow mx-auto p-8 ">
                  <h1>dog test</h1>
                  <div
                  className="flex flex-row flex-wrap justify-center items-center gap-5">    
                      { dogs && Array.isArray(dogs)  ? (
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
                      )}
                  </div>
              </div>
              
              <div>
                  
              </div>
          </div>
      </>
    )
}
