import { API } from "./api";
import { Donor, Donation } from "@renderer/types";

const getDonors = async (
  queryParams: { name?: string; identificationNo?: string } = {},
) => {
  const queryParamsString = new URLSearchParams(queryParams).toString();
  const { data } = await API(`api/app/getdonors?${queryParamsString}`);
  return data as Donor[];
};

const getDonor = async (donorId: string) => {
  const { data }: { data: { donor: Donor[]; donations: Donation[] } } =
    await API(`api/app/getDonor/${donorId}`);
  return { donor: data.donor[0], donations: data.donations };
};

export { getDonors, getDonor };
