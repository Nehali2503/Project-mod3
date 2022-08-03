import React from 'react'
import {Table} from 'react-bootstrap';
import '../Styles/Home.css';


const Complaint = () => {
  return (
    <div id="table2">
      <Table responsive="md" variant="dark" ><thead>
        <tr>
        <th>cVigil ID</th>
        <th>Date</th>
        <th>Time</th>
        <th>Location</th>
        <th>Phone Number(if registered)</th>
        <th>Complaint</th>
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

export default Complaint