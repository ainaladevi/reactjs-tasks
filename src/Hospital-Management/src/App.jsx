import { useState } from 'react'
import "./Nurse/App.css";
import { Routes, Route } from "react-router-dom";
import NursingDashboard1 from './Nurse/NursingDashboard1';
import BedManagement from './Nurse/BedManagement';
import PatientCarePage from './Nurse/PatientCarePage';
import VitalsMonitoringPage from './Nurse/VitalsMonitoringPage';
import TasksPage from './Nurse/TasksPage';
import PharmacyDashboardPage from './Pharma/PharmacyDashboardPage';
import PrescriptionsPage from './Pharma/PrescriptionsPage';
import InventoryPage from './Pharma/InventoryPage';
import DispensingPage from './Pharma/DispensingPage';
import AllPage from './Pharma/AllPage';
import LowStockPage from './Pharma/LowStockPage';
import ExpiringPage from './Pharma/ExpiringPage';

function App() {

  return (
    <>
      <Routes>
          <Route path="/" element={<NursingDashboard1 />}></Route>
          <Route path="/BedManagement" element={<BedManagement />}></Route>
          <Route path="/Patientcarepage" element={<PatientCarePage />}></Route>
          <Route path="/VitalsMonitoring" element={<VitalsMonitoringPage />}></Route>
          <Route path="/TasksPage" element={<TasksPage />}></Route>
        </Routes>
        {/* <Routes>
          <Route path="/" element={<PharmacyDashboardPage />}></Route>
          <Route path="/PrescriptionPage" element={<PrescriptionsPage />}></Route>
          <Route path="/InventoryPage" element={<InventoryPage />}></Route>
          <Route path="/DispensingPage" element={<DispensingPage />}></Route>
        </Routes>
        <Routes>
          <Route path="/allpage" element={<AllPage />}></Route>
          <Route path="/lowstock" element={<LowStockPage />}></Route>
          <Route path="/expiring" element={<ExpiringPage />}></Route>
        </Routes> */}
    </>
  )
}

export default App
