'use client'

// Next Imports
import { redirect, usePathname } from 'next/navigation'

// Config Imports
import themeConfig from '@configs/themeConfig'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'

// Simulating a function that checks if the user is authenticated
// Replace this with your actual authentication check logic
const isAuthenticated = () => {
  // Example: return true if authenticated, false if not
  return false;
};

const AuthRedirect = ({ lang }) => {
  const pathname = usePathname();

  // Paths
  const redirectUrl = `/${lang}/login?redirectTo=${pathname}`;
  const login = `/${lang}/login`;
  const homePage = getLocalizedUrl(themeConfig.homePageUrl, lang);

  // Check if user is authenticated
  if (!isAuthenticated()) {
    // Redirect to login if user is not authenticated
    return redirect(redirectUrl);
  }

  // If the user is authenticated, no redirection is needed
  return null;
};

export default AuthRedirect;
