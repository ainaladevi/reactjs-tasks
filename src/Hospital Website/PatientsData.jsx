import React from "react";

const PatientsData = () => {
  return (
    <div className="patients-data-section">
      <div className="patients-data-items">
        <div className="patient-data1">
          <p>Bed 101</p>
        </div>
        <div className="patient-data">
            <div className="patient-info">
            <div className="patient-data2">
                <span>Robert Taylor</span>
                <button className="pat-btn">PAT005</button>
                <button className="critical-btn">critical</button>
            </div>
            <span className="icuadmit-data">ICU | Admitted: 2026-01-01</span>
            </div>
            <div className="patients-actions">
                <button className="vitals-btn">Record Vitals</button>
                <button className="scan-btn">Upload Scan</button>
                <button className="plan-btn">Care Plan</button>
            </div>
            </div>
        </div>
      </div>
  );
};

export default PatientsData;
