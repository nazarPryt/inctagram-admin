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

module.exports = nextConfig
