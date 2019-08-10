import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './LabelledInput.css'

const LabelledInput = ({
  inputClassName,
  type,
  defaultValue,
  renderInput,
  labelText,
  onChange,
  invalid,
  ...other
}) => {
  const inputClasses = classNames('labelled-input__input', inputClassName, {
    'labelled-input__input--invalid': invalid,
  })
  return (
    <label>
      {labelText}{' '}
      {renderInput ? (
        renderInput()
      ) : (
        <input
          type={type}
          defaultValue={defaultValue}
          className={inputClasses}
          onChange={(e) => onChange(e.target.value)}
          {...other}
        />
      )}
    </label>
  )
}

LabelledInput.propTypes = {
  labelText: PropTypes.string.isRequired,
  inputClassName: PropTypes.string,
  type: PropTypes.string,
  defaultValue: PropTypes.string,
  renderInput: PropTypes.func,
  onChange: PropTypes.func,
  invalid: PropTypes.bool,
}

LabelledInput.defaultProps = {
  type: 'text',
  inputClassName: '',
  defaultValue: '',
  renderInput: null,
  onChange: () => {},
  invalid: false,
}

export default LabelledInput
