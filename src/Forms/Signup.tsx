import { Dispatch, SetStateAction, useState } from "react";
import { useAuth } from "../Providers/AuthProvider";
import toast from "react-hot-toast";

export const Signup = ({ cancel }: { cancel: Dispatch<SetStateAction<boolean>> }) => {
  const [usernameInput, setUsernameInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [shouldRemember, setShouldRemember] = useState(false);

  const { createNewUser } = useAuth();

  const reset = () => {
    setUsernameInput("");
    setPasswordInput("");
  };

  return (
    <div>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          if (usernameInput.length < 3) {
            alert("Username must be at least 3 characters long");
          } else if (passwordInput.length < 3) {
            alert("Password must be at least 3 characters long");
          } else {
            createNewUser({
              username: usernameInput,
              password: passwordInput,
              shouldRemember: shouldRemember,
            })
              .then((user) => toast.success(`Welcome ${user.username}`))
              .then(() => reset())
              .then(() => cancel(false));
          }
        }}
      >
        <h1>Create a New Account</h1>
        <label htmlFor="username">Username:</label>
        <input
          style={{ border: "1px solid black" }}
          type="text"
          value={usernameInput}
          onChange={(e) => setUsernameInput(e.target.value.trim())}
        />
        <label htmlFor="password">Password:</label>
        <input
          style={{ border: "1px solid black" }}
          type="text"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value.trim())}
        />
        <input
          type="checkbox"
          checked={shouldRemember}
          onChange={() => setShouldRemember(!shouldRemember)}
        />
        <label htmlFor="remember">Remember Me?</label>
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => cancel(false)}>Cancel</button>
    </div>
  );
};
