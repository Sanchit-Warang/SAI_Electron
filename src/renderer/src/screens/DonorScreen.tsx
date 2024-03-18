import { useParams } from "react-router-dom";
import { useGetDonorQuery } from "@renderer/hooks/api/donorApi";
import DonorDetails from "@renderer/components/Donor/DonorDetails";
const DonorScreen = () => {
  const { donorId } = useParams();
  let donorIdString = "";
  if (donorId) {
    donorIdString = donorId;
  }
  const DonorData = useGetDonorQuery(donorIdString);
  const donorDetailsJSX = () => {
    if (DonorData.data) {
      return (
        <DonorDetails
          donor={DonorData.data}
        />
      );
    } else if (DonorData.isLoading) {
      return "Loading ....";
    } else {
      return "Error";
    }
  };

  return (
    <div className="md:w-full  lg:w-[60%]  mx-auto border-x-2 pt-7 h-[93vh] p-3">
      {donorDetailsJSX()}
    </div>
  );
};

export default DonorScreen;
