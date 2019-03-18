import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  constructor(){
    super()
    this.state={
      allPizzas: [],
      editPizza: {}
    }
  }

  componentDidMount = () => {
    fetch(`http://localhost:3000/pizzas`)
    .then(resp => resp.json())
    .then(pizzaArr => this.setState({allPizzas:pizzaArr}))
  }

  handleClick = (event) => {
    let arr =this.state.allPizzas
    let targeted = arr.find(pizza => {
    if (pizza.id == event.target.id){
      this.setState({editPizza:{...pizza}}
      )
    }})}

    handleChange = (event) => {
      event.persist
      let y = (this.state)

      this.setState(
        {editPizza: Object.assign(this.state.editPizza, {[event.target.name]:event.target.value })}
      )
    }



    handleSubmit = (event, pizzaObj) => {
      event.persist()
      fetch(`http://localhost:3000/pizzas/${pizzaObj.id}`,{
        method: 'PUT',
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state.editPizza)
      }).then(resp => resp.json())
    .then(newAndImprovedPizza => {
      let pizzaIndex= this.state.allPizzas.findIndex(pizza => pizza.id === newAndImprovedPizza.id)
      let newPizzas= this.state.allPizzas
      newPizzas.splice(pizzaIndex, 1, newAndImprovedPizza)
      this.setState({allPizzas: newPizzas})
      })
    }


  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm
          allPizzas={this.state.allPizzas}
          editPizza={this.state.editPizza}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}/>
        <PizzaList
          allPizzas={this.state.allPizzas}
          onClick={this.handleClick}/>
      </Fragment>
    );
  }
}

export default App;
