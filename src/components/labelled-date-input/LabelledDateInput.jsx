import React from 'react'
import DateTime from 'react-datetime'
import 'react-datetime/css/react-datetime.css'
import moment from 'moment'
import 'moment/locale/ru'
import './LabelledDateInput.css'
import LabelledInput from '../labelled-input'

const LabelledDateInput = (props) => (
  <LabelledInput
    labelClassName="labelled-date-input__label"
    renderInput={() => (
      <DateTime
        timeFormat={false}
        defaultValue={moment()}
        inputProps={{ className: 'labelled-date-input__input' }}
        locale="ru"
      />
    )}
    {...props}
  />
)

export default LabelledDateInput
