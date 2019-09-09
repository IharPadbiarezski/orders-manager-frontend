import React, { useState } from 'react'
import PropTypes from 'prop-types'
import LabelledInput from '../labelled-input'

const ProductParameter = ({ text, options, onChange, ...other }) => {
  const [showDefaultValue, setShowDefaultValue] = useState(true)

  const selectInput = (
    <select
      onChange={(e) => {
        setShowDefaultValue(false)
        onChange(e.target.value)
      }}
    >
      {showDefaultValue && <option value="0">Выбрать</option>}
      {options.map(({ id, value }) => {
        return (
          <option value={id} key={id}>
            {value}
          </option>
        )
      })}
    </select>
  )

  return <LabelledInput renderInput={() => selectInput} {...other} />
}

ProductParameter.propTypes = {
  text: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func,
}

ProductParameter.defaultProps = {
  onChange: () => {},
}

export default ProductParameter
