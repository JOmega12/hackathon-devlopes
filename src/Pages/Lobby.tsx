import { useEffect, useState } from "react";
import { useAuth } from "../Providers/AuthProvider";
import { useBooking } from "../Providers/BookingProvider";
import { useDog } from "../Providers/DogProvider";
import { DogTypes } from "../types";

export const Lobby = () => {
  const { user, isRegister } = useAuth();
  const { dogs } = useDog();
  const { bookDog, toggleBooking } = useBooking();

  // this tries to get the booking state of the dog and checks it
  console.log(bookDog, 'bookDog state');


  const [allActiveDogs, setAllActiveDogs] = useState<DogTypes[] | undefined>(
    undefined
  );

  useEffect(() => {
    if (Array.isArray(dogs)) {
      const activeDog = dogs.filter((dog) => {
        return dog.available;
      });
      setAllActiveDogs(activeDog);
    }

  }, [dogs]);

  // onClick this either creates a booking or does not book the person
  const onBookingClick = (dogId:number | undefined) => {
    if (user && user?.id && dogId !== undefined) {
      toggleBooking({
        dogId: dogId,
        userId: user?.id, 
      });
    }

    // this code will render the dogs to not show as active in the active section
    const updatedActiveDogs = allActiveDogs?.filter((dog) => dog.id !== dogId)

    setAllActiveDogs(updatedActiveDogs)
  };


  return (
    <>
      <div>
        <div className="flex flex-col min-h-screen flex-grow mx-auto p-8 ">
          <h1 className="text-6xl font-extrabold text-center mb-16">Our Dogs</h1>
          <div className="flex flex-row flex-wrap gap-5 px-20 justify-center">
            {allActiveDogs &&
            Array.isArray(allActiveDogs) &&
            user &&
            isRegister ? (
              allActiveDogs.map((dog, index) => (
                
                <div key={index} className="flex flex-col">
                  <div className="">
                    <img
                      src={dog.image}
                      alt="dog image"
                      className="w-[250px] h-[250px]"
                    />
                  </div>
                  <div className="flex flex-col text-center gap-2">
                    <h2 className="text-4xl font-bold">{dog.name}</h2>
                    <h3 className="text-2xl font-semibold">{dog.breed}</h3>
                    <div>
                      <p>Is it available?</p>
                      <p>{dog.timeAvailable}</p>
                      {dog.available ? (
                        <p>Dog Is Available!</p>
                      ) : (
                        <p>Dog Is Not Available</p>
                      )}
                    </div>
                    <button onClick={() => onBookingClick(dog.id)}>Book now!</button>
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
    </>
  );
};
