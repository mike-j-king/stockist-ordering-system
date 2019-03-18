import React from 'react';

const Stockist = ({stockist}) =>
  <tr key={stockist.id}>
    <td>{stockist.id}</td>
    <td>{stockist.name}</td>
    <td>{stockist.notes}</td>
  </tr>
export default Stockist;
