import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import PatientCareHeading from './PatientCareHeading'
import PatientsData from './PatientsData'

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