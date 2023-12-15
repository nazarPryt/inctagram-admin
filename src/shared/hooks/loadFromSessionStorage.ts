export const loadFromSessionStorage = (value: string) => {
  try {
    const data = typeof window !== 'undefined' ? window.sessionStorage.getItem(value) : false

    if (!data) {
      return false
    }

    return !!data
  } catch (e) {
    console.log(e)

    return false
  }
}
