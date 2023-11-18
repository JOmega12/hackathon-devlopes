export type DogTypes = {
  name: string;
  breed: string;
  id?: number;
  image: string;
  timeAvailable?: string;
  available:boolean;
};

export type UserInformation = {
  id?: number;
  username: string;
  password: string;
  shouldRemember: boolean;
};
