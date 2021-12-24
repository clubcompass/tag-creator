import React, { useState } from "react";
import { Tag } from "./components";
import { Options } from "./components/interface/Options";
import { Output } from "./components/Output";

function App() {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] items-center justify-center">
      <Options />
    </div>
  );
}

export default App;
