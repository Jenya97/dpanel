'use client'

// Next Imports
import { redirect, usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'

const AuthRedirect = ({ lang }) => {
  const { data: session } = useSession()
  const pathname = usePathname()

  // Define routes that don't require authentication
  const publicRoutes = [`/${lang}/dashboard/crm`]

  // Redirect URL in case of unauthenticated access
  const redirectUrl = `/${lang}/login?redirectTo=${pathname}`

  // If the current route is public, don't require login
  if (publicRoutes.includes(pathname)) {
    return null
  }

  // If session exists, allow access
  if (session) {
    return null
  }

  // If no session and route is not public, redirect to login
  return redirect(redirectUrl)
}

export default AuthRedirect
