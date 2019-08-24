import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import LabelledInput from '.'

const commonProps = {
  label: 'Test',
  onChange: action('changed'),
}

const getComponent = (props) => {
  const localProps = {
    ...commonProps,
    ...props,
  }
  return <LabelledInput {...localProps} />
}

storiesOf('LabelledInput', module)
  .add('simple', () => getComponent())
  .add('centered', () => getComponent({ centered: true }))
  .add('with default value', () =>
    getComponent({ defaultValue: 'Super test default value' })
  )
  .add('with number type', () => getComponent({ type: 'number' }), {
    notes: 'should render short input with type=number',
  })
  .add(
    'with custom render function',
    () =>
      getComponent({
        renderInput: () => (
          <select>
            <option value="1">option 1</option>
            <option value="2">option 2</option>
          </select>
        ),
      }),
    {
      notes: 'should render select',
    }
  )
  .add(
    'with custom prop: style',
    () =>
      getComponent({
        style: {
          border: '1px solid red',
        },
      }),
    {
      notes: 'should render red border around input',
    }
  )
  .add('if has invalid data', () =>
    getComponent({
      invalid: true,
    })
  )
  .add(
    'with node as label',
    () =>
      getComponent({
        label: <h1>Test</h1>,
      }),
    {
      notes: 'should render h1 tag',
    }
  )
