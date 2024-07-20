import { Button } from '@nextui-org/react'
import React from 'react'
import { useFormStatus } from 'react-dom'

export default function SubmitButton({ label, ...btnProps }) {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" isLoading={pending} {...btnProps}>
      {label}
    </Button>
  )
}
