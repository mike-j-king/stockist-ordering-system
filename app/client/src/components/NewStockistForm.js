import React from 'react';

const NewStockistForm = ({onNewStockist = f => f}) => {
    let name, notes
    const submit = e => {
        e.preventDefault()
        onNewStockist(name.value, notes.value)
        name.value = ''
        notes.value = ''
        name.focus()
    }

    return (
        <form onSubmit={submit}>
            <input  ref={input => name = input}
                    type="text"
                    placeholder="Name..." required />
            <input  ref={input => notes = input}
                    type="text"
                    placeholder="Notes..." required />
            <button>Add Stockist</button>
        </form>
    )
}

export default NewStockistForm;