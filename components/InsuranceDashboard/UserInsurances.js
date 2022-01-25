import Link from "next/link";

const UserInsurances = ({ insurance }) => {
  //Renders the data fetched by InsuranceDashboard
  return (
    <div className="mx-auto bg-blue-pale flex flex-col justify-center font-libre bg-white py-4 px-4 w-full mx-auto rounded-[22px]">
      <h2 className="font-bold mb-3 text-[20px] md:text-[26px] lg:text-[30px]">
        {insurance.title}
      </h2>
      <h3 className="font-semibold mb-3 text-[18px] lg:text-[22px]">
        {insurance.preamble}
      </h3>
      <p>{insurance.body}</p>
      <Link href={insurance.url}>
        <a target="_blank">
          <button className="rounded-[22px] bg-white py-2 px-7 text-pink-brand text-[16px] md:text-[18px] lg:text-[22px] mt-3">
            Läs mer
          </button>
        </a>
      </Link>
    </div>
  );
};

export default UserInsurances;
