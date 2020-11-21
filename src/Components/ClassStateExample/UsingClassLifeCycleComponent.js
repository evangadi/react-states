import React, { Component } from "react";

class UsingClassLifeCycleComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    document.title = `Count: ( ${this.state.count} )`;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    // We can use conditional statements in here to run the title update only if the count value has changed
    // Helpful when there are multiple update functionalities that are implemented
    // console.log(prevState.count);
    if (prevState.count != this.state.count) {
      document.title = `Count: ( ${this.state.count} )`;
    }
  }

  render() {
    console.log("Render");
    return (
      <div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Count {this.state.count}
        </button>
      </div>
    );
  }
}

export default UsingClassLifeCycleComponent;
