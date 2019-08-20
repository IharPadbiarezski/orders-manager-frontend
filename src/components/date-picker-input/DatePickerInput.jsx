import React from 'react'
import PropTypes from 'prop-types'
import MomentLocaleUtils, {
  formatDate,
  parseDate,
} from 'react-day-picker/moment'
import 'moment/locale/ru'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'
import './DatePickerInput.css'

const DatePickerInput = ({
  keepFocus,
  format,
  defaultValue,
  onChange,
  placeholder,
  locale,
  overlayComponent,
}) => {
  return (
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
      overlayComponent={overlayComponent}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}

DatePickerInput.propTypes = {
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  keepFocus: PropTypes.bool,
  format: PropTypes.string,
  placeholder: PropTypes.string,
  locale: PropTypes.string,
  overlayComponent: PropTypes.func.isRequired,
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
