import React from 'react'
import PropTypes from 'prop-types'
import DateTime from 'react-datetime'
import moment from 'moment'
import 'moment/locale/ru'
import './LabelledDateTimeInput.css'

const LabelledDateTimeInput = ({ label, value, timeFormat }) => {
  return (
    <label>
      {label}{' '}
      <DateTime timeFormat={timeFormat} defaultValue={value} locale="ru" />
    </label>
  )
}

LabelledDateTimeInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.object]),
  timeFormat: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
}

LabelledDateTimeInput.defaultProps = {
  value: moment(),
  timeFormat: false,
}

export default LabelledDateTimeInput
