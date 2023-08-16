import React, { useContext, useState } from "react";
import Background_img from "./Background_img";
import MainBody from "./MainBody.js";
import AppContext from "../utils/context/AppContext";

const App = () => {
  const [step, setStep] = useState(1);

  return (
    <AppContext.Provider value={{ step, setStep }}>
      <div className="font-ubuntu  h-full w-full relative sm:flex  sm:shadow-md sm:max-w-5xl mx-auto sm:p-4 max-h-[700px]">
        <Background_img />
        <MainBody />
      </div>
    </AppContext.Provider>
  );
};

export default App;
