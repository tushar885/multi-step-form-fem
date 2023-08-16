import React, { useContext, useState } from "react";
import Step_twoContext from "../utils/context/Step_twoContext";
import Step_threeContext from "../utils/context/Step_threeContext";
import PlanTypeContext from "../utils/context/PlanTypeContext";
import AppContext from "../utils/context/AppContext";
import { pricing } from "../utils/constants";
import { total, renderAddons } from "../utils/helper";

const Step_four = () => {
  const { step, setStep } = useContext(AppContext);
  const { plan } = useContext(PlanTypeContext);
  const { step_two_status } = useContext(Step_twoContext);

  const { step_three_status } = useContext(Step_threeContext);
  const { addons } = step_three_status;

  return (
    <div className=" flex flex-col gap-5 w-full shadow-md rounded-lg bg-gray-100 px-4 py-6 sm:w-11/12 lg:w-4/5 ">
      <p className="font-bold text-3xl">Finishing up</p>
      <p>Double-check everything looks OK before confirming.</p>
      <div className="px-3 py-4 flex flex-col gap-4 bg-slate-200 rounded-lg ">
        <div className="flex justify-between border-b border-black pb-4 items-center">
          <div className="flex flex-col ">
            <p>
              {step_two_status.curr_value.charAt(0).toUpperCase() +
                step_two_status.curr_value.slice(1)}{" "}
              {"( " + plan.charAt(0).toUpperCase() + plan.slice(1) + "ly )"}
            </p>
            <span
              className="text-sm text-blue-800 underline decoration-blue-800 hover:cursor-pointer w-fit"
              onClick={() => {
                setStep(2);
              }}
            >
              Change
            </span>
          </div>
          <p>
            {plan === "month"
              ? `$${pricing[step_two_status.curr_value]}/mo`
              : `$${pricing[step_two_status.curr_value] * 10}/yr`}
          </p>
        </div>

        {renderAddons(addons, plan, pricing)}
      </div>
      <div className="flex justify-between">
        <span>Total (per month)</span>
        <span>{total(plan, addons, step_two_status)}</span>
      </div>

      <div className=" flex justify-end p-4 bg-gray-100 w-full border-t-2">
        <button
          className="py-2 px-4 bg-[hsl(210,100%,17%)] text-white font-bold rounded-md ml-auto "
          type="submit"
          onClick={() => {
            setStep(step + 1);
          }}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Step_four;
