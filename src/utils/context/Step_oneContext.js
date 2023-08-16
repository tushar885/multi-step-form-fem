import { createContext } from "react";

const Step_oneContext = createContext({
  isValid: false,
  curr_values: {
    email: "",
    name: "",
    phone_number: "",
  },
});

export default Step_oneContext;
