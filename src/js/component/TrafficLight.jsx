import React from "react";

const TrafficLight = () => {
  return (
    <div className="row d-flex justify-content-center">
      <div
        className="bg-black"
        style={{ height: "150px", width: "70px" }}
      ></div>
      <div className="row d-flex justify-content-center">
        <div className="col-1 d-flex flex-column justify-content-center bg-black rounded">
          <button
            type="button"
            className="btn btn-danger m-3 rounded-circle"
            style={{ height: "150px" }}
          ></button>
          <button
            type="button"
            className="btn btn-warning m-3 rounded-circle"
            style={{ height: "150px" }}
          ></button>
          <button
            type="button"
            className="btn btn-success m-3 rounded-circle"
            style={{ height: "150px" }}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default TrafficLight;
