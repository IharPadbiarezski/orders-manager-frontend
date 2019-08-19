import React from 'react'
import PropTypes from 'prop-types'
import MomentLocaleUtils, {
  formatDate,
  parseDate,
} from 'react-day-picker/moment'
import 'moment/locale/ru'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'
import './DayPicker.css'

const DatePicker = ({
  type,
  defaultValue,
  renderInput,
  label,
  onChange,
  invalid,
}) => {
  return (
    <label>
      {label}{' '}
      <DayPickerInput
        formatDate={formatDate}
        parseDate={parseDate}
        keepFocus={false}
        format="LL"
        placeholder={`${formatDate(new Date(), 'LL', 'ru')}`}
        value={`${formatDate(new Date(), 'LL', 'ru')}`}
        dayPickerProps={{
          locale: 'ru',
          localeUtils: MomentLocaleUtils,
        }}
      />
    </label>
  )
}

DatePicker.propTypes = {
  label: PropTypes.node.isRequired,
  type: PropTypes.string,
  defaultValue: PropTypes.string,
  renderInput: PropTypes.func,
  onChange: PropTypes.func,
  invalid: PropTypes.bool,
}

DatePicker.defaultProps = {
  type: 'text',
  defaultValue: '',
  renderInput: null,
  onChange: () => {},
  invalid: false,
}

export default DatePicker
