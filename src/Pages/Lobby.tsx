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

  console.log(bookDog, "bookDog");

  const [activeDogs, setActiveDogs] = useState<DogTypes[]>([]);

  useEffect(() => {
    if (Array.isArray(bookDog) && Array.isArray(dogs)) {
      // when user is loggedIn, this shows what the user has booked
      const userBookings = bookDog
        .filter((selfUser: { userId: number | undefined; dogId: number }) => {
          return selfUser.userId === user?.id;
        })
        .map((booking) => booking.dogId);

      const availableDogs = dogs.filter(
        (dog) => !userBookings.includes(dog.id)
      );
      setActiveDogs(availableDogs);
    }
  }, [bookDog, dogs, user?.id]);

  // onClick this either creates a booking or does not book the person
  const onBookingClick = (dogId: number | undefined) => {
    if (user && user?.id && Array.isArray(dogs) && dogId !== undefined) {
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
        <div className="flex flex-col min-h-screen flex-grow mx-auto p-8 bg-off-white">
          <div className="pl-1 mb-7 text-icon-color flex text-center flex-col">
            <h2 className="m-1 text-[75px] font-bold">
              Pookie's Adoption Lounge
            </h2>
            <h3 className="pt-1 text-2xl">
              Meet, Connect, Find a Friendly and Invaluable Companion for a Day,
              or Two, or…
            </h3>
          </div>
          <div className="flex justify-center mb-10">
            <button
              onClick={() => navigate("/booked-dogs")}
              className=" bg-pink-btn p-5 text-2xl text-off-white"
            >
              Booked Dogs
            </button>
          </div>
          <div className="flex flex-col w-full">

            <div className="checkout flex flex-row flex-grow bg-blue-900  text-name-color justify-center items-center bg-footer-text gap-10 mb-10">
              <span className="font-bold font-montserrat text-5xl">
                Check out our Veteran Paws
              </span>
              <span>
                <img
                  className="w-[180px] h-[180px]"
                  src="/YellowArrow.svg"
                  alt="Yellow Arrow"
                />
              </span>
            </div>

          <div className="flex md:flex-row min[360px]:flex-col justify-center gap-4 mb-10">
              <div className="veteran flex text-orange-500 bg-dog-bg h-1/3">
                <div className="text-off-white text-xl flex flex-col p-2 pl-6">
                  <h3 className="text-2xl font-semibold">Jamsy-Do</h3>
                  <p>Breed: Maltipoo</p>
                  <p>Availab05357ele: yes</p>
                  <p>Age: 8 years</p>
                  <p className="">From Stray to homely. Jamsy-Do is intelligent, playful and a
                    great lover...</p>
                  <div className="mt-4 ">
                    <a className="more-button whitespace-nowrap bg-pink-btn rounded-md border-2 w-full p-2 flex justify-center" href="#">
                      Read more
                    </a>
                  </div>
                </div>
                <img
                  className="w-[300px] h-[300px]"
                  src="https://img.freepik.com/premium-psd/cute-dog-with-glasses-fun-colorful-concept-ideal-print-design_529119-509.jpg?w=740"
                  alt="first dog"
                />
              </div>
              <div className="veteran flex text-orange-500 bg-dog-bg h-1/3">
                <div className="text-off-white text-xl flex flex-col p-2 pl-63">
                  <h3 className="text-2xl font-semibold">Jack Squizzy</h3>
                  <p>Breed: French Bulldog</p>
                  <p>Age: 10 years </p>
                  <p>No one can beat the calm affection of Jack and the
                    companionship he offers...</p>
                  <div className="mt-4 ">
                    <a className="more-button whitespace-nowrap bg-pink-btn rounded-md border-2 w-full p-2 flex justify-center" href="#">
                      Read more
                    </a>
                  </div>
                </div>
                <img
                  className="w-[300px] h-[300px]"
                  src="https://img.freepik.com/premium-vector/colorful-bulldog-pop-art-style_825692-30.jpg?w=740"
                  alt="second dog"
                />
              </div>
            </div>
          </div>

          <div className="mb-10 text-icon-color text-center">
            <h2 className="m-1 text-[75px] font-bold">
              Our Dogs
            </h2>
          </div>

          <div className="flex flex-row flex-wrap gap-5 px-20 justify-center">
            {dogs && Array.isArray(dogs) && user && isRegister ? (
              activeDogs.map((dog, index) => (
                <div key={index} className="flex flex-col">
                  <div className="">
                    <img
                      src={dog.image}
                      alt="dog image"
                      className="w-[250px] h-[250px]"
                    />
                  </div>
                  <div className="flex flex-col text-center gap-2 bg-dog-bg text-off-white rounded-md border-2 border-b-dog-bg">
                    <h2 className="text-4xl font-bold">{dog.name}</h2>
                    <h3 className="text-2xl font-semibold">{dog.breed}</h3>
                    <div>
                      <p>When am I available?</p>
                      <p>{dog.timeAvailable}</p>
                    </div>
                    <div className="text-off-white">
                      <button
                        onClick={() => onBookingClick(dog.id)}
                        className="bg-pink-btn rounded-md border-2 w-full p-2 flex justify-center border-off-white top-2"
                      >
                        Book now!
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-5xl font-semibold">
                Please log in to view our available dogs!
              </div>
            )}
          </div>
        </div>

        <div></div>
      </div>
    </>
  );
};
