import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import {SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      monsters: [],
      searchTerm: '',
    }  
    //this.handleChange = this.handleChange.bind(this)
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users=> this.setState({monsters: users}))
  }

  //handleChange(e) {
  handleChange = e => {
    this.setState({ searchTerm: e.target.value })
  }

  render() {
    const { searchTerm, monsters } = this.state;
    const filterdResult = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    return (
      <div className="App">      
        <h1> Monster Rolodex</h1>  
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filterdResult} />          
      </div>
    );
  }  
}

export default App;
