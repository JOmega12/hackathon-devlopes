import { UserInformation } from "../types";
import { toast } from "react-hot-toast";

const base_URL = "http://localhost:3000";

const createUser = (user: UserInformation) => {
  return fetch(`${base_URL}/users`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};

const findUser = (user: Omit<UserInformation, "shouldRemember">) => {
  return fetch(`${base_URL}/users`)
    .then((response) => response.json())
    .then((knownUsers) =>
      knownUsers.filter((knownUser: UserInformation) => knownUser.username === user.username)
    )
    .then((knownUsersArray) => {
      if (knownUsersArray.length === 0) {
        toast.error("User not Found!");
        return;
      }
      return knownUsersArray;
    })
    .then((knownUsersArray) =>
      knownUsersArray.find((knownUser: UserInformation) => knownUser.password === user.password)
    )
    .then((foundUser: UserInformation) => {
      if (!foundUser) {
        toast.error("Username and Password do not match");
      }
      return foundUser;
    });
};

const patchUser = (user: UserInformation, shouldRemember: boolean) => {
  return fetch(`${base_URL}/users/${user.id}`, {
    method: "PATCH",
    body: JSON.stringify({ shouldRemember: shouldRemember }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};

export const UserRequests = {
  createUser,
  findUser,
  patchUser,
};
