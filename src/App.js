import React, { Component } from "react";
import "./App.scss";
import CardCars from "./Components/Cars/CardCars";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import Counter from "./Components/Count/Count";

class App extends Component {
  constructor(p) {
    super(p);
    this.state = {
      cars: [
        { name: "Maybah", year: "2021", color: "black" },
        { name: "Ford", year: "2015", color: "blue" },
        { name: "Audi", year: "2012", color: "grey" },
      ],
      titlePage: "Title of cars",
      toggleCard: false,
    };
  }

  handlerToggleCards = () => {
    this.setState({
      toggleCard: !this.state.toggleCard,
    });
  };

  // ====target-input====
  onChangeHandler = (e) => {
    this.setState({
      titlePage: e.target.value,
    });
  };
  // ====change-title====
  titleChangeHandler = (newTitle) => {
    this.setState({
      titlePage: newTitle,
    });
  };

  // ===onHandlerName===
  onHandlerName = (name, index) => {
    let car = this.state.cars[index];
    car.name = name;
    let cars = [...this.state.cars];
    cars[index] = car;
    this.setState({
      cars: cars,
    });
  };

  // =======
  onDeleted = (index) => {
    const cars = this.state.cars.concat();
    cars.splice(index, 1);
    this.setState({
      cars: cars,
    });
  };

  render() {
    // 70% рандома ошибки
    // if(Math.random()>0.7){
    //   throw new Error('Car random failed')
    // }
    const divStyle = {
      textAlign: "center",
      padding: "10px",
      marginRight: "10px",
    };
    // ======
    let CardsCar = this.state.toggleCard
      ? this.state.cars.map((car, index) => {
          return (
            <ErrorBoundary key={index}>
              <CardCars
                onChangeClick={() => this.titleChangeHandler(car.name)}
                car={car.name}
                year={car.year}
                color={car.color}
                onChangeName={(event) =>
                  this.onHandlerName(event.target.value, index)
                }
                onHandlerDel={this.onDeleted.bind(this, index)}
              />
            </ErrorBoundary>
          );
        })
      : null;

    return (
      <div style={divStyle}>
        {/* <h1 onClick={this.titleChangeHandler.bind(this, "Changed!")}>
          {this.state.titlePage}
        </h1> */}
        <h1>{this.props.title}</h1>
        <button onClick={this.handlerToggleCards}>Toggle Btn</button>
        <br />
        <br />
        <div className="card-car">
          <div className="card-item" style={{ width: 400, margin: "auto" }}>
            {CardsCar}
          </div>
        </div>
        {<Counter />}
        {<Counter />}
        {<Counter />}
      </div>
    );
  }
}
export default App;
