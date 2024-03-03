import { API } from "./api";
import { Donor } from "@renderer/types";

const getDonors = async () => {
  const { data } = await API("api/app/getdonors");
  return data as Donor[];
};

export { getDonors };
