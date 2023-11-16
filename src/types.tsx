export type DogTypes = {
  name: string;
  breed: string;
  available: boolean;
  id?: number;
  image: string;
};

export type UserInformation = {
  id?: number;
  username: string;
  password: string;
  shouldRemember: boolean;
};
