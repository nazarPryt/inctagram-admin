export const PATH = {
  LOGIN: `/login`,
  PAYMENTS: '/admin/payments',
  POSTS: '/admin/posts',
  STATISTICS: '/admin/statistics',
  USER: 'user/',
  USER_PROFILE: `${process.env.NEXT_PUBLIC_DOMAIN_URL}profile/user-profile`,
  USERS: '/admin/users',
} as const
