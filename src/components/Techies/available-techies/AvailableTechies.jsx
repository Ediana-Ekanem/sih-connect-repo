// importing hooks
import useFetch from "../../../hooks/useFetch";

//importing components
import LoadingSpinner from "../../UI/LoadingSpinner";
import TechiesCard from "../TechiesCard";
import Button from "../../UI/Button";

//url for data transfer
const url = "https://starthubconnect.adaptable.app/user/latest-members";

const AvailableTechies = () => {
  //fetching data using imported Hook
  const { data, isPending, error } = useFetch(url);

  if (data) console.log(data);

  return (
    <section className="bg-[#f6f8fe] flex flex-col justify-center text-center items-center py-[3rem]">
      <h2 className=" flex  justify-center text-center items-center font-[500] text-[40px]">
        Avialable techies
      </h2>
      {data && !isPending && !error && (
        <div className="flex flex-wrap justify-center items-center py-5  gap-[18px]">
          {data.items.slice(0, 12).map((item) => {
            return <TechiesCard key={item.id} {...item} />;
          })}
        </div>
      )}
      {isPending && !error && !data && <LoadingSpinner />}
      {error && !isPending && !data && <h1>Error Loading Data</h1>}

      {data && <Button border={"2px solid #687eb6"}>See more</Button>}
    </section>
  );
};

export default AvailableTechies;
