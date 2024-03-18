import Modal from "../ui/Modal";
import { Button } from "../ui/button";
import AddDonationForm from "./AddDonationForm";

type Props = {
  donorId: string;
};

const AddDonationModal = ({donorId}: Props) => {
  return (
    <Modal
      trigger={<Button className="bg-primary w-[6rem]">Add Donation</Button>}
    >
      <AddDonationForm donorId={donorId}/>
    </Modal>
  );
};

export default AddDonationModal;
