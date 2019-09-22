import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Product } from './Product'
import { OPTIONS_MODES } from '../../models/product_model'

const parameters = [
  {
    name: 'размер',
    options: [
      {
        text: 'M',
        value: 'M',
      },
      {
        text: 'L',
        value: 'L',
      },
    ],
  },
  {
    name: 'материал',
    options: [
      {
        text: 'хлопок',
        value: 'хлопок',
      },
      {
        text: 'шелк',
        value: 'шелк',
      },
    ],
  },
  {
    name: 'производитель',
    options: [
      {
        text: 'беларусь',
        value: 'беларусь',
      },
    ],
  },
  {
    name: 'плотность',
    options: [
      {
        text: 'плотный',
        value: 'плотный',
      },
    ],
  },
  {
    name: 'тип',
    options: [
      {
        text: 'важный',
        value: 'важный',
      },
    ],
  },
]
storiesOf('Product', module)
  .add('simple', () => <Product id={1} onRemove={action('removed')} />)
  .add('with product types', () => (
    <Product
      id={1}
      onRemove={action('removed')}
      types={[{ id: 1, value: 'first' }, { id: 2, value: 'second' }]}
      onChooseProductType={action('chosen product type')}
    />
  ))
  .add('with few product parameters', () => (
    <Product
      id={1}
      optionsMode={OPTIONS_MODES.PARAMETERS}
      parameters={parameters.slice(0, 2)}
    />
  ))
  .add('with plenty product parameters', () => (
    <Product
      id={1}
      optionsMode={OPTIONS_MODES.PARAMETERS}
      parameters={parameters}
    />
  ))
