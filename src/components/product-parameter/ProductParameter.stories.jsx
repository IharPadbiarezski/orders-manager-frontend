import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import ProductParameter from '.'

const commonProps = {
  label: 'Test',
  text: 'Hello World!',
  options: [
    { name: 'Good', value: 'good' },
    { name: 'You', value: 'you' },
    { name: 'Free', value: 'free' },
  ],
  onChange: action('changed'),
}

const getComponent = (props) => {
  const localProps = {
    ...commonProps,
    ...props,
  }
  return <ProductParameter {...localProps} />
}

storiesOf('ProductParameter', module)
  .add('simple', () => getComponent())
  .add('with default value', () => getComponent({ onChange: () => {} }))
