import React, { Component } from 'react' ;
import Hello from './Hello';

class HelloList extends Component {
  constructor(props) {
    super(props);


    this.state = {
      people: [
        {id: 1, name: 'Richie', age: 24},
        {id: 2, name: 'Timmy', age: 19},
        {id: 3, name: 'Jimmy', age: 20},
        {id: 4, name: 'Ann', age: 24},
        {id: 5, name: 'Kim', age: 22}
      ]
    }
  }

  render() {
    return <ul>
      {this.state.people.map((person) =>
        <li key={person.id}>
          <Hello name={person.name}/>
        </li>
      )}
    </ul>
  }
}

export default HelloList;
