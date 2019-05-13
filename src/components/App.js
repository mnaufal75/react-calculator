import React from "react";
import Button from "./Button.js";
import OpButton from "./OpButton.js";
import Screen from "./Screen.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOne: "",
      numberTwo: "",
      operation: ""
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleOpInput = this.handleOpInput.bind(this);
  }

  handleInput(keyPressed) {
    if (!this.state.operation) {
      this.setState({
        numberOne: this.state.numberOne + keyPressed
      });
    } else {
      this.setState({
        numberTwo: this.state.numberTwo + keyPressed
      });
    }
  }

  handleOpInput(keyPressed) {
    const { numberOne, numberTwo, operation } = this.state;

    if (keyPressed === "=") {
      let answer = 0;
      if (operation === "+") {
        answer = parseInt(numberOne) + parseInt(numberTwo);
      } else if (operation === "-") {
        answer = parseInt(numberOne) - parseInt(numberTwo);
      }

      this.setState({
        numberOne: answer,
        numberTwo: "",
        operation: ""
      });
    } else {
      this.setState({
        operation: keyPressed
      });
    }
  }

  render() {
    return (
      <>
        <h2>Calculator using React</h2>
        <Screen
          screen={
            this.state.numberTwo ? this.state.numberTwo : this.state.numberOne
          }
        />
        <Button keyButton={1} action={this.handleInput} />
        <Button keyButton={2} action={this.handleInput} />
        <Button keyButton={3} action={this.handleInput} />
        <Button keyButton={4} action={this.handleInput} />
        <Button keyButton={5} action={this.handleInput} />
        <Button keyButton={6} action={this.handleInput} />
        <Button keyButton={7} action={this.handleInput} />
        <Button keyButton={8} action={this.handleInput} />
        <Button keyButton={9} action={this.handleInput} />
        <OpButton keyButton={"+"} action={this.handleOpInput} />
        <OpButton keyButton={"-"} action={this.handleOpInput} />
        <OpButton keyButton={"="} action={this.handleOpInput} />
      </>
    );
  }
}

export default App;
