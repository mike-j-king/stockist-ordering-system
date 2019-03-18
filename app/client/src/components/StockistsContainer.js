import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';
import Stockist from './Stockist';
import NewStockistForm from './NewStockistForm'

class StockistsContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
        stockists: []
    }
    this.addNewStockist = this.addNewStockist.bind(this)
    this.removeStockist = this.removeStockist.bind(this)
  }

  componentDidMount() {
      axios.get('/api/v1/stockists.json')
      .then(response => {
          console.log(response)
          this.setState({
              stockists: response.data
          })
      })
      .catch(error => console.log(error))
  }

  addNewStockist(name, notes) {
    axios.post( '/api/v1/stockists', { stockist: {name, notes} })
    .then(response => {
        console.log(response)
        const stockists = [ ...this.state.stockists, response.data ]
        this.setState({stockists})
    })
    .catch(error => {
        console.log(error)
    })
  }

  removeStockist(id) {
    axios.delete( '/api/v1/stockists/' + id )
    .then(response => {
        const stockists = this.state.stockists.filter(
            stockist => stockist.id !== id
        )
        this.setState({stockists})
    })
    .catch(error => console.log(error))
}

  renderStockistTable(){
    const { stockists } = this.state;
    return (
      <Table striped>
        <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Note</th>
          <th>Remove</th>
        </tr>
        </thead>
        <tbody>
          {stockists.map( stockist => {
            return (<Stockist stockist={stockist} key={stockist.id} onRemoveStockist={this.removeStockist} />)
          })}
        </tbody>
      </Table>
    )
  }

  render() {
    return (
      <div className="stockists-container">
          <h1>Stockists</h1>
          {this.renderStockistTable()}
          <NewStockistForm onNewStockist={this.addNewStockist} />
        </div>
    )
  }
}
export default StockistsContainer;