import { ArrowLeft } from '@nazar-pryt/inctagram-ui-kit'
import { useRouter } from 'next/router'

import { BackToPreviousWrapper } from './BackToPrevious.styled'

export type BackToPreviousType = {
  title: string
}

export const BackToPrevious = ({ title }: BackToPreviousType) => {
  const router = useRouter()

  const handleBack = () => {
    void router.back()
  }

  return (
    <BackToPreviousWrapper onClick={handleBack}>
      <ArrowLeft />
      <span>{title}</span>
    </BackToPreviousWrapper>
  )
}
