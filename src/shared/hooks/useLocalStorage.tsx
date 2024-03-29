import { useCallback, useState } from 'react'

import { dequal as deepEqual } from 'dequal'

export function useLocalStorage<T = any>(key: string, initialValue: T): [T, (value: T) => void] {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const isBrowser = typeof window !== 'undefined'
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      if (isBrowser) {
        // Get from local storage by key
        const item = window.localStorage.getItem(key)

        // Parse stored json or if none return initialValue
        return item ? JSON.parse(item) : initialValue
      }
    } catch (error) {
      // If error also return initialValue
      console.log(error)

      return initialValue
    }
  })

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = useCallback(
    (value: T) => {
      try {
        if (!deepEqual(storedValue, value) && isBrowser) {
          // Save state
          setStoredValue(value)
          // Save to local storage
          window.localStorage.setItem(key, JSON.stringify(value))
        }
      } catch (error) {
        // A more advanced implementation would handle the error case
        console.log(error)
      }
    },
    [key, storedValue]
  )

  return [storedValue, setValue]
}
