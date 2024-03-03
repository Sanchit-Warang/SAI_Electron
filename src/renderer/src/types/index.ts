type Donor = {
  _id: string;
  name: string;
  birthDate: string;
  email: string;
  contactNo: string;
  address: string;
  identificationNo: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type User = {
  email: string;
  name: string;
  token: string;
  user_id: string;
};

export type { Donor, User };
