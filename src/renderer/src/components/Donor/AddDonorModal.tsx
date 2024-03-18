import Modal from "../ui/Modal";
import { Button } from "../ui/button";
import AddDonorForm from "./AddDonorForm";


const AddDonorModal = () => {
  return (
    <Modal
      trigger={<Button className="bg-primary w-[6rem]">Add Donor</Button>}
    >
      <AddDonorForm />
    </Modal>
  );
};

export default AddDonorModal;
