import React, { useState } from 'react'
import PropTypes from 'prop-types'
import LabelledInput from '../labelled-input'

const ProductParameter = ({ text, options, onChange, ...other }) => {
  const [defaultValue, setDefaultValue] = useState('Выбрать')
  const [option, setOption] = useState({ name: 'my name', value: 'my value' })

  const selectInput = (
    <select
      name={text}
      onChange={() => {
        setDefaultValue(null)
        setOption({ value: 'Hi', name: 'Bye' })
      }}
    >
      {defaultValue ? (
        <option selected value="0">
          {defaultValue}
        </option>
      ) : null}
      {options.map((item) => {
        const { name, value } = item
        return (
          <option name={name} value={value} key={name}>
            {item.value}
          </option>
        )
      })}
    </select>
  )

  return <LabelledInput renderInput={() => selectInput} {...other} />
}

ProductParameter.propTypes = {
  text: PropTypes.string.isRequired,
  options: PropTypes.arrayOf({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  onChange: PropTypes.func,
}

ProductParameter.defaultProps = {
  onChange: () => {},
}

export default ProductParameter
