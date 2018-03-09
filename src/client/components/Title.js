import React, {Component} from 'react';

class Title extends Component {
  render() {
   let title;
    if (this.props.location.pathname === '/'){
      title = 'Greeting';
    } else {
      title = this.props.location.pathname.replace('/', ' ').trim()
    }

    return (
      <h3 className="title">
        {title}
      </h3>
    )
  }
}

export default Title;
