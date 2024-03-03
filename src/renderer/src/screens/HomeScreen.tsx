import SearchInput from "@renderer/components/ui/SearchInput";
import DonorList from "@renderer/components/Donor/DonorList";
import { useGetDonorsQuery } from "@renderer/hooks/api/donorApi";
import { Button } from "@renderer/components/ui/button";
import { LoadingSpinner } from "@renderer/components/ui/loadingSpinner";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  const donors = useGetDonorsQuery();

  const donorListJSX = () => {
    if (donors.isLoading) {
      return <LoadingSpinner className={"my-5 mx-auto"} />;
    } else if (donors.data) {
      return (
        <DonorList
          className=" my-5 divide-y border-2 rounded-md scrollbar scrollbar-thumb-primary scrollbar-track-primary/20 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
          donors={donors.data}
        />
      );
    }
    return <></>;
  };

  return (
    <div className="md:w-full  lg:w-[60%]  mx-auto border-x-2 pt-7 h-[93vh] flex flex-col p-3">
      <SearchInput placeholder="Search" className="w-[50%]" />
      <Link to="/">
        <Button className="bg-primary w-[6rem]">Button</Button>
      </Link>
      {donorListJSX()}
    </div>
  );
};

export default HomeScreen;
