import React, {Component} from 'react';

class Title extends Component {
  render() {
    return (
      <h3 className="title">
        {this.props.location.pathname.replace('/', ' ').trim()}
      </h3>
    )
  }
}

export default Title;
