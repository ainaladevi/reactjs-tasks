import React from "react";
import RecordVitalsHead from "./RecordVitalsHead";

const RecordVitalsPage = ({ closePopup }) => {
  return (
    <div className="content">
      <RecordVitalsHead closePopup={closePopup} />
    </div>
  );
};

export default RecordVitalsPage;
