import { appSettings } from '@/_app/AppSettings'

export const PATH = {
  LOGIN: `/login`,
  PAYMENTS: '/admin/payments',
  POSTS: '/admin/posts',
  STATISTICS: '/admin/statistics',
  USER: 'user/',
  USER_PROFILE: `${appSettings.DOMAIN_URL}profile/user-profile`,
  USERS: '/admin/users',
} as const
