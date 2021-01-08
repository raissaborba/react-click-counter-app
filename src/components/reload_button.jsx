import React, { Component } from 'react';

class ReloadButton extends Component {
  handleClick = (event) => {
    window.location.reload()
    })
  }

  render() {
    return (
        <div className="reload-btn">
          <button className="btn btn-primary" onClick={this.handleClick} />
        </div>
    );
  }
}

export default ReloadButton;
