
export const DogCard = () => {

  return (
    <>
      {/* <div className="header">
      <div className="navbar">
        <nav>
          <a className="navbuttons" href="#">About Us</a>
          <a className="navbuttons" href="#">Lobby</a>
          <a className="navbuttons" href="#">Dogs</a>
          <a className="navbutton" href="#">Reservation</a>
        </nav>
      </div>
      <div className="w-9/12">
        <img  className="w-full" src="/girl-dog-man.png" alt="girl with dog" />
      </div>
    </div>
     */}

    <div className="bg-orange-200">
      <div className="text-orange-700 pl-[3%] mb-[2%]">
        <h2>Pookie's Adoption Lounge</h2>
        <h3 className="pt-0">
          Meet, Connect, Find a Friendly and Invaluable Companion for a Day, or
          Two, or…
        </h3>
      </div>

      <div className="flex gap-y-[5%]">

        <div className="flex flex-col w-full">
          
          <div className="checkout flex text-orange-500 bg-blue-900">
            <span className="font-bold font-monterrat w-6/12 pt-[8%] pl-[12%]">Check out our Veteran Paws</span>
            <span><img className="pt-[20%]" src="/YellowArrow.svg" alt="Yellow Arrow" /></span>
          </div>
          <div className="veteran flex text-orange-500 bg-blue-900">
            <div className="w-17/20 text-orange-500 text-2xl pt-[5%] pr-[10%] pb-[5%] pl-[12%]">
              <h3>Jamsy-Do</h3>
              <p>
                Breed: Maltipoo<br />
                Available: Yes <br />
                Age: 8 years <br />
                From Stray to homely. Jamsy-Do is intelligent, playful and a
                great lover...
              </p>
              <a className="more-button whitespace-nowrap" href="#">Read more</a>
            </div>
            <img className="w-9/20" 
              src="https://img.freepik.com/premium-psd/cute-dog-with-glasses-fun-colorful-concept-ideal-print-design_529119-509.jpg?w=740"
              alt="first dog"
            />
          </div>
          <div className="veteran">
            <div className="w-17/20 text-orange-500 text-2xl pt-[5%] pr-[10%] pb-[5%] pl-[12%]">
              <h3>Jack Squizzy</h3>
              <p>
                Breed: French Bulldog<br />
                Available: Yes <br />
                Age: 10 years <br />
                No one can beat the calm affection of Jack and the companionship
                he offers...
              </p>
              <a className="more-button whitespace-nowrap" href="#">Read more</a>
            </div>
            <img className="w-9/20"
              src="https://img.freepik.com/premium-vector/colorful-bulldog-pop-art-style_825692-30.jpg?w=740"
              alt="second dog"
            />
          </div>
  
        </div>



        <div className="grid w-4/5 grid-cols-[repeat(auto-fit, minmax(205px, 1fr)] gap-15 auto-rows-[minmax(75px, auto)]">
          <div className="text-center">
            <div>
              <img
                src="https://img.freepik.com/premium-photo/dog-image_889056-22321.jpg?w=740"
                alt="dog one"
              />
            </div>
            <div className="bg-teal-700 pt-2 hover:[transform: scale(1.1)]">
              <h3 className="text-orange-500 text-2xl">DynoPaws</h3>
              <p className="pr-2 font-medium leading-tight">
                Breed: Husky<br />
                Available: Yes<br />Age: 6 months<br />Playful, Heart-warmer...
              </p>
              <a className="more-button hover:bg-orange-500" href="#">Read more</a>
            </div>
          </div>
          <div className="text-center">
            <div>
              <img
                src="https://img.freepik.com/premium-photo/funny-hipster-cute-dog-art-illustration-anthropomorphic-dogs_739548-713.jpg?w=740"
                alt="dog two"
              />
            </div>
            <div className="bg-teal-700 pt-2 hover:[hover {transform: scale(1.1)">
              <h3 className="text-orange-500 text-2xl">Fido</h3>
              <p className="pr-2 font-medium leading-tight">
                Breed: Pitbull <br />
                Available: No <br />
                Age: 2 years <br />
                Outgoer, Energetic...
              </p>
              <a className="more-button hover:bg-orange-500" href="#">Read more</a>
            </div>
          </div>
          <div className="text-center">
            <div>
              <img
                src="https://img.freepik.com/premium-photo/funny-hipster-cute-dog-art-illustration-anthropomorphic-dogs_739548-728.jpg?w=740"
                alt="dog three"
              />
            </div>
            <div className="bg-teal-700 pt-2 hover:[hover {transform: scale(1.1)">
              <h3 className="text-orange-500 text-2xl">Spot</h3>
              <p className="pr-2 font-medium leading-tight">
                Breed: Chihuahua <br />
                Available: Yes <br />
                Age: 5 years<br />Affectionate, Cozy...
              </p>
              <a className="more-button hover:bg-orange-500" href="#">Read more</a>
            </div>
          </div>
          <div className="text-center">
            <div>
              <img
                src="https://img.freepik.com/premium-photo/photo-dog_931878-268607.jpg?w=740"
                alt="dog four"
              />
            </div>
            <div className="bg-teal-700 pt-2 hover:[hover {transform: scale(1.1)">
              <h3 className="text-orange-500 text-2xl">Jack</h3>
              <p className="pr-2 font-medium leading-tight">
                Breed: Siberian Husky<br />
                Available: Yes <br />
                Age: 9 months <br />Graceful, Strong...
              </p>
              <a className="more-button hover:bg-orange-500" href="#">Read more</a>
            </div>
          </div>
          <div className="text-center">
            <div>
              <img
                src="https://img.freepik.com/premium-photo/dog-image_889056-22321.jpg?w=740"
                alt="dog five"
              />
            </div>
            <div className="bg-teal-700 pt-2 hover:[hover {transform: scale(1.1)">
              <h3 className="text-orange-500 text-2xl">Gizmo</h3>
              <p className="pr-2 font-medium leading-tight">
                Breed: Golden Retriever<br />
                Available: Yes <br />
                Age: 1 year<br />Trustworthy, Gentle...
              </p>
              <a className="more-button hover:bg-orange-500" href="#">Read more</a>
            </div>
          </div>
          <div className="text-center">
            <div>
              <img
                src="https://img.freepik.com/premium-photo/painting-dog-wearing-blue-hat-blue-sweater-generative-ai_901275-29148.jpg?w=740"
                alt="dog six"
              />
            </div>
            <div className="bg-teal-700 pt-2 hover:[hover {transform: scale(1.1)">
              <h3 className="text-orange-500 text-2xl">Elwood</h3>
              <p className="pr-2 font-medium leading-tight">
                Breed: Alaskan Malamute<br />
                Available: No <br />
                Age: 3 years<br />Friendly, Loyal...
              </p>
              <a className="more-button hover:bg-orange-500" href="#">Read more</a>
            </div>
          </div>
        </div>
      </div>
    </div>



    <footer className="bg-teal-600 text-orange-200">
      <div className="flex items-center justify-between">
        <div className="flex flex-1 justify-between items-center">
          <img className="w-2/5 h-auto" src="/Pookie Bear.png" alt="bear head" />
          <ul>
            <li>Jensen Omega</li>
            <li>Carl Boquiren</li>
            <li>Joshua Ford</li>
            <li>Monica Atmadja</li>
            <li>Dzidzor Essien</li>
          </ul>
        </div>
        <div className="flex-1">
          <p>1 Paws Lane, Doggieland</p>
          <p>1-800-PAW-CAFE</p>
        </div>
        <div className="flex flex-col flex-1 ml-auto">
          <a className="text-orange-200 rounded-lg mb-1 w-6/12 ml-auto border-solid border-1" href="#">About Us</a>
          <a className="text-orange-200 rounded-lg mb-1 w-6/12 ml-auto border-solid border-1" href="#">Lobby</a>
          <a className="text-orange-200 rounded-lg mb-1 w-6/12 ml-auto border-solid border-1" href="#">Dogs</a>
          <a className="text-orange-200 rounded-lg mb-1 w-6/12 ml-auto border-solid border-1" href="#">Reservation</a>
        </div>
      </div>
      <div className="pt-[2%] text-center">
        Copyright 2023 | All Rights Reserved | The Pookie Bears Team
      </div>
    </footer>

    </>
  );
};
