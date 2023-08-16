import { pricing } from "./constants";

export function formatNumber(e) {
  let inputValue = e.target.value;
  // Remove all non-digit characters from the input
  inputValue = inputValue.replace(/\D/g, "");
  if (inputValue.length > 0) {
    // Format the input value with dashes or spaces
    inputValue = `${inputValue.slice(0, 3)}-${inputValue.slice(
      3,
      6
    )}-${inputValue.slice(6)}`;
  }
  e.target.value = inputValue;
}

export function format_string(str) {
  let [pa, pb] = str.split("_");

  pa = pa.charAt(0).toUpperCase() + pa.slice(1);
  pb = pb.charAt(0).toUpperCase() + pb.slice(1);

  return pa + " " + pb;
}

export function total(plan, addons, step_two_status) {
  let amt = 0;
  if (plan === "month") {
    for (let addon in addons) {
      addons[addon] ? (amt += pricing[addon]) : (amt += 0);
    }
    amt += pricing[step_two_status.curr_value];
    return `$${amt}/mo`;
  } else {
    for (let addon in addons) {
      addons[addon] ? (amt += pricing[addon] * 10) : (amt += 0);
    }
    amt += pricing[step_two_status.curr_value] * 10;
    return `$${amt}/yr`;
  }
}

export function renderAddons(addons, plan, pricing) {
  return Object.keys(addons).map((addon) => {
    if (!addons[addon]) return;
    return (
      <div key={addon} className="flex justify-between">
        <span>{format_string(addon)}</span>
        <span>
          {plan === "month"
            ? `+$${pricing[addon]}/mo`
            : `+$${pricing[addon] * 10}/yr`}
        </span>
      </div>
    );
  });
}
