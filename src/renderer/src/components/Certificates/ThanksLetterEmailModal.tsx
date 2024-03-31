import Modal from "../ui/Modal";
import ThanksLetterEmailForm from "./ThanksLetterEmailForm";
import { Button } from "../ui/button";
import { Donation } from "@renderer/types";
import { cn } from "@renderer/lib/utils";

type Props = {
  donation: Donation;
  className?: string;
};

const ThanksLetterEmailModal = ({ donation, className = "" }: Props) => {
    return (
        <div>
        <Modal
          trigger={
            <Button className={cn("bg-primary w-[6rem]", className)}>
              Thanks Letter
            </Button>
          }
        >
          {donation.donorId && (
            <ThanksLetterEmailForm
              id={donation.donorId._id}
              name={donation.donorId.name}
              address={donation.donorId.address}
              amount={donation.amount}
            />
          )}
        </Modal>
      </div>
    );
};

export default ThanksLetterEmailModal;