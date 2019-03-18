import React, { Component } from 'react';
class EditStockistForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.stockist.id,
            name: this.props.stockist.name,
            notes: this.props.stockist.notes
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    handleSubmit(e){
        e.preventDefault();
        const { id, name, notes } = this.state;
        this.props.editStockist(id, name, notes);
    }
    render(){
        const { id, name, notes } = this.state;
        return(
            <tr key={id}>
                <td>{id}</td>
                <td>
                    <form onSubmit={this.handleSubmit}>
                        <input  name="name"
                                type="text"
                                placeholder="Name..."
                                value={name}
                                onChange={this.handleChange} />
                        <button>Update</button>
                    </form>
                </td>
                <td>
                    <form onSubmit={this.handleSubmit}>
                        <input  name="notes"
                                type="text"
                                placeholder="Notes..."
                                value={notes}
                                onChange={this.handleChange} />
                        <button>Update</button>
                    </form>
                </td>
            </tr>
 
        )
    }
}
export default EditStockistForm;