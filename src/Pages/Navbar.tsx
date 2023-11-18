import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Login } from "../Forms/Login";
import { Signup } from "../Forms/Signup";
import { useAuth } from "../Providers/AuthProvider";
import { useState } from "react";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faUserMinus } from "@fortawesome/free-solid-svg-icons/faUserMinus";
import { faDog } from "@fortawesome/free-solid-svg-icons/faDog";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons/faCalendarCheck";
import { faUsers } from "@fortawesome/free-solid-svg-icons/faUsers";
import { faBone } from "@fortawesome/free-solid-svg-icons/faBone";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [shouldShowSignup, setShouldShowSignup] = useState(false);
  const [shouldShowLogin, setShouldShowLogin] = useState(false);
  const { user, userLogout } = useAuth();

  const isUser = user !== null;

  const navigate = useNavigate();
  return (
    <div className="bg-orange-bg h-96 flex">
      <div className="flex-none w-96 flex flex-col justify-evenly items-center">
        {!shouldShowLogin && (
          <div id="signup">
            {shouldShowSignup && <Signup cancel={(cancel) => setShouldShowSignup(cancel)} />}
            {!isUser && !shouldShowSignup && (
              <div
                className="flex justify-evenly items-center w-44 cursor-pointer"
                onClick={() => setShouldShowSignup(!shouldShowSignup)}
              >
                <FontAwesomeIcon className="text-icon-color text-2xl" icon={faUserPlus} />
                <button className="text-xl rounded-xl bg-pink-btn p-2 px-5 text-off-white font-montserrat">
                  Sign Up
                </button>
              </div>
            )}
          </div>
        )}
        {!shouldShowSignup && (
          <div id="login">
            {shouldShowLogin && <Login cancel={(cancel) => setShouldShowLogin(cancel)} />}
            {!isUser && !shouldShowLogin && (
              <div
                className="flex justify-evenly items-center w-44 cursor-pointer"
                onClick={() => setShouldShowLogin(!shouldShowLogin)}
              >
                <FontAwesomeIcon className="text-icon-color text-2xl" icon={faUsers} />
                <button className="text-xl rounded-xl bg-pink-btn p-2 px-5 text-off-white font-montserrat">
                  Login
                </button>
              </div>
            )}
          </div>
        )}
        {isUser ? (
          <div className="user-greeting">
            <h2 className="text-2xl text-off-white font-montserrat bg-blue-btn rounded-xl p-2 px-5">
              {`Hello ${user?.username}!`}
            </h2>
          </div>
        ) : (
          ""
        )}
        <div id="logout">
          {isUser && (
            <div className="flex justify-evenly items-center w-44 cursor-pointer">
              <FontAwesomeIcon className="text-icon-color text-2xl" icon={faUserMinus} />
              <button
                className="text-xl rounded-xl bg-pink-btn p-2 px-5 text-off-white font-montserrat"
                onClick={() => userLogout()}
              >
                Logout
              </button>
            </div>
          )}
        </div>
        <div
          className="flex justify-evenly items-center w-44 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <FontAwesomeIcon className="text-icon-color text-2xl" icon={faBone} />
          <button className="text-xl rounded-xl bg-pink-btn p-2 px-5 text-off-white font-montserrat">
            About
          </button>
        </div>
        <div
          className="flex justify-evenly items-center w-44 cursor-pointer"
          onClick={() => navigate("lobby")}
        >
          <FontAwesomeIcon className="text-icon-color text-2xl" icon={faDog} />
          <button className="text-xl rounded-xl bg-pink-btn p-2 px-5 text-off-white font-montserrat">
            Dogs
          </button>
        </div>
        <div
          className="flex justify-evenly items-center w-44 cursor-pointer"
          onClick={() => navigate("booked-dogs")}
        >
          <FontAwesomeIcon className="text-icon-color text-2xl" icon={faCalendarCheck} />
          <button className="text-xl rounded-xl bg-blue-btn p-2 px-5 text-off-white font-montserrat">
            Reserve
          </button>
        </div>
      </div>
      <div className="flex-auto">
        <div className="h-full">
          <img
            className="object-cover w-full h-full object-top"
            src="src\assets\Hero.png"
            alt="Dog at Counter"
          />
        </div>
      </div>
    </div>
  );
};
