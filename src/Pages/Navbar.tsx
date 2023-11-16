import { Login } from "../Forms/Login";
import { Signup } from "../Forms/Signup";
import { useAuth } from "../Providers/AuthProvider";
import { useState } from "react";

export const Navbar = () => {
  const [shouldShowSignup, setShouldShowSignup] = useState(false);
  const [shouldShowLogin, setShouldShowLogin] = useState(false);
  const { user, userLogout } = useAuth();

  const isUser = user !== null;

  return (
    <div>
      This is Navbar component
      <div className="user-greeting">
        <h2>{isUser ? `Hello ${user.username}!` : ""}</h2>
      </div>
      <div id="signup">
        {shouldShowSignup && <Signup cancel={(cancel) => setShouldShowSignup(cancel)} />}
        {!isUser && !shouldShowSignup && (
          <button onClick={() => setShouldShowSignup(!shouldShowSignup)}>Sign Up</button>
        )}
      </div>
      <div id="login">
        {shouldShowLogin && <Login cancel={(cancel) => setShouldShowLogin(cancel)} />}
        {!isUser && !shouldShowLogin && (
          <button onClick={() => setShouldShowLogin(!shouldShowLogin)}>Login</button>
        )}
      </div>
      <div id="logout">{isUser && <button onClick={() => userLogout()}>Logout</button>}</div>
    </div>
  );
};
