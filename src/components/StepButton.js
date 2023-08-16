import React, { useContext } from "react";
import AppContext from "../utils/context/AppContext";

const StepButton = ({ index, desc }) => {
  const { step, setStep } = useContext(AppContext);

  return (
    <div className="flex gap-4 justify-start items-center">
      <div
        className={`${
          step === index
            ? "bg-[hsl(205,91%,87%)] text-blue-950 border-[hsl(205,91%,87%)] font-bold"
            : "text-white border-white"
        } rounded-full h-9 w-9 border   flex justify-center items-center`}
      >
        <span className="font-[500] hover:cursor-pointer">{index}</span>
      </div>
      <div className="text-sm  flex-col hidden sm:flex ">
        <div>
          <span className="text-xs text-[hsl(248,100%,91%)]">STEP {step}</span>
        </div>
        <div className="font-bold text-[hsl(247,66%,90%)] tracking-wider">
          <span>{desc}</span>
        </div>
      </div>
    </div>
  );
};

export default StepButton;
