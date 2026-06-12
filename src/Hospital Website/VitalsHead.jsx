import React from 'react'
import { IoMdClose } from "react-icons/io";
import VitalsInfo from "./VitalsInfo";
import VitalsSigns from '../VitalsSigns';
import AdditionalMeasurements from '../AdditionalMeasurements';

const VitalsHead = ({closePopup}) => {
  return (
    <div className='admit-modal'>
        <div className="admit-modal-content">
            <button className='close-btn' onClick={closePopup}><IoMdClose /></button>
            <h1 className="hero-vital-heading">Record Vital Signs</h1>
            <p>Robert Taylor - ICU-101</p>
            <VitalsInfo/>
            <VitalsSigns/>
            <AdditionalMeasurements/>
        </div>
    </div>
  )
}

export default VitalsHead