import React from 'react'
import {Table} from 'react-bootstrap';
import '../Styles/Home.css';


const StatusTable = () => {
  return (
    <div id="table2">
      <Table responsive="md" variant="dark" ><thead>
        <tr>
        <th>cVigil ID</th>
        <th>Date</th>
        <th>Time</th>
        <th>Location</th>
        <th>Registered/Anonymous</th>
        <th>Status</th>
        <th>Details</th>
        </tr></thead>
        <tbody><tr>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        </tr></tbody>
        
      </Table>
    </div>
  )
}

export default StatusTable
