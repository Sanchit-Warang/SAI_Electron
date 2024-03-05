import { Donation, Donor } from "@renderer/types";
import DonationList from "../Donation/DonationList";

type DonorDetailsProps = {
  donor: Donor;
  donations: Donation[];
};

const DonorDetails = ({ donor, donations }: DonorDetailsProps) => {
  return (
    <>
      <div>Name: {donor.name}</div>
      <div>BirthDate: {donor.birthDate}</div>
      <div>Email: {donor.email}</div>
      <div>Contact No: {donor.contactNo}</div>
      <div>Address: {donor.address}</div>
      <div>Identification No: {donor.identificationNo}</div>
      <DonationList donations={donations}/>
    </>
  );
};

export default DonorDetails;
