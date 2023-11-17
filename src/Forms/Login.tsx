import { Dispatch, SetStateAction, useState } from "react";
import { useAuth } from "../Providers/AuthProvider";
import { toast } from "react-hot-toast";

export const Login = ({ cancel }: { cancel: Dispatch<SetStateAction<boolean>> }) => {
  const [usernameInput, setUsernameInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [shouldRemember, setShouldRemember] = useState(false);

  const { userLogin } = useAuth();

  const reset = () => {
    setUsernameInput("");
    setPasswordInput("");
  };

  return (
    <div className="w-80">
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          if (usernameInput.length < 3) {
            alert("Username must be at least 3 characters long");
          } else if (passwordInput.length < 3) {
            alert("Password must be at least 3 characters long");
          } else {
            userLogin(
              {
                username: usernameInput,
                password: passwordInput,
              },
              shouldRemember
            )
              .then((user) => toast.success(`Welcome back ${user.username}!`))
              .then(() => reset())
              .then(() => cancel(false));
          }
        }}
        className="p-2 bg-blue-btn rounded-2xl"
      >
        <h1 className="font-montserrat text-text-color font-bold py-1">Login</h1>
        <div className="py-1 flex justify-between">
          <label htmlFor="username" className="font-montserrat text-off-white">
            Username:
          </label>
          <input
            style={{ border: "1px solid black" }}
            type="text"
            value={usernameInput}
            onChange={(e) => setUsernameInput(e.target.value.trim())}
            className="rounded-2xl px-3 bg-off-white text-icon-color"
          />
        </div>
        <div className="py-1 flex justify-between">
          <label htmlFor="password" className="font-montserrat text-off-white">
            Password:
          </label>
          <input
            style={{ border: "1px solid black" }}
            type="text"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value.trim())}
            className="rounded-2xl px-3 bg-off-white"
          />
        </div>
        <div className="flex justify-center py-1">
          <input
            type="checkbox"
            checked={shouldRemember}
            onChange={() => setShouldRemember(!shouldRemember)}
          />
          <label htmlFor="remember" className="font-montserrat text-off-white text-sm px-1">
            Remember Me?
          </label>
        </div>
        <div className="flex justify-evenly">
          <button onClick={() => cancel(false)} className="text-off-white font-montserrat">
            Cancel
          </button>
          <button
            type="submit"
            className="text-xlg rounded-xl bg-pink-btn p-1 px-3 text-off-white font-montserrat"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
