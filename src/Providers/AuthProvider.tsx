import {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import { UserInformation } from "../types";
import { UserRequests } from "../api/UserAPI";
import toast from "react-hot-toast";

type TAuthContext = {
  user: UserInformation | null;
  setUser: Dispatch<SetStateAction<UserInformation | null>>;
  createNewUser: (user: UserInformation) => Promise<UserInformation>;
  userLogout: () => void;
  userLogin: (
    user: Omit<UserInformation, "shouldRemember">,
    shouldRemember: boolean
  ) => Promise<UserInformation>;
};

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<TAuthContext | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserInformation | null>(null);

  useEffect(() => {
    const previousUser = localStorage.getItem("PookieUser");
    if (previousUser) {
      setUser(JSON.parse(previousUser));
    }
  }, []);

  const createNewUser = (user: UserInformation) => {
    return UserRequests.createUser(user)
      .then((response) => {
        if (!response) {
          toast.error("Paws, something went wrong!");
        }
        return response;
      })
      .then((user: UserInformation) => {
        if (user.shouldRemember) {
          localStorage.setItem("PookieUser", JSON.stringify(user));
        }
        return user;
      })
      .then((user) => {
        setUser(user);
        return user;
      });
  };

  const userLogin = (user: Omit<UserInformation, "shouldRemember">, shouldRemember: boolean) => {
    return UserRequests.findUser(user)
      .then((user) => {
        setUser(user);
        return user;
      })
      .then((user) => UserRequests.patchUser(user, shouldRemember))
      .then((user) => {
        if (shouldRemember) {
          localStorage.setItem("PookieUser", JSON.stringify(user));
        }
        return user;
      });
  };

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem("PookieUser");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        createNewUser,
        userLogout,
        userLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Please use `useAuth` hook in context in AuthContext");
  }
  return context;
};
