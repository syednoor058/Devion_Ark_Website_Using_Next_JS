import { GrTopCorner } from "react-icons/gr";

function PortfolioCard({ amount, text }) {
  return (
    <div className="flex flex-row leading-none">
      <div className="text-[3vw] text-lightPrimary">
        <GrTopCorner />
      </div>
      <div className="flex flex-col gap-3 py-5">
        <h3 className="text-[4vw] font-semibold font-roboto">{amount}+</h3>
        <p className="">{text}</p>
      </div>
    </div>
  );
}

function Portfolio() {
  return (
    <div className="bg-accentColor text-darkSecondary py-10 px-20 flex justify-center">
      <div className="w-[65%] flex flex-row gap-7">
        <PortfolioCard
          amount="3"
          text="Years of experienced specialists' team."
        />
        <PortfolioCard amount="20" text="Projects completed successfully." />
        <PortfolioCard
          amount="12"
          text="Satisfied clients all over the world."
        />
      </div>
    </div>
  );
}

export default Portfolio;
