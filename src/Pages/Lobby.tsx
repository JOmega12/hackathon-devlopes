import { useAuth } from "../Providers/AuthProvider";
import { useBooking } from "../Providers/BookingProvider";
import { useDog } from "../Providers/DogProvider";
// import { DogTypes } from "../types";
import { useNavigate } from "react-router-dom";

export const Lobby = () => {

  const navigate = useNavigate();

  const { user, isRegister } = useAuth();
  const { dogs, setDog } = useDog();
  const { bookDog, toggleBooking } = useBooking();

  // this tries to get the booking state of the dog and should show that the dog is available
  console.log(bookDog, 'bookDog state');

  // compare the user.id with bookDog  userId and with the
  // dogs(filtered dog) id with bookDog dog Id

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

      const newSetDog = dogs.filter((dog) => dog.id !== dogId)
      setDog(newSetDog);

    }
  };


  // dogs => show all dogs available and unavailable

  return (
    <>
      <div>
        <div className="flex flex-col min-h-screen flex-grow mx-auto p-8 ">
          <h1 className="text-6xl font-extrabold text-center mb-16">Our Dogs</h1>
          <div className="flex justify-center
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
              // if dogs.length > 2 it shows a pop up
              dogs.map((dog, index) => (
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
                    </div>
                    <button onClick={() => onBookingClick(dog.id)}
                    className="border-4"
                    disabled={!dog.available}
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
