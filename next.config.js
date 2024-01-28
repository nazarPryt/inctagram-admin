/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: { styledComponents: true },
  i18n: {
    defaultLocale: 'en',
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
        hostname: 'storage.yandexcloud.net',
        port: '',
        protocol: 'https',
      },
    ],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
