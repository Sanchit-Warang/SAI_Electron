import DonorListItem from "@renderer/components/Donor/DonorListItem";
import { Donor } from "@renderer/types";
import { cn } from "@renderer/lib/utils";

type DonorListProps = {
  className?: string;
  donors: Donor[];
};

const DonorList = ({ className = "", donors }: DonorListProps) => {
  return (
    <div className={cn("overflow-y-auto", className)}>
      {donors.map((donor, i) => (
        <DonorListItem
          className={(cn(), i % 2 === 0 ? "bg-muted/20" : "")}
          key={donor._id}
          donor={donor}
        />
      ))}
    </div>
  );
};

export default DonorList;
