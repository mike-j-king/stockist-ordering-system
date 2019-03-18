import React from 'react';

const Stockist = ({stockist, onRemoveStockist=f=>f}) =>
  <tr key={stockist.id}>
    <td>{stockist.id}</td>
    <td>{stockist.name}</td>
    <td>{stockist.notes}</td>
    <td><button onClick={() => onRemoveStockist(stockist.id)}>X</button></td>
  </tr>
export default Stockist;
