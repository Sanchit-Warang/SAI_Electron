import SearchInput from "@renderer/components/ui/SearchInput";
import DonorList from "@renderer/components/Donor/DonorList";
import { useGetDonorsQuery } from "@renderer/hooks/api/donorApi";
import { Button } from "@renderer/components/ui/button";
import { LoadingSpinner } from "@renderer/components/ui/loadingSpinner";
import { Link } from "react-router-dom";
import { useDebouncedState } from "@mantine/hooks";

const DonorListScreen = () => {
  const [queryName, setQueryName] = useDebouncedState("", 200);
  const [queryNumber, setQueryNumber] = useDebouncedState("", 200);
  const donors = useGetDonorsQuery({
    name: queryName,
    identificationNo: queryNumber,
  });

  const donorListJSX = () => {
    if (donors.isLoading) {
      return <LoadingSpinner className={"my-5 mx-auto"} />;
    } else if (donors.isError) {
      return <>Error</>;
    } else if (donors.data) {
      return (
        <DonorList
          className=" my-5 divide-y border-2 rounded-md scrollbar scrollbar-thumb-primary scrollbar-track-primary/20 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
          donors={donors.data}
        />
      );
    }
    return <>{'No Results'}</>;
  };

  return (
    <div className="md:w-full  lg:w-[60%]  mx-auto border-x-2 pt-7 h-[93vh] p-3 flex flex-col ">
      <SearchInput
        placeholder="Search Name"
        className="w-[50%]"
        defaultValue={queryName}
        onChange={(e) => {
          setQueryName(e.target.value);
        }}
      />
      <SearchInput
        placeholder="Search Identification number"
        className="w-[50%]"
        type="number"
        defaultValue={queryNumber}
        onChange={(e) => {
          setQueryNumber(e.target.value.toString());
        }}
      />
      <Link to="/">
        <Button className="bg-primary w-[6rem]">Button</Button>
      </Link>
      {donorListJSX()}
    </div>
  );
};

export default DonorListScreen;
