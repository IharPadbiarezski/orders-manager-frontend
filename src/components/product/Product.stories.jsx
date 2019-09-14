import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Product from './Product'

storiesOf('Product', module)
  .add('simple', () => <Product onRemove={action('removed')} />)
  .add('with product types', () => (
    <Product
      onRemove={action('removed')}
      types={[{ id: 1, value: 'first' }, { id: 2, value: 'second' }]}
      onSelectProductType={action('selected product type')}
    />
  ))
