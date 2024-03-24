import Modal from "../ui/Modal";
import ThanksLetterForm from "./ThanksLetterForm";
import { Button } from "../ui/button";
import { Donation } from "@renderer/types";

type Props = {
  donation: Donation;
};

const ThanksLetterModal = ({ donation }: Props) => {
  return (
    <Modal
      trigger={<Button className="bg-primary w-[6rem]">Thanks Letter</Button>}
    >
      {donation.donorId && (
        <ThanksLetterForm
          id={donation.donorId._id}
          name={donation.donorId.name}
          address={donation.donorId.address}
          amount={donation.amount}
        />
      )}
    </Modal>
  );
};

export default ThanksLetterModal;
