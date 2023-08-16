import { createContext } from "react";

const PlanTypeContext = createContext({
  plan: "month",
});

export default PlanTypeContext;
