import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import ProductParameter from '.'

const commonProps = {
  label: 'Test',
  text: 'Hello World!',
  options: [
    { id: '1', value: 'good' },
    { id: '2', value: 'nice' },
    { id: '3', value: 'bad' },
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

storiesOf('ProductParameter', module).add('simple', () => getComponent())
