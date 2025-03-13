const withPWA = require('next-pwa')(require('./next-pwa'))

const nextConfig: import('next').NextConfig = withPWA({
  // ...your existing next config
})

module.exports = nextConfig