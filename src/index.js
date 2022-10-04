import React, { useState } from "react";
import { render } from "react-dom";
import useMapbox from "./useMapbox.js";
import "./output.css";

function App() {
  const [random, setRandom] = useState(Math.random());

  useMapbox();

  return (
    <>
      <button className="m-2.5 bg-primary text-white border-0 py-4 px-5 min-w-[150]
    text-base rounded cursor-pointer transition-opacity duration-200 ease-out shadow-[1px_1px_1px_rgba(0,0,0,0.2)]
     hover:opacity-80 disabled:opacity-40 disabled:cursor-not-allowed
     active:shadow-[0_0px_rgba(0,0,0,0.2)] active:translate-y-px" id="rerender" onClick={() => setRandom(Math.random())}>
        Ререндер!
      </button>
      <div id="map"></div>
    </>
  );
}

render(<App />, document.querySelector("#root"));
