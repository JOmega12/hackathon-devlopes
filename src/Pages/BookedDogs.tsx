import { useEffect, useState } from "react";
import { useBooking } from "../Providers/BookingProvider";
import { useDog } from "../Providers/DogProvider";
import { DogTypes } from "../types";
import { useAuth } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

export const BookedDogs = () => {
  const navigate = useNavigate();

  const { bookDog, toggleBooking } = useBooking();
  const { dogs } = useDog();
  const { user, isRegister } = useAuth();

  const [bookDogsData, setBookDogsData] = useState<(DogTypes | undefined)[]>([]);

  useEffect(() => {
    if (Array.isArray(bookDog)) {
      // when user is loggedIn, this shows what the user has booked
      const userBookings = bookDog.filter((selfUser: { userId: number | undefined }) => {
        return selfUser.userId === user?.id;
      });
      // this gets the information of the specific dog
      if (Array.isArray(dogs)) {
        const matchedData = userBookings.map((bookDogId: { dogId: number }) => {
          return dogs.find((specificDogId) => {
            return specificDogId.id === bookDogId.dogId;
          });
        });
        setBookDogsData(matchedData);
      }
    }
  }, [bookDog, dogs, user, user?.id]);

  // onClick this either creates a booking or does not book the person
  const onBookingClick = (dogId: number | undefined) => {
    if (user && user?.id && Array.isArray(bookDog) && dogId !== undefined) {
      // Check if the dog is currently booked
      const isBooked = bookDog.some(
        (booking) => booking.dogId === dogId && booking.userId === user?.id
      );
      console.log(isBooked, "isbooked");
      if (isBooked) {
        toggleBooking({
          dogId: dogId,
          userId: user?.id,
        });
      }
    }
  };

  return (
    <div>
      <div className="flex flex-col min-h-screen flex-grow mx-auto p-8 bg-off-white">
        <h1 className="text-6xl font-extrabold text-center mb-16">Dogs You Booked</h1>
        <div className="flex justify-center mb-10">
          <button
            onClick={() => navigate("/lobby")}
            className=" bg-pink-btn p-5 text-2xl text-off-white"
          >
            Lobby
          </button>
        </div>
        <div className="flex flex-row flex-wrap gap-5 px-20 justify-center">
          {bookDogsData && Array.isArray(bookDogsData) && user && isRegister ? (
            bookDogsData.map((dog, index) => (
              <div key={index} className="flex flex-col">
                {dog && (
                  <>
                    <div className="">
                      <img src={dog.image} alt="dog image" className="w-[250px] h-[250px]" />
                    </div>
                    <div className="flex flex-col text-center gap-2">
                      <h2 className="text-4xl font-bold">{dog.name}</h2>
                      <h3 className="text-2xl font-semibold">{dog.breed}</h3>
                      <div>
                        <p>When am I available?</p>
                        <p>{dog.timeAvailable}</p>
                      </div>
                      <button
                        onClick={() => onBookingClick(dog.id)}
                        className={`border-4 ${dog.available ? "" : "bg-orange-bg"}`}
                      >
                        Release Booking
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))
          ) : (
            <div className="text-5xl font-semibold">No dogs available. Please Login</div>
          )}
        </div>
      </div>

      <div></div>
    </div>
  );
};
