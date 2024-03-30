import { useParams } from "react-router-dom";
import { UseGetDonationQuery } from "@renderer/hooks/api/donationApi";
import ThanksLetterModal from "@renderer/components/Certificates/ThanksLetterModal";
import ReceiptModal from "@renderer/components/Certificates/ReceiptModal";
import EightyGModal from "@renderer/components/Certificates/EightyGModal";
import { LoadingSpinner } from "@renderer/components/ui/loadingSpinner";
const DonationScreen = () => {
  const { donationId } = useParams();
  let donationIdString = "";
  if (donationId) {
    donationIdString = donationId;
  }

  const donation = UseGetDonationQuery(donationIdString);

  if (donation.isLoading) {
    return <LoadingSpinner className={"my-5 mx-auto"} />;
  } else if (donation.isError) {
    return <>Error</>;
  } else if (donation.data) {
    return (
      <div className="md:w-full  lg:w-[60%]  mx-auto border-x-2 pt-7 h-[93vh] p-3">
        <div className="bg-gray-100 rounded-md p-4 mb-4">
          <p className="font-bold">
            Accountant Submission Date:{" "}
            {new Date(donation.data.AccountantSubmissionDate).toLocaleDateString()}
          </p>
          <p>Amount: {donation.data.amount}</p>
          <p>Bank: {donation.data.bank}</p>
          <p>Branch: {donation.data.branch}</p>
          <p>
            Cheque Date:{" "}
            {new Date(donation.data.chequeDate).toLocaleDateString()}
          </p>
          <p>Cheque No: {donation.data.chequeNo}</p>
          <p>
            Clearance Date:{" "}
            {new Date(donation.data.clearanceDate).toLocaleDateString()}
          </p>
          <p>
            Created At: {new Date(donation.data.createdAt).toLocaleDateString()}
          </p>
          <p>
            Date of Issue:{" "}
            {new Date(donation.data.dateOfIssue).toLocaleDateString()}
          </p>
          <p>Deposit Bank: {donation.data.depositBank}</p>
          <p>
            Deposit Date:{" "}
            {new Date(donation.data.depositDate).toLocaleDateString()}
          </p>
          <p>Donor Name:{donation.data.donorId?.name}</p>
          <p>Eighty G: {donation.data.eightyG}</p>
          <p>Remark: {donation.data.remark}</p>
          <p>
            Submission Date:{" "}
            {new Date(donation.data.submissionDate).toLocaleDateString()}
          </p>
          <p>
            Updated At: {new Date(donation.data.updatedAt).toLocaleDateString()}
          </p>
        </div>
        <div className="flex gap-4">
          <ThanksLetterModal donation={donation.data} />
          <ReceiptModal donation={donation.data} />
          <EightyGModal donation={donation.data} />
        </div>
      </div>
    );
  }

  return <></>;
};

export default DonationScreen;
