import React from 'react'
import PropTypes from 'prop-types'
import { formatDate } from 'react-day-picker/moment'
import 'moment/locale/ru'
import 'react-day-picker/lib/style.css'
import './DeliveryDateInput.css'
import DatePickerInput from '../date-picker-input'

const CustomOverlay = ({ classNames, selectedDay, children, ...props }) => {
  return (
    <div className={classNames.overlayWrapper} {...props}>
      <div className={classNames.overlay}>
        <h3>Выберите время заказа!</h3>
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

const DeliveryDateInput = ({ label }) => {
  return (
    <label>
      {label}{' '}
      <DatePickerInput
        format="DD.MM.YYYY"
        defaultValue={`${formatDate(new Date(), 'DD.MM.YYYY', 'ru')}`}
        locale="ru"
        overlayComponent={CustomOverlay}
      />
    </label>
  )
}

DeliveryDateInput.propTypes = {
  label: PropTypes.string.isRequired,
}

export default DeliveryDateInput
