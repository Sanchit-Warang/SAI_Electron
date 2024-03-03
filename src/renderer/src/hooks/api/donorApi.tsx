import { useQuery } from "@tanstack/react-query";
import { getDonors } from "@renderer/api/Donor";
const useGetDonorsQuery = () => {
  return useQuery({
    queryKey: ['donors'],
    queryFn: getDonors
  });
};

export { useGetDonorsQuery };