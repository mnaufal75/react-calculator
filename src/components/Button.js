import React from 'react';
import './Button.css'

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  handleOnClick(keyPressed) {
    this.props.action(keyPressed);
  }

  render() {
    return (
      <button className="btn" onClick={this.handleOnClick.bind(this, this.props.keyButton)}>
        {this.props.keyButton}
      </button>
    );
  }
}

export default Button;
