import React from 'react'
import Sidebar from './Hospital Website/Sidebar'
import Navbar from './Hospital Website/Navbar'
import VitalsMonitoringHead from './VitalsMonitoringHead'
import RecordVitals from './RecordVitals'
import RecordVitalSigns from './RecordVitalSigns'

const VitalsMonitoringPage = () => {
  return (
    <div className="app-layout">  
            <Sidebar/>
            <div className="content">
              <Navbar/>
              <VitalsMonitoringHead/>
              <RecordVitals/>
              <RecordVitalSigns/>
              </div></div>
  )
}

export default VitalsMonitoringPage