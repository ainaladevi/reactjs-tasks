import React from 'react'
import { MdWarningAmber } from "react-icons/md";

const CriticalPatients = () => {
  return (
    <section className='container patients-section'>
        <div className="patients-main">
            <div className="cpatients-data">
               <MdWarningAmber color="#E7000B" size={20} />
               <span className='cpatients-inner-data'>Critical Patients - Immediate Attention Required</span>
            </div>
            <div className="cpatients-card ">
                <div className="cpatients-inner-content">
                    <div className="cpatients-inner-content1">
                      <div className="icu-icon">
                        <span className='icu-data'>ICU-101</span>
                      </div>
                      <div className="cpatients-inner-content2">
                        <div className="cpatients-data1">
                            <span className='cpatients-inner-data1'>Robert Taylor</span>
                            <button className='critical-btn1'>CRITICAL</button>
                        </div>
                        <span className='cpatients-inner-data3'>Ward:ICU | Admitted:2026-01-01</span>
                      </div>
                      <div className="cpatients-inner-content3">
                        <div className="cpatient-btn">
                            <button className='recordvitals-btn'>Record Vitals</button>
                        </div>
                        <div className="hero-chart">
                           <button className='view-btn1'>View Chart</button>
                        </div>
                      </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default CriticalPatients