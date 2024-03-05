const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: { styledComponents: true },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
  },
  // i18n,
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
        hostname: 'storage.yandexcloud.net',
        port: '',
        protocol: 'https',
      },
    ],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
