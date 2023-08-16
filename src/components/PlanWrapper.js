import React from "react";

const PlanWrapper = ({
  icon,
  title,
  price,
  planType,
  selected,
  changeCurr_value,
}) => {
  return (
    <div
      className={`flex shadow-md rounded-md p-4 items-center gap-4 hover:cursor-pointer ${
        selected === title.toLowerCase()
          ? "border border-blue-900 bg-blue-100 bg-opacity-50"
          : ""
      } `}
      onClick={() => changeCurr_value(title.toLowerCase())}
    >
      <div className="h-min align-top">
        <img src={icon} alt={title.toLowerCase()} className="w-auto h-auto" />
      </div>
      <div className="flex flex-col grow">
        <p className="font-semibold text-xl ">{title}</p>
        <div className="flex justify-between items-center">
          <p className="">
            {planType === "month" ? price.monthly : price.yearly}{" "}
          </p>
          {planType === "year" ? (
            <p className="text-sm text-blue-700 align-middle ml-auto text-end">
              *2 months free
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default PlanWrapper;
