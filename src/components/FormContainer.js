import React, { useContext, lazy, Suspense } from "react";
import AppContext from "../utils/context/AppContext";
import Loading from "./Loading";

const Step_one = lazy(() => import("./Step_one"));
const Step_two = lazy(() => import("./Step_two"));
const Step_three = lazy(() => import("./Step_three"));
const Step_four = lazy(() => import("./Step_four"));
const Step_five = lazy(() => import("./Step_five"));

const FormContainer = () => {
  const { step } = useContext(AppContext);
  function renderForm(step) {
    switch (step) {
      case 1:
        return (
          <Suspense fallback={<Loading />}>
            <Step_one />
          </Suspense>
        );
        break;
      case 2:
        return (
          <Suspense fallback={<Loading />}>
            <Step_two />
          </Suspense>
        );
        break;
      case 3:
        return (
          <Suspense fallback={<Loading />}>
            <Step_three />
          </Suspense>
        );
        break;
      case 4:
        return (
          <Suspense fallback={<Loading />}>
            <Step_four />
          </Suspense>
        );
        break;
      case 5:
        return (
          <Suspense fallback={<Loading />}>
            <Step_five />
          </Suspense>
        );
        break;

      default:
        return (
          <Suspense fallback={<Loading />}>
            <Step_one />
          </Suspense>
        );
        break;
    }
  }
  return (
    <div className="px-5 w-full z-10 sm:grow mx-auto flex justify-center">
      {renderForm(step)}
    </div>
  );
};

export default FormContainer;
