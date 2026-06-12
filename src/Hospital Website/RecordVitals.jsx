import React from 'react'
import VitalsHead from './VitalsHead'

const RecordVitals = ({closePopup}) => {
  return (
    <div className="content">
        <VitalsHead closePopup={closePopup}/>
    </div>
  )
}

export default RecordVitals