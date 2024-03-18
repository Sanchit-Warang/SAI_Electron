type Donor = {
  _id: string;
  name: string;
  birthDate: string;
  email: string;
  contactNo: string;
  address: string;
  identificationNo: string;
  donations?: Donation[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};


type Donation = {
  accountantSubmissionDate: string;
  amount: number;
  bank: string;
  branch: string;
  chequeDate: string;
  chequeNo: string;
  clearanceDate: string;
  createdAt: string;
  dateOfIssue: string;
  depositBank: string;
  depositDate: string;
  donorId?: Donor;
  eightyG: string;
  remark: string;
  // donations?: Donation[];
  submissionDate: string;
  updatedAt: string;
  __v: number;
  _id: string;
};

export type DonationFormData = {
  accountantSubmissionDate: string;
  amount: number;
  bank: string;
  branch: string;
  chequeDate: string;
  chequeNo: string;
  clearanceDate: string;
  createdAt: string;
  dateOfIssue: string;
  depositBank: string;
  depositDate: string;
  donorId: string
  eightyG: string;
  remark: string;
  submissionDate: string;
}

type User = {
  email: string;
  name: string;
  token: string;
  user_id: string;
};

export type { Donor, User, Donation };
