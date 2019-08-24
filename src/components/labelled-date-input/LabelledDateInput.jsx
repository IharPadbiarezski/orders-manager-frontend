import React from 'react'
import PropTypes from 'prop-types'
import DateTime from 'react-datetime'
import 'react-datetime/css/react-datetime.css'
import moment from 'moment'
import 'moment/locale/ru'
import './LabelledDateInput.css'
import LabelledInput from '../labelled-input'

const LabelledDateInput = ({ label, ...other }) => (
  <LabelledInput
    label={label}
    labelClassName="labelled-date-input__label"
    renderInput={() => (
      <DateTime
        timeFormat={false}
        defaultValue={moment()}
        inputProps={{ className: 'labelled-date-input__input' }}
        locale="ru"
      />
    )}
    {...other}
  />
)

LabelledDateInput.propTypes = {
  label: PropTypes.string,
}

LabelledDateInput.defaultProps = {
  label: '',
}

export default LabelledDateInput
