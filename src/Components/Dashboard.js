import React from 'react'
import Navbar from './Navbar'
import CaseTable from './CaseTable'
import StatusTable from './StatusTable'
import Searchbar from './Searchbar'

const Dashboard = () => {
  return (
    <div>
      <Navbar/>
      <CaseTable/>
      <Searchbar/>
      <StatusTable/>
        
    </div>
      
  )
}

export default Dashboard
