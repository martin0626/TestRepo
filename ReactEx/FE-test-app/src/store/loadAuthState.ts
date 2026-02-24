import { jwtDecode } from 'jwt-decode'

export const loadAuthState = () => {
  const token = localStorage.getItem('token')
  if (!token) return undefined

  try {
    const decoded = jwtDecode<{
      email: string
      fullName: string,
    }>(token)

    return {
      auth: {
        authToken: token,
        user: {
          email: decoded.email,
          fullName: decoded.fullName,
        },
      },
    }
  } catch (error) {
    return undefined
  }
}