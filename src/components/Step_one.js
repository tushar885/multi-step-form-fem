import React, { useContext } from "react";
import { ErrorMessage, Field, Formik, Form } from "formik";
import validateStep_one from "../utils/validations/validateStep_one";
import Step_oneContext from "../utils/context/Step_oneContext";
import AppContext from "../utils/context/AppContext";
import { formatNumber } from "../utils/helper";

const Step_one = () => {
  const { step, setStep } = useContext(AppContext);
  const {
    step_one_status: {
      isValid,
      curr_values: { name, email, phone_number },
    },
    set_step_one,
  } = useContext(Step_oneContext);

  return (
    <Formik
      initialValues={{ name, email, phone_number }}
      validationSchema={validateStep_one}
      // This "validateOnMount" important for the checking of validation on the first render
      // before any touching is done it will enable us to set the submit button to disable on
      // the first render it self, using the isValid option, see this : https://formik.org/docs/migrating-v2#isvalid,
      //  you could have achieved the same using "dirty" as shown in the link.
      validateOnMount={true}
      onSubmit={(values, formik_bag) => {
        formik_bag.setSubmitting(false);
        set_step_one({ isValid: true, curr_values: { ...values } });
        setStep(step + 1);
      }}
    >
      {(formik) => {
        return (
          <div className=" flex flex-col gap-4 w-full shadow-md rounded-lg bg-gray-100 px-4 py-6 sm:w-11/12 lg:w-4/5 ">
            <div>
              <p className="font-bold text-3xl">Personal info</p>
              <p>Please provide your name, email address, and phone number.</p>
            </div>
            <Form className="flex flex-col gap-4">
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="name" className="text-sm ">
                  Name
                </label>
                <Field
                  type="text"
                  name="name"
                  id="name"
                  placeholder="e.g. Stephen King"
                  className="py-2 px-4 rounded-md border border-black focus:outline-0"
                />
                <ErrorMessage
                  name="name"
                  className="font-semibold text-red-700"
                  component="div"
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="email" className="text-sm">
                  Email Address
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="e.g. stephenking@lorem.com"
                  className="py-2 px-4 rounded-md border border-black focus:outline-0"
                />
                <ErrorMessage
                  name="email"
                  className="font-semibold text-red-700"
                  component="div"
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="phone_number" className="text-sm">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone_number"
                  name="phone_number"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder="e.g. 012-345-6789"
                  onInput={formatNumber}
                  {...formik.getFieldProps("phone_number")}
                  className="py-2 px-4 rounded-md border border-black focus:outline-0"
                />
                <ErrorMessage
                  name="phone_number"
                  className="font-semibold text-red-700"
                  component="div"
                />
              </div>

              <div className=" flex justify-end p-4 bg-gray-100 w-full border-t-2">
                <button
                  className="py-2 px-4 bg-[hsl(210,100%,17%)] text-white font-bold rounded-md ml-auto disabled:cursor-not-allowed disabled:opacity-50"
                  type="submit"
                  disabled={!formik.isValid}
                >
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

export default Step_one;
