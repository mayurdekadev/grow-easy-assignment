import { useState } from 'react'
import Sidebar from './components/Sidebar/sidebar.component'
import ManageLeads from './pages/ManageLeads/manageLeads.component'
import './App.css'

function App() {

  return (
    <>
      <div className="mainContainer">
        <Sidebar />
        <ManageLeads />
      </div>
    </>
  )
}

export default App