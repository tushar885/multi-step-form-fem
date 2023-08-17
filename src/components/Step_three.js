import React, { useContext, useState } from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
// import AppContext from "../utils/context/AppContext";
// import PlanTypeContext from "../utils/context/PlanTypeContext";
// import Step_threeContext from "../utils/context/Step_threeContext";
import {
  PlanTypeContext,
  Step_threeContext,
  AppContext,
} from "../utils/combine";

const Step_three = () => {
  const { step, setStep } = useContext(AppContext);
  const { plan } = useContext(PlanTypeContext);
  const {
    step_three_status: {
      addons: { online_service, large_storage, customizable_profile },
    },
    set_step_three,
  } = useContext(Step_threeContext);

  return (
    <Formik
      initialValues={{
        online_service,
        large_storage,
        customizable_profile,
      }}
      onSubmit={(values, formik_bag) => {
        formik_bag.setSubmitting(false);
        set_step_three({ isValid: true, addons: { ...values } });
        setStep(step + 1);
      }}
    >
      {(formik) => {
        return (
          <div className=" flex flex-col gap-4 w-full shadow-md rounded-lg bg-gray-100 px-4 py-6 sm:w-11/12 lg:w-4/5">
            <div>
              <p className="font-bold text-3xl">Pick add-ons</p>
              <p>Add-ons help enhance your gaming experience.</p>
            </div>
            <Form className="flex flex-col gap-4">
              <div
                className={`flex shadow-md rounded-md p-4 items-center gap-4 ${
                  formik.values.online_service
                    ? "border border-blue-900 bg-blue-100 bg-opacity-50"
                    : ""
                } `}
              >
                <Field
                  type="checkbox"
                  name="online_service"
                  id="online_service"
                />
                <label
                  htmlFor="online_service"
                  className="flex items-center grow hover:cursor-pointer"
                >
                  <div className="grow">
                    <p className="font-semibold text-xl ">Online service</p>
                    <p>Access to multiplayer games</p>
                  </div>
                  <p className="text-sm text-blue-800">
                    {plan === "month" ? "+$1/mo" : "+$10/yr"}
                  </p>
                </label>
              </div>
              <div
                className={`flex shadow-md rounded-md p-4 items-center gap-4 ${
                  formik.values.large_storage
                    ? "border border-blue-900 bg-blue-100 bg-opacity-50"
                    : ""
                } `}
              >
                <Field
                  type="checkbox"
                  name="large_storage"
                  id="large_storage"
                />
                <label
                  htmlFor="large_storage"
                  className="flex items-center grow hover:cursor-pointer"
                >
                  <div className="grow">
                    <p className="font-semibold text-xl ">Larger storage</p>
                    <p>Extra 1TB of cloud save</p>
                  </div>
                  <p className="text-sm text-blue-800">
                    {plan === "month" ? "+$2/mo" : "+$20/yr"}
                  </p>
                </label>
              </div>
              <div
                className={`flex shadow-md rounded-md p-4 items-center gap-4 ${
                  formik.values.customizable_profile
                    ? "border border-blue-900 bg-blue-100 bg-opacity-50"
                    : ""
                } `}
              >
                <Field
                  type="checkbox"
                  name="customizable_profile"
                  id="customizable_profile"
                />
                <label
                  htmlFor="customizable_profile"
                  className="flex items-center grow hover:cursor-pointer"
                >
                  <div className="grow">
                    <p className="font-semibold text-xl ">
                      Customizable Profile
                    </p>
                    <p>Custom theme on your profile</p>
                  </div>
                  <p className="text-sm text-blue-800">
                    {plan === "month" ? "+$2/mo" : "+$20/yr"}
                  </p>
                </label>
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
                  disabled={!formik.isValid}
                >
                  {/* {step === 4 ? "Confirm" : "Next Step"} */}
                  Next Step
                </button>
              </div>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default Step_three;
