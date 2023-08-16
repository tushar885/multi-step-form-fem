import React, { useState } from "react";
import FormSteps from "./FormSteps";
import FormContainer from "./FormContainer";
import Step_oneContext from "../utils/context/Step_oneContext";
import PlanTypeContext from "../utils/context/PlanTypeContext";
import Step_twoContext from "../utils/context/Step_twoContext";
import Step_threeContext from "../utils/context/Step_threeContext";

const MainBody = () => {
  const [step_one_status, set_step_one] = useState({
    isValid: false,
    curr_values: {
      email: "",
      name: "",
      phone_number: "",
    },
  });

  const [plan, setPlan] = useState("month");

  const [step_two_status, set_step_two] = useState({
    isValid: true,
    curr_value: "arcade",
  });

  const [step_three_status, set_step_three] = useState({
    isValid: true,
    addons: {
      online_service: false,
      large_storage: false,
      customizable_profile: false,
    },
  });

  return (
    <div className="flex flex-col w-full items-center h-full mx-auto sm:flex-row  sm:grow">
      <FormSteps />
      <Step_oneContext.Provider value={{ step_one_status, set_step_one }}>
        <PlanTypeContext.Provider value={{ plan, setPlan }}>
          <Step_twoContext.Provider value={{ step_two_status, set_step_two }}>
            <Step_threeContext.Provider
              value={{ step_three_status, set_step_three }}
            >
              <FormContainer />
            </Step_threeContext.Provider>
          </Step_twoContext.Provider>
        </PlanTypeContext.Provider>
      </Step_oneContext.Provider>
    </div>
  );
};

export default MainBody;
