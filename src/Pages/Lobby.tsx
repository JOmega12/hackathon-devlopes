import { useEffect, useState } from "react";
import { useAuth } from "../Providers/AuthProvider";
import { useBooking } from "../Providers/BookingProvider";
import { useDog } from "../Providers/DogProvider";
import { useNavigate } from "react-router-dom";
import { DogTypes } from "../types";

export const Lobby = () => {

  const navigate = useNavigate();

  const { user, isRegister } = useAuth();
  const { dogs } = useDog();
  const { bookDog, toggleBooking } = useBooking();

  console.log(bookDog, 'bookDog')

  const [activeDogs, setActiveDogs] = useState<DogTypes[]>([]);

  useEffect(() => {
    if (Array.isArray(bookDog) && Array.isArray(dogs)) {
      // when user is loggedIn, this shows what the user has booked
      const userBookings = bookDog
      .filter( (selfUser: { userId: number | undefined; dogId: number }) => {
          return selfUser.userId === user?.id;
        })
      .map((booking) => booking.dogId);

      const availableDogs= dogs.filter((dog) => !userBookings.includes(dog.id));
      setActiveDogs(availableDogs);
    

    }
  }, [bookDog, dogs, user?.id])

  // onClick this either creates a booking or does not book the person
  const onBookingClick = (dogId: number | undefined) => {
    if (user && user?.id && Array.isArray(dogs) &&dogId !== undefined) {
      const selectedDog = dogs.find((dog) => dog.id === dogId);
      
      if (selectedDog) {
        toggleBooking({
          dogId: dogId,
          userId: user?.id,
        });
      }
    }

  };

  return (
    <>
      <div>
        <div className="flex flex-col min-h-screen flex-grow mx-auto p-8 ">
          <h1 className="text-6xl font-extrabold text-center mb-16">Our Dogs</h1>
          <div className="flex justify-center mb-10
          ">
            <button onClick={() => navigate('/booked-dogs')}
            className=" bg-pink-btn p-5 text-2xl text-off-white"
            >Booked Dogs</button>
          </div>
          <div className="flex flex-row flex-wrap gap-5 px-20 justify-center">
            {dogs &&
            Array.isArray(dogs) &&
            user &&
            isRegister ? (
              activeDogs.map((dog, index) => (
                <div key={index} className="flex flex-col">
                  <div className="">
                    <img
                      src={dog.image}
                      alt="dog image"
                      className="w-[250px] h-[250px]"
                    />
                  </div>
                  <div className="flex flex-col text-center gap-2 bg-orange-">
                    <h2 className="text-4xl font-bold">{dog.name}</h2>
                    <h3 className="text-2xl font-semibold">{dog.breed}</h3>
                    <div>
                      <p>Is it available?</p>
                      <p>{dog.timeAvailable}</p>
                    </div>
                    <button onClick={() => onBookingClick(dog.id)}
                    className={`border-4 ${dog.available ? 'bg-orange-bg' : ''}`}
                    >Book now!</button>
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
