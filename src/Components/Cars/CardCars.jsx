import React from "react";
import "../Cars/CardCars.scss";
import Radium from "radium";

class CardCars extends React.Component {
  // componentDidMount(){
  //   console.log('componentDidMount');
  // }
  // shouldComponentUpdate(nexProps, nextState){
  //   console.log('shouldComponentUpdate', nexProps);
  //   return true
  // }
  // componentDidUpdate(nexProps, nextState){
  //   console.log('componentDidUpdate',nexProps);
  // }
  // componentWillUnmount(nexProps, nextState){
  //  console.log('componentWillUnmount',nextState);
  // }

  render() {
    const inputClasses = ["input"];
    // ====динамические классы===
    if (this.props.car !== "") {
      inputClasses.push("green");
    } else {
      inputClasses.push("red");
    }

    if (this.props.car.length > 4) {
      inputClasses.push("blue");
    }
    return (
      <div
        // ===radium===
        style={{
          ":hover": { backgroundColor: "lightBlue" },
          cursor: "pointer",
        }}
        className="Cars"
      >
        <p className="cars-block">
          Car: <strong> {this.props.car}</strong>
        </p>
        <p>Year: {this.props.year}</p>
        <p>Color: {this.props.color}</p>
        <input
          className={inputClasses.join(" ")}
          type="text"
          onChange={this.props.onChangeName}
          value={this.props.car}
        />
        <button onClick={this.props.onHandlerDel}>Delete</button>
      </div>
    );
  }
}

export default Radium(CardCars);
