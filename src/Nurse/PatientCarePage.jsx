import React from 'react'
import Navbar from './Hospital Website/Navbar'
import Sidebar from './Hospital Website/Sidebar'
import PatientCareHeading from "./Hospital Website/PatientCareHeading"
import PatientsData from './Hospital Website/PatientsData'

const PatientCarePage = () => {
  return (
    <div className="app-layout">  
            <Sidebar/>
            <div className="content">
              <Navbar/>
              <PatientCareHeading/>
              <PatientsData/>
              </div></div>
  )
}

export default PatientCarePage