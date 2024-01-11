import { useCallback, useState } from 'react'

export const useBooleanFlag = (initialValue: boolean = false, extraCondition: boolean = true) => {
  const [isTrue, setIsTrue] = useState<boolean>(initialValue)

  const toggleFlag = useCallback(() => setIsTrue(isTrue => !isTrue), [])
  const setTrue = useCallback(() => {
    if (extraCondition) {
      setIsTrue(true)
    }
  }, [extraCondition])
  const setFalse = useCallback(() => {
    if (extraCondition) {
      setIsTrue(false)
    }
  }, [extraCondition])

  return { isTrue, setFalse, setTrue, toggleFlag }
}
