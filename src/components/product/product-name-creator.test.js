import nameCreatorFactory, { stringifyStack } from './product-name-creator'

describe('stringifyStack', () => {
  it('stringifies stack of 1 product', () => {
    const string = stringifyStack([{ name: 'type', value: 'Pillow' }])
    expect(string).toBe('Pillow')
  })

  it('stringifies stack of product type and one option', () => {
    const string = stringifyStack([
      { name: 'type', value: 'Pillow' },
      { name: 'size', value: '1.5' },
    ])
    expect(string).toBe('Pillow 1.5')
  })
})

describe('nameCreatorFactory', () => {
  it('creates name from product type', () => {
    const calculateName = nameCreatorFactory()
    const name = calculateName('type', 'Pillow')
    expect(name).toBe('Pillow')
  })

  it('creates name from product type and an option', () => {
    const calculateName = nameCreatorFactory()
    calculateName('type', 'Pillow')
    const name = calculateName('size', '2')
    expect(name).toBe('Pillow 2')
  })

  it('creates name from product type and 2 options', () => {
    const calculateName = nameCreatorFactory()
    calculateName('type', 'Pillow')
    calculateName('size', '2')
    const name = calculateName('inside', 'cotton')
    expect(name).toBe('Pillow 2 cotton')
  })

  it('replaces option name, if changed', () => {
    const calculateName = nameCreatorFactory()
    calculateName('type', 'Pillow')
    const name = calculateName('size', '2')

    expect(name).toBe('Pillow 2')
    const nameAfterChange = calculateName('size', '1')
    expect(nameAfterChange).toBe('Pillow 1')
  })

  it('replaces option name, if changed, and preserve order', () => {
    const calculateName = nameCreatorFactory()
    calculateName('type', 'Pillow')
    calculateName('size', '2')
    const name = calculateName('inside', 'cotton')
    expect(name).toBe('Pillow 2 cotton')
    const nameAfterChange = calculateName('size', '1')
    expect(nameAfterChange).toBe('Pillow 1 cotton')
  })
})
