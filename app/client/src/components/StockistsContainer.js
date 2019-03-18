import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';
import Stockist from './Stockist';
import NewStockistForm from './NewStockistForm'
import EditStockistForm from './EditStockistForm'

class StockistsContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
        stockists: [],
        editingStockistId: null
    }
    this.addNewStockist = this.addNewStockist.bind(this)
    this.removeStockist = this.removeStockist.bind(this)
    this.editingStockist = this.editingStockist.bind(this)
    this.editStockist = this.editStockist.bind(this)
  }

  componentDidMount() {
      axios.get('/api/v1/stockists.json')
      .then(response => {
          console.log(response)
          this.setState({
              stockists: response.data.sort((a, b) => a.id - b.id)
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

  editStockist(id, name, notes) {
    axios.put( '/api/v1/stockists/' + id, { 
        stockist: {
            name, 
            notes
        } 
    })
    .then(response => {
        console.log(response);
        const { stockists } = this.state;
        stockists[id-1] = {id, name, notes}
        this.setState(() => ({
            stockists, 
            editingStockistId: null
        }))
    })
    .catch(error => console.log(error));
  }

  editingStockist(id) {
    this.setState({
        editingStockistId: id
    })
  }

  renderStockistTable(){
    const { stockists, editingStockistId } = this.state;
    return (
      <Table striped>
        <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Note</th>
          <th>Remove</th>
          <th>Edit</th>
        </tr>
        </thead>
        <tbody>
          {stockists.map( stockist => {
            if ( editingStockistId === stockist.id ) {
              return (<EditStockistForm 
                        stockist={stockist} 
                        key={stockist.id} 
                        editStockist={this.editStockist} 
              />)
            } else {
              return (<Stockist 
                        stockist={stockist} 
                        key={stockist.id} 
                        onRemoveStockist={this.removeStockist} 
                        editingStockist={this.editingStockist} 
              />)
            }
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