export const useDataIdProp = (id) => {
  if (process.env.NODE_ENV === 'test') {
    return {
      'data-testid': id
    }
  }
  return undefined
}
