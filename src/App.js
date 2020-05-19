import React from 'react';
import './App.css';
import GroceryList from './components/GroceryList';
import AddGrocery from './components/AddGrocery';

export default class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      groceries: [{ name: "Oranges", votes: 0 }, { name: "Bananas", votes: 0 }]
    }
  }

  handleAddGrocery = (value) => {
    const grocery = this.state.groceries.find(groc => groc.name === value)
    if (!grocery) {
      let groceriesCopy = this.state.groceries;
      groceriesCopy.unshift({name:value, votes:0});
      this.setState({
        groceries : groceriesCopy
      });
    }
  };

  onHandleincreaseVote = (grocery) => {
    let groceriesCopy = this.state.groceries;
    // there is no unique thing that's why I search it by name, but it is not a good practice
    let groc = groceriesCopy.find (groc => groc.name === grocery.name)
    ++groc.votes;
    this.setState({
      groceries: groceriesCopy
    })
  }

  onHandleDecreaseVote = (grocery) => {
    let groceriesCopy = this.state.groceries;
    // there is no unique thing that's why I search it by name, but it is not a good practice
    let groc = groceriesCopy.find (groc => groc.name === grocery.name)
    if (groc.votes === 0) return;
    --groc.votes;
    this.setState({
      groceries: groceriesCopy
    })
  }

  render() {
    return (
        <div className="App container">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12 col-sm-8 col-md-8 offset-md-2">
                <h1>Groceries</h1>
                <div className="todo-app">
                  <AddGrocery handleAddGrocery={(value) => {this.handleAddGrocery(value)}}/>
                  <GroceryList groceries={this.state.groceries}
                               increaseVote={this.onHandleincreaseVote}
                               decreaseVote={this.onHandleDecreaseVote}/>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
  }
}
