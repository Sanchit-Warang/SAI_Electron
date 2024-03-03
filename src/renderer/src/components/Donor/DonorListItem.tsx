import { cn } from "@renderer/lib/utils";
import { Donor } from "@renderer/types";
// import {
//   Avatar,
//   AvatarFallback,
//   AvatarImage,
// } from "@renderer/components/ui/avatar";

type DonorListItemProps = {
  className?: string;
  donor: Donor;
};

const DonorListItem = ({ className = "", donor }: DonorListItemProps) => {
  return (
    <div className={cn("flex items-center p-0 space-x-2 py-2 px-2", className)}>
      {/* <Avatar>
        <AvatarImage src="https://avatars.githubusercontent.com/u/124599?v=4" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar> */}
      <div>
        <p className="text-lg">{donor.name}</p>
        <div className="flex text-md font-medium text-muted-foreground">
          {`Birth Date: ${donor.birthDate} • Email: ${donor.email} • Contact: ${donor.contactNo} • Identification no: ${donor.identificationNo}`}
        </div>
      </div>
    </div>
  );
};

export default DonorListItem;
