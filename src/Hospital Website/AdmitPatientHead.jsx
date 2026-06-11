import React from 'react'
import { IoMdClose } from "react-icons/io";
import PatientSelection from './PatientSelection';
import BedAssignment from '../BedAssignment';
import AdmissionDetails from '../AdmissionDetails';

const AdmitPatient = ({closePopup}) => {
  return (
    <section className='admit-modal'>
        <div className="admit-modal-content">
            <button className='close-btn' onClick={closePopup}><IoMdClose /></button>
        <h1 className="hero-patient-heading">Admit Patient to Available Bed</h1>
        <PatientSelection/>
        <BedAssignment/>
        <AdmissionDetails/>
        </div>
    </section>
  )
}

export default AdmitPatient