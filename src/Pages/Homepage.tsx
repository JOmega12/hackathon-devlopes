export const Homepage = () => {
  return (
    <>
      <div className="bg-off-white">
        <section className="h-auto w-full mx-auto">
          <h1 className="relative text-6xl font-semibold text-orange-600 ml-12 pt-8 font-montserrat text-name-color tracking-wide">
            Pookie's Paws Dog Cafe
          </h1>
          <div className="flex flex-row items-center w-3/5 mx-auto my-10 h-1/4 justify-evenly">
            <div className="mr-4 h-60">
              <img
                src="src\assets\Maitre De.png"
                alt="Maitre De"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="font-montserrat w-1/2">
              <h2 className="text-name-color font-semibold text-3xl py-4 text-center">
                Welcome to Pookie's Paws Dog Cafe!
              </h2>
              <p className="tracking-wide font-montserrat leading-7 text-center">
                Step into a world where the charm of yesteryear meets the boundless joy of canine
                companionship. At Pookie's Paws Dog Cafe we're delighted to offer you an experience
                that goes beyond the ordinary - a haven for dog lovers, where every visit is a
                celebration of friendship and nostalgia.
              </p>
            </div>
          </div>
        </section>
        <section className="flex justify-evenly items-center mx-auto my-10 w-3/5">
          <div className="my-10 h-1/4 w-3/5">
            <h2 className="text-name-color font-semibold text-3xl py-4 text-left">
              <a href="#">Step into the Paws Lobby</a>
            </h2>
            <p className="tracking-wide font-montserrat leading-7 text-left my-2">
              Where you will be greeted by a gallery of cute adorable pups to choose from for your
              playtime companion. Each dog has a unique story, personality, and a heart full of love
              to share.
            </p>
            <p className="tracking-wide font-montserrat leading-7 text-left mt-8">
              Reserve a slot to frolic and play with our lovable shelter dogs. Whether it's a quick
              game of fetch or a leisurely stroll, these playful companions are ready to make your
              visit memorable.
            </p>
          </div>
          <div className="h-60">
            <a href="#">
              <img
                src="src\assets\Bus.png"
                alt="Bus"
                className="object-cover w-full h-full rounded-lg"
              />
            </a>
          </div>
        </section>
        <section className="flex justify-evenly items-center mx-auto my-10 w-3/5">
          <div className="h-60">
            <a href="#">
              <img
                src="src\assets\Head4.png"
                alt="Headshots"
                className="object-cover w-full h-full rounded-lg"
              />
            </a>
          </div>
          <div className="my-10 h-1/4 w-3/5">
            <h2 className="text-name-color font-semibold text-3xl py-4 text-left">
              <a href="#">Visit the Dogs Gallery</a>
            </h2>
            <p className="tracking-wide font-montserrat leading-7">
              And get to know your favorite pups more intimately. Explore their profiles, browse
              through heartwarming photos, and discover the special qualities that make each pup
              one-of-a-kind.
            </p>
            <p className="tracking-wide font-montserrat leading-7 mt-8">
              Whether you're drawn to a playful spirit, a gentle soul, or a furry friend with a
              heart-melting gaze, our shelter dogs are waiting to capture your heart.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};
