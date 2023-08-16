import { createContext } from "react";

const Step_threeContext = createContext({
  isValid: true,
  addons: {
    online_service: false,
    large_storage: false,
    customizable_profile: false,
  },
});

export default Step_threeContext;
