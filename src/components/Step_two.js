import React, { useContext } from "react";
import PlanWrapper from "./PlanWrapper";
import arcade_icon from "../../assets/images/icon-arcade.svg";
import advanced_icon from "../../assets/images/icon-advanced.svg";
import pro_icon from "../../assets/images/icon-pro.svg";
// import AppContext from "../utils/context/AppContext";
// import PlanTypeContext from "../utils/context/PlanTypeContext";
// import Step_twoContext from "../utils/context/Step_twoContext";
import { PlanTypeContext, Step_twoContext, AppContext } from "../utils/combine";

const Step_two = () => {
  const { step, setStep } = useContext(AppContext);
  const { plan, setPlan } = useContext(PlanTypeContext);
  const {
    step_two_status: { isValid, curr_value },
    set_step_two,
  } = useContext(Step_twoContext);

  function changeCurr_value(v) {
    set_step_two({ isValid: true, curr_value: v });
  }

  return (
    <div className="flex flex-col w-full shadow-md rounded-lg bg-gray-100 px-4 py-6 gap-4 sm:w-11/12 lg:w-4/5">
      <div>
        <p className="font-bold text-3xl">Select your plan</p>
        <p>You have the option of monthly or yearly billing.</p>
      </div>
      <div className="flex flex-col gap-4">
        <PlanWrapper
          icon={arcade_icon}
          title={"Arcade"}
          price={{ monthly: "$9/mo", yearly: "$90/yr" }}
          planType={plan}
          selected={curr_value}
          changeCurr_value={changeCurr_value}
        />
        <PlanWrapper
          icon={advanced_icon}
          title={"Advanced"}
          price={{ monthly: "$12/mo", yearly: "$120/yr" }}
          planType={plan}
          selected={curr_value}
          changeCurr_value={changeCurr_value}
        />
        <PlanWrapper
          icon={pro_icon}
          title={"Pro"}
          price={{ monthly: "$15/mo", yearly: "$150/yr" }}
          planType={plan}
          selected={curr_value}
          changeCurr_value={changeCurr_value}
        />
      </div>
      <div className="flex w-full justify-center items-center bg-gray-100 shadow py-4 rounded-lg">
        <span>Monthly</span>
        <div
          className={`mx-4 rounded-xl w-14 h-5 relative bg-blue-900 flex items-center p-1 py-3 hover:cursor-pointer ${
            plan === "year" ? "justify-end" : "justify-start"
          } `}
          onClick={(e) => {
            plan === "month" ? setPlan("year") : setPlan("month");
          }}
        >
          <div
            className={`relative h-4 w-4 rounded-full bg-white hover:cursor-pointer `}
            onClick={(e) => {
              plan === "month" ? setPlan("year") : setPlan("month");
            }}
          ></div>
        </div>
        <span>Yearly</span>
      </div>
      <div className=" flex justify-between p-4 bg-gray-100 w-full border-t-2">
        {step > 1 ? (
          <button
            className="font-semibold"
            onClick={(e) => {
              setStep(step - 1);
            }}
          >
            {" "}
            Go Back
          </button>
        ) : null}
        <button
          className="py-2 px-4 bg-[hsl(210,100%,17%)] text-white font-bold rounded-md ml-auto disabled:cursor-not-allowed disabled:opacity-50"
          type="submit"
          disabled={!isValid}
          onClick={() => setStep(step + 1)}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Step_two;
