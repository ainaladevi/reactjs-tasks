import React from 'react'

const RecordVitalsForm = () => {
  return (
    <div className='recordvitals-form1'>
        <div>
            <label>Recording Date & Time *</label>
            <input type='text'></input>
        </div>
        <div>
            <label>Recorded By *</label>
            <input type='text' placeholder='Nurse Sarah Miller'/>
        </div>
    </div>
  )
}

export default RecordVitalsForm