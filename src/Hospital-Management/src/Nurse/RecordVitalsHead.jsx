import React from "react";
import VitalsSigns from "./VitalsSigns";
import AdditionalMeasurements from "./AdditionalMeasurements";
import { IoMdClose } from "react-icons/io";
import RecordVitalsForm from "./RecordVitalsForm";

const RecordVitalsHead = ({ closePopup }) => {
  return (
    <div className="admit-modal1">
      <div className="admit-modal-content1">
        <button className="close-btn" onClick={closePopup}>
          <IoMdClose />
        </button>
        <h1 className="hero-record-heading">Record Vital Signs</h1>
        <p className="hero-record-sub">Robert Taylor - ICU-101</p>
      <hr />
      <RecordVitalsForm/>
      <VitalsSigns />
      <AdditionalMeasurements />
    </div>
    </div>
  );
};

export default RecordVitalsHead;
