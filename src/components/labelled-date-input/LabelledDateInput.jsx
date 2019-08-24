import React from 'react'
import DateTime from 'react-datetime'
import 'react-datetime/css/react-datetime.css'
import moment from 'moment'
import 'moment/locale/ru'
import './LabelledDateInput.css'

const LabelledDateInput = () => {
  return <DateTime timeFormat={false} defaultValue={moment()} locale="ru" />
}

export default LabelledDateInput
