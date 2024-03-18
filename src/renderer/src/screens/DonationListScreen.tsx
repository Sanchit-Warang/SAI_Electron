import DonationList from "@renderer/components/Donation/DonationList";
import { UseGetDonationsQuery } from "@renderer/hooks/api/donationApi";

const DonationListScreen = () => {
  const donations = UseGetDonationsQuery();

  const donationsListJSX = () => {
    if (donations.isLoading) {
      return "Loading ....";
    } else if (donations.isError) {
      return "Error";
    } else if (donations.data) {
      return <DonationList donations={donations.data} />;
    }
    return <></>;
  };

  return (
    <div className="md:w-full  lg:w-[60%]  mx-auto border-x-2 pt-7 h-[93vh] p-3">
      {donationsListJSX()}
    </div>
  );
};

export default DonationListScreen;
