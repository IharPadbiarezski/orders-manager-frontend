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

const DatePickerInput = ({
  keepFocus,
  format,
  defaultValue,
  label,
  onChange,
  placeholder,
  locale,
}) => {
  return (
    <label>
      {label}{' '}
      <DayPickerInput
        formatDate={formatDate}
        parseDate={parseDate}
        keepFocus={keepFocus}
        format={format}
        value={defaultValue}
        placeholder={placeholder}
        dayPickerProps={{
          locale,
          localeUtils: MomentLocaleUtils,
        }}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  )
}

DatePickerInput.propTypes = {
  label: PropTypes.node.isRequired,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  keepFocus: PropTypes.bool,
  format: PropTypes.string,
  placeholder: PropTypes.string,
  locale: PropTypes.string,
}

DatePickerInput.defaultProps = {
  keepFocus: false,
  format: '',
  placeholder: '',
  defaultValue: '',
  onChange: () => {},
  locale: '',
}

export default DatePickerInput
