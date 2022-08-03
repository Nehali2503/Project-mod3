import React from 'react'
import {Table} from 'react-bootstrap';
import '../Styles/Home.css';


const CaseTable = () => {
  return (
    <div id="table1">
      <Table responsive="md" variant="dark" ><thead>
        <tr>
        <th>Total Cases</th>
        <th>Pending Cases</th>
        <th>Dropped Cases</th>
        <th>Active Cases</th>
        <th>Solved Cases</th>
        </tr></thead>
        <tbody><tr>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        </tr></tbody>
        
      </Table>
    </div>
  )
}

export default CaseTable
