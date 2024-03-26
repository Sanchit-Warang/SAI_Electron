import SearchInput from "@renderer/components/ui/SearchInput";
import DonorList from "@renderer/components/Donor/DonorList";
import { useGetDonorsQuery } from "@renderer/hooks/api/donorApi";

import { LoadingSpinner } from "@renderer/components/ui/loadingSpinner";

import AddDonorModal from "@renderer/components/Donor/AddDonorModal";
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
        <>
          <p>{donors.data.length} donors</p>
          <DonorList
            className="my-2 divide-y border-2 rounded-md scrollbar scrollbar-thumb-primary scrollbar-track-primary/20 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
            donors={donors.data}
          />
        </>
      );
    }
    return <>{"No Results"}</>;
  };

  return (
    <>
      <div className="h-[100vh] w-full py-10  flex flex-col ">
        <div className="flex gap-10">
          <SearchInput
            placeholder="Search Name"
            className="w-[30%] bg-card"
            defaultValue={queryName}
            onChange={(e) => {
              setQueryName(e.target.value);
            }}
          />
          <SearchInput
            placeholder="Search Identification number"
            className="w-[30%] bg-card"
            type="text"
            defaultValue={queryNumber}
            onChange={(e) => {
              setQueryNumber(e.target.value.toString());
            }}
          />
        </div>

        <div className="my-2 text-2xl font-semibold">
          <p>Donor List</p>
        </div>
        {donorListJSX()}
        <div className="flex justify-start mt-4">
          <AddDonorModal name={queryName}/>
        </div>
      </div>
    </>
  );
};

export default DonorListScreen;
