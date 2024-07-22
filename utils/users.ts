import { cookies } from 'next/headers'
import { COOKIE_NAME } from './constants'
import { redirect } from 'next/navigation'
import { getUserFromToken } from './authTools'

export const getCurrentUser = () => {
  const token = cookies().get(COOKIE_NAME)
  if (!token) redirect('/signin')

  const user = getUserFromToken(token)
  if (!user) redirect('/signin')

  return user
}
