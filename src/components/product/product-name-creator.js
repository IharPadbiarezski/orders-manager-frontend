const stringifyStack = (arr) => {
  const string = arr.reduce((accumulator, obj) => {
    return `${accumulator} ${obj.value}`
  }, '')
  return string.slice(1)
}

const nameCreatorFactory = () => {
  const stack = []
  return (parameterName, parameterValue) => {
    const foundParameter = stack.find(
      (parameter) => parameter.name === parameterName
    )
    if (foundParameter) foundParameter.value = parameterValue
    else stack.push({ name: parameterName, value: parameterValue })
    return stringifyStack(stack)
  }
}

export default nameCreatorFactory

export { stringifyStack }
