import React, { useEffect, useState } from "react";
import TrafficLight from "./TrafficLight";
import TrafficLightPurple from "./TrafficLightPurple";

//create your first component
const Home = () => {
  const [isPurple, setIsPurple] = useState(true);
  useEffect(() => {}, [isPurple]);
  return (
    <div>
      {isPurple ? <TrafficLight /> : <TrafficLightPurple />}
      <div className="row d-flex justify-content-center">
        <div className="col-6 d-flex justify-content-center m-3">
          {isPurple ? (
            <button
              onClick={() => setIsPurple(!isPurple)}
              type="button"
              className="btn text-white px-5 "
              style={{ backgroundColor: "#940fd2" }}
            >
              Añadir Morado
            </button>
          ) : (
            <button
              onClick={() => setIsPurple(!isPurple)}
              type="button"
              className="btn text-white px-5"
              style={{ backgroundColor: "#940fd2" }}
            >
              Eliminar purple
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
