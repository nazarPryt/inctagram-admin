/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: { styledComponents: true },
  i18n: {
    defaultLocale: 'en',
    localeDetection: false,
    // When  is set to false Next.js will no longer automatically redirect
    // based on the user's preferred locale and will only provide locale information
    // detected from either the locale based domain or locale path.
    locales: ['en', 'ru'],
  },
  images: {
    remotePatterns: [
      {
        hostname: 'picsum.photos',
        port: '',
        protocol: 'https',
      },
      {
        hostname: 'loremflickr.com',
        port: '',
        protocol: 'https',
      },
      {
        hostname: 'staging-it-incubator.s3.eu-central-1.amazonaws.com',
        port: '',
        protocol: 'https',
      },
    ],
  },
  reactStrictMode: true,
}

const { withSentryConfig } = require('@sentry/nextjs')

module.exports = withSentryConfig(nextConfig, {
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options
  authToken: process.env.SENTRY_AUTH_TOKEN,
  // https://vercel.com/docs/cron-jobs
  automaticVercelMonitors: true,
  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,

  // Hides source maps from generated client bundles
  hideSourceMaps: true,

  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

  org: 'webdev-my',

  project: 'insta-admin-frontend',

  // Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
  // This can increase your server load as well as your hosting bill.
  // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
  // Automatically annotate React components to show their full name in breadcrumbs and session replay
  reactComponentAnnotation: {
    enabled: true,
  },

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  // side errors will fail.
  tunnelRoute: '/monitoring',

  // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
  // See the following for more information:
  // https://docs.sentry.io/product/crons/
  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,
})
