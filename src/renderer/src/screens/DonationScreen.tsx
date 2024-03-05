import { useParams } from "react-router-dom";
const DonationScreen = () => {
  const { donationId } = useParams();
  let donationIdString = "";
  if (donationId) {
    donationIdString = donationId;
  }
  return (
    <div className="md:w-full  lg:w-[60%]  mx-auto border-x-2 pt-7 h-[93vh] p-3">
      Donation Screen {donationIdString}
    </div>
  );
};

export default DonationScreen;
