/** @type {import('next-pwa').PWAConfig} */
const withPWA = {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
    buildExcludes: [/middleware-manifest\.json$/],
    maximumFileSizeToCacheInBytes: 4000000,
}

module.exports = withPWA