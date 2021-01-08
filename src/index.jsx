import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      clicked: false
    };
  }

  handleClick = (event) => {
    this.setState({
      count: this.state.count + 1,
      clicked: true
    });
  }

  render() {
    return (
      <div className="clickable" id={this.state.clicked ? "active" : null} onClick={this.handleClick}>
        <i className="fas fa-hand-point-up"></i>
        <h3>{this.state.count}</h3>
      </div>
    );
  }
}

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Counter />, root);
}
