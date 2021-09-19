import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  onHandlePlus = () => {
    this.setState((prevState) => {
      console.log("[prevState]", prevState);
      return {
        counter: prevState.counter + 1,
      };
    });
  };

  render() {
    if (this.state.counter === -1 || this.state.counter === 10) {
      this.setState({
        counter: 0,
      });
    }
    return (
      <>
        <h1 key="1">{this.state.counter}</h1>
        <button key="2" onClick={this.onHandlePlus}>
          +
        </button>
        <button
          key="3"
          onClick={() => this.setState({ counter: this.state.counter - 1 })}
        >
          -
        </button>
      </>
    );
  }

  //     return [
  //       <h1 key="1">{this.state.counter}</h1>,
  //       <button key="2" onClick={this.onHandlePlus}>
  //         +
  //       </button>,
  //       <button key="3" onClick={this.onHandleMinuse}>
  //         -
  //       </button>,
  //     ];
  //   }
}

export default Counter;
