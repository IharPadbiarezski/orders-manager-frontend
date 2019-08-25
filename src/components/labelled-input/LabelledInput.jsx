import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './LabelledInput.css'

const LabelledInput = ({
  inputClassName,
  type,
  defaultValue,
  renderInput,
  label,
  labelClassName,
  onChange,
  invalid,
  ...other
}) => {
  const inputClasses = classNames('labelled-input__input', inputClassName, {
    'labelled-input__input--invalid': invalid,
  })
  return (
    <label className={labelClassName}>
      {label}{' '}
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
  label: PropTypes.node.isRequired,
  labelClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  type: PropTypes.string,
  defaultValue: PropTypes.string,
  renderInput: PropTypes.func,
  onChange: PropTypes.func,
  invalid: PropTypes.bool,
}

LabelledInput.defaultProps = {
  type: 'text',
  labelClassName: '',
  inputClassName: '',
  defaultValue: '',
  renderInput: null,
  onChange: () => {},
  invalid: false,
}

export default LabelledInput
