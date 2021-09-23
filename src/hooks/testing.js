export const useDataIdProp = (id) => {
  // eslint-disable-next-line no-undef
  if (process.env.NODE_ENV === 'test') {
    return {
      'data-testid': id
    }
  }
  return undefined
}
