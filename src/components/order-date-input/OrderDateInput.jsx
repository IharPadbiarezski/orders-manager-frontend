import React from 'react'
import PropTypes from 'prop-types'
import { formatDate } from 'react-day-picker/moment'
import 'moment/locale/ru'
import 'react-day-picker/lib/style.css'
import DatePickerInput from '../date-picker-input'
import CustomTimePicker from '../custom-time-picker'
import './OrderDateInput.css'

const CustomOverlay = ({ classNames, selectedDay, children, ...props }) => {
  return (
    <div className={classNames.overlayWrapper} {...props}>
      <div className={classNames.overlay}>
        <h3>Выберите время и дату!</h3>
        <CustomTimePicker />
        {children}
      </div>
    </div>
  )
}

CustomOverlay.propTypes = {
  children: PropTypes.node.isRequired,
  classNames: PropTypes.shape({
    container: PropTypes.string.isRequired,
    overlay: PropTypes.string.isRequired,
    overlayWrapper: PropTypes.string.isRequired,
  }).isRequired,
  selectedDay: PropTypes.instanceOf(Date),
}

CustomOverlay.defaultProps = {
  selectedDay: new Date(),
}

const OrderDateInput = ({ label }) => {
  const state = {
    time: '00:00',
  }
  return (
    <label>
      {label}{' '}
      <DatePickerInput
        format={`DD.MM.YYYY ${state.time}`}
        defaultValue={`${formatDate(
          new Date(),
          `DD.MM.YYYY ${state.time}`,
          'ru'
        )}`}
        locale="ru"
        overlayComponent={CustomOverlay}
        onChange={(e) => e.target.value}
      />
    </label>
  )
}

OrderDateInput.propTypes = {
  label: PropTypes.string.isRequired,
}

export default OrderDateInput
