import { API } from "./api";
import { Donation } from "@renderer/types";

const getDonation = async (donationId: string) => {
  const { data } = await API(`api/app/getDonation/${donationId}`);
  return data as Donation;
};

export { getDonation };
