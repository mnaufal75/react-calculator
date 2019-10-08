import React from 'react';
import Button from './Button.js';
import OpButton from './OpButton.js';
import Screen from './Screen.js';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOne: '0',
      numberTwo: '0',
      answer: '0',
      operation: '',
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleOpInput = this.handleOpInput.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  handleInput(keyPressed) {
    const { numberOne, numberTwo, operation } = this.state;

    this.setState({
      answer: '0',
    });

    if (!operation) {
      if (numberOne === '0') {
        this.setState({
          numberOne: keyPressed,
        });
      } else {
        this.setState({
          numberOne: numberOne + keyPressed,
        });
      }
    } else {
      if (numberTwo === '0') {
        this.setState({
          numberTwo: keyPressed,
        });
      } else {
        this.setState({
          numberTwo: numberTwo + keyPressed,
        });
      }
    }
  }

  calculate(numberOne, numberTwo, operation) {
    let answer = 0;
    if (operation === '+') {
      answer = parseFloat(numberOne) + parseFloat(numberTwo);
    } else if (operation === '-') {
      answer = parseFloat(numberOne) - parseFloat(numberTwo);
    } else if (operation === 'x') {
      answer = parseFloat(numberOne) * parseFloat(numberTwo);
    } else if (operation === '/') {
      answer = parseFloat(numberOne) / parseFloat(numberTwo);
    }
    return answer;
  }

  handleOpInput(keyPressed) {
    const { numberOne, numberTwo, operation, answer } = this.state;

    this.setState({
      answer: '0',
    });

    if (keyPressed === '=') {
      const answer = this.calculate(numberOne, numberTwo, operation);

      this.setState({
        answer: answer.toString(10),
        numberOne: '0',
        numberTwo: '0',
        operation: '',
      });
    } else if (keyPressed === 'c') {
      if (numberTwo === '0') {
        this.setState({ numberOne: '0' });
      } else {
        this.setState({ numberTwo: '0' });
      }
    } else if (keyPressed === '.') {
      if (!operation) {
        if (numberOne === '0') {
          this.setState({
            numberOne: keyPressed,
          });
        } else if (numberOne.includes('.')) {
          
        } else {
          this.setState({
            numberOne: numberOne + keyPressed,
          });
        }
      } else {
        if (numberTwo === '0') {
          this.setState({
            numberTwo: keyPressed,
          });
        } else if (numberTwo.includes('.')) {

        } else {
          this.setState({
            numberTwo: numberTwo + keyPressed,
          });
        }
      }
    } else { // operation == { '+', '-', '*', '/' }
      if (operation) {
        const tempAnswer = this.calculate(numberOne, numberTwo, operation);

        this.setState({
          answer: '0',
          numberOne: tempAnswer.toString(10),
          numberTwo: '0',
          operation: keyPressed,
        });
      } else if (answer !== '0') {
        this.setState({
          answer: '0',
          numberOne: answer.toString(10),
          numberTwo: '0',
          operation: keyPressed,
        });
      } else {
        this.setState({
          operation: keyPressed,
        });
      }
    }
  }

  render() {
    const { numberOne, numberTwo, answer } = this.state;

    return (
      <div id="outer">
        <h3>Calculator using React</h3>
        <div className="inner">
          {(() => {
            if (answer !== '0') {
              return <Screen screen={answer} />;
            } else if (numberTwo === '0') {
              return <Screen screen={numberOne} />;
            } else {
              return <Screen screen={numberTwo} />;
            }
          })()}
        </div>
        <div className="inner">
          <Button keyButton={'7'} action={this.handleInput} />
          <Button keyButton={'8'} action={this.handleInput} />
          <Button keyButton={'9'} action={this.handleInput} />
          <OpButton keyButton={'x'} action={this.handleOpInput} />
        </div>
        <div className="inner">
          <Button keyButton={'4'} action={this.handleInput} />
          <Button keyButton={'5'} action={this.handleInput} />
          <Button keyButton={'6'} action={this.handleInput} />
          <OpButton keyButton={'-'} action={this.handleOpInput} />
        </div>
        <div className="inner">
          <Button keyButton={'1'} action={this.handleInput} />
          <Button keyButton={'2'} action={this.handleInput} />
          <Button keyButton={'3'} action={this.handleInput} />
          <OpButton keyButton={'+'} action={this.handleOpInput} />
        </div>
        <div className="inner">
          <Button keyButton={'0'} action={this.handleInput} />
          <OpButton keyButton={'c'} action={this.handleOpInput} />
          <OpButton keyButton={'/'} action={this.handleOpInput} />
          <OpButton keyButton={'.'} action={this.handleOpInput} />
        </div>
        <div className="inner">
          <OpButton keyButton={'='} action={this.handleOpInput} />
        </div>
      </div>
    );
  }
}

export default App;
