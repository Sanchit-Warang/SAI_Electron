import { Donor } from "@renderer/types";
import AddDonationModal from "../Donation/AddDonationModal";
import { DataTable } from "../ui/data-table";
import { columns } from "../Donation/DonationTable/columns";
import { Card } from "../ui/card";

type DonorDetailsProps = {
  donor: Donor;
};

const DonorDetails = ({ donor }: DonorDetailsProps) => {
  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <p className="text-xl font-semibold">Donor Details</p>
        <Card className="p-5">
          <div>Name: {donor.name}</div>
          <div>BirthDate: {new Date(donor.birthDate).toLocaleDateString()}</div>
          <div>Email: {donor.email}</div>
          <div>Contact No: {donor.contactNo}</div>
          <div>Address: {donor.address}</div>
          <div>Identification No: {donor.identificationNo}</div>
          <AddDonationModal donorId={donor._id} />
        </Card>
      </div>
      {donor.donations && (
        <div className="space-y-2">
          <p className="text-xl font-semibold">{`${donor.name}'`}s Donations</p>
          <Card className="p-6">
            <DataTable columns={columns} data={donor.donations} />
          </Card>
        </div>
      )}
    </div>
  );
};

export default DonorDetails;
