export const Footer = () => {
  return (
    <>
      <div className="flex flex-row bg-teal-footer h-64 w-1140 p-0 justify-center items-center ">
        <div className="w-4/5 flex flex-row justify-evenly">
          <div className="flex flex-row gap-2 w-fit h-48">
            <div className="w-24 h-24 object-cover flex items-center justify-center my-auto">
              <img src="src/assets/Pookie Head.png" alt="Pookie"></img>
            </div>

            <div className="w-fit h-48 flex item-end justify-center font-semibold text-footer-text flex-col">
              <p className="mt-8 text-xl text-center text-name-color">The PookieBears Team</p>
              <ul className="flex flex-col items-center justify-center mt-2">
                <li>Jensen Omega</li>
                <li>Carl Boquiren</li>
                <li>Joshua Ford</li>
                <li>Monica Atmadja</li>
                <li>Dzidzor Essein</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-20 w-600 text-footer-text text-center justify-center">
            <div className="items-center justify-center leading-5">
              <p>1 Paws Lane, Doggiland</p>
              <p>1-800-PAW-CAFE</p>
            </div>

            <div className="items-center justify-center mt-50 mt-25">
              <p>Copyrights 2023 | All Rights Reserved |The PookieBears Team</p>
              <p>
                <h3 className="leading-0 text-base font-normal">
                  Images created by generative AI - Adobe FireFly
                </h3>{" "}
              </p>
            </div>
          </div>

          <div>
            <div className="text-footer-text items-center justify-center font-semibold p-4 pr-8">
              <ul className="flex flex-col gap-2 ">
                <li className="nav-link">
                  <a href="#signup">Sign Up</a>
                </li>
                <li className="nav-link">
                  <a href="#login">Login</a>
                </li>
                <li className="nav-link">
                  <a href="#about">About Us</a>
                </li>
                <li className="nav-link">
                  <a href="#dogs">Dogs</a>
                </li>
                <li className="nav-link">
                  <a href="#reserve">Reserve</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
