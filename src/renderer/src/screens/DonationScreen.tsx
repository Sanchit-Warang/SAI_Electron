import { useParams } from "react-router-dom";
import { UseGetDonationQuery } from "@renderer/hooks/api/donationApi";
const DonationScreen = () => {
  const { donationId } = useParams();
  let donationIdString = "";
  if (donationId) {
    donationIdString = donationId;
  }

  const donation = UseGetDonationQuery(donationIdString);

  if (donation.isLoading) {
    return <>Loading</>;
  } else if (donation.isError) {
    return <>Error</>;
  } else if (donation.data) {
    return (
      <div className="md:w-full  lg:w-[60%]  mx-auto border-x-2 pt-7 h-[93vh] p-3">
        <div className="bg-gray-100 rounded-md p-4 mb-4">
          <p className="font-bold">
            Accountant Submission Date: {donation.data.accountantSubmissionDate}
          </p>
          <p>Amount: {donation.data.amount}</p>
          <p>Bank: {donation.data.bank}</p>
          <p>Branch: {donation.data.branch}</p>
          <p>Cheque Date: {donation.data.chequeDate}</p>
          <p>Cheque No: {donation.data.chequeNo}</p>
          <p>Clearance Date: {donation.data.clearanceDate}</p>
          <p>Created At: {donation.data.createdAt}</p>
          <p>Date of Issue: {donation.data.dateOfIssue}</p>
          <p>Deposit Bank: {donation.data.depositBank}</p>
          <p>Deposit Date: {donation.data.depositDate}</p>
          {typeof donation.data.donorId === "string" ? (
            <p>Donor Id: {donation.data.donorId}</p>
          ) : (
            <></>
          )}
          <p>Eighty G: {donation.data.eightyG}</p>
          <p>Remark: {donation.data.remark}</p>
          <p>Submission Date: {donation.data.submissionDate}</p>
          <p>Updated At: {donation.data.updatedAt}</p>
        </div>
      </div>
    );
  }

  return <></>;
};

export default DonationScreen;
