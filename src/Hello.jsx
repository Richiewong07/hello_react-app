import React, { Component } from 'react' ;

class Hello extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>{this.props.name}</div>
  }
}

export default Hello;
