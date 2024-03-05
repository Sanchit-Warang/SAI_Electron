import { useQuery } from "@tanstack/react-query";
import { getDonors, getDonor } from "@renderer/api/Donor";
const useGetDonorsQuery = (
  queryParams: {
    name?: string;
    identificationNo?: string;
  } = {},
) => {
  return useQuery({
    queryKey: ["donors", queryParams],
    queryFn: () => getDonors(queryParams),
  });
};

const useGetDonorQuery = (donorId: string) => {
  return useQuery({
    queryKey: ["donor", donorId],
    queryFn: () => getDonor(donorId),
  });
};

export { useGetDonorsQuery, useGetDonorQuery };
