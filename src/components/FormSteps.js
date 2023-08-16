import React, { useContext } from "react";
import StepButton from "./StepButton";

const description = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];

const FormSteps = () => {
  return (
    <div className="w-full flex gap-5 justify-center py-8 sm:flex-col  sm:w-[274px] sm:absolute sm:left-4 sm:top-4 sm:px-8 sm:py-10 sm:gap-6">
      {new Array(4).fill("").map((val, index) => {
        return (
          <StepButton key={index} index={index + 1} desc={description[index]} />
        );
      })}
    </div>
  );
};

export default FormSteps;
