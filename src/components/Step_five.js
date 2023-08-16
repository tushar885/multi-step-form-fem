import React from "react";
import thank_icon from "../../assets/images/icon-thank-you.svg";

const Step_five = () => {
  return (
    <div className=" flex flex-col gap-4 w-full items-center shadow-md rounded-lg bg-gray-100 px-4 py-16  sm:w-11/12 lg:w-4/5 ">
      <img src={thank_icon} className="mb-3" />
      <p className="font-bold text-3xl">Thank you!</p>
      <p className="text-center">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default Step_five;
