import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TimePicker from 'react-time-picker'
import MomentLocaleUtils, {
  formatDate,
  parseDate,
} from 'react-day-picker/moment'
import 'moment/locale/ru'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'
import './CustomDayPicker.css'

function CustomOverlay({ classNames, selectedDay, children, ...props }) {
  return (
    <div className={classNames.overlayWrapper} {...props}>
      <div className={classNames.overlay}>
        <h3>Выберите время и дату!</h3>
        <TimePicker
          // value={value}
          onChange={(time) => {
            // this.setState({ time })
            console.log(time)
          }}
        />
        {children}
      </div>
    </div>
  )
}

CustomOverlay.propTypes = {
  children: PropTypes.node.isRequired,
}

function CustomDayPicker(props) {
  const { label } = props
  return (
    <label>
      {label}{' '}
      <DayPickerInput
        formatDate={formatDate}
        parseDate={parseDate}
        overlayComponent={CustomOverlay}
        keepFocus={false}
        format="LL"
        placeholder={`${formatDate(new Date(), 'LL', 'ru')}`}
        dayPickerProps={{
          locale: 'ru',
          localeUtils: MomentLocaleUtils,
        }}
      />
    </label>
  )
}

export default CustomDayPicker
