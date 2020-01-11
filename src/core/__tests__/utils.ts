import { flattenObject, stringToArray } from '../utils'

const normal = {
  foo: 'bar',
  harry: 'potter',
}

const oneLevel = {
  foo: 'bar',
  gryffindor: {
    harry: 'potter',
    hermione: 'granger',
  },
}

const twoLevel = {
  foo: 'bar',
  hogwarts: {
    gryffindor: {
      harry: 'potter',
    },
    slytherin: {
      draco: 'malfoy',
    },
  },
}

const str = '-apple-system, "Segoe UI", Roboto'

describe('flattenObject', () => {
  test('should keep flat object intact', () => {
    expect(flattenObject(normal)).toStrictEqual({
      foo: 'bar',
      harry: 'potter',
    })
  })
  test('should flatten one level', () => {
    expect(flattenObject(oneLevel)).toStrictEqual({
      foo: 'bar',
      'gryffindor.harry': 'potter',
      'gryffindor.hermione': 'granger',
    })
  })
  test('should flatten more than one level', () => {
    expect(flattenObject(twoLevel)).toStrictEqual({
      foo: 'bar',
      'hogwarts.gryffindor.harry': 'potter',
      'hogwarts.slytherin.draco': 'malfoy',
    })
  })
})

describe('stringToArray', () => {
  test('should keep order, handle space before commas and remove quotes', () => {
    expect(stringToArray(str)).toStrictEqual([
      '-apple-system',
      'Segoe UI',
      'Roboto',
    ])
    expect(stringToArray(str)).toHaveLength(3)
  })
})