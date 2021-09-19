import React from "react";
import "../Cars/CardCars.scss";
import Radium from "radium";

const CardCars = (p) => {
  const inputClasses = ["input"];
  // ====динамические классы===
  if (p.car !== "") {
    inputClasses.push("green");
  } else {
    inputClasses.push("red");
  }

  if (p.car.length > 4) {
    inputClasses.push("blue");
  }
  return (
    <div
      // ===radium===
      style={{ ":hover": { backgroundColor: "lightBlue" }, cursor: "pointer" }}
      className="Cars"
    >
      <p className="cars-block">
        Car: <strong> {p.car}</strong>
      </p>
      <p>Year: {p.year}</p>
      <p>Color: {p.color}</p>
      <input
        className={inputClasses.join(" ")}
        type="text"
        onChange={p.onChangeName}
        value={p.car}
      />
      <button onClick={p.onHandlerDel}>Delete</button>
    </div>
  );
};

export default Radium(CardCars);
