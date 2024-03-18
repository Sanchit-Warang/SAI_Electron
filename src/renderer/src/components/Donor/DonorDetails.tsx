import { Donor } from "@renderer/types";
import DonationList from "../Donation/DonationList";
import AddDonationModal from "../Donation/AddDonationModal";

type DonorDetailsProps = {
  donor: Donor;
};

const DonorDetails = ({ donor }: DonorDetailsProps) => {
  return (
    <>
      <div>Name: {donor.name}</div>
      <div>BirthDate: {donor.birthDate}</div>
      <div>Email: {donor.email}</div>
      <div>Contact No: {donor.contactNo}</div>
      <div>Address: {donor.address}</div>
      <div>Identification No: {donor.identificationNo}</div>
      {donor.donations && <DonationList donations={donor.donations} />}
      <AddDonationModal donorId={donor._id} />
    </>
  );
};

export default DonorDetails;
