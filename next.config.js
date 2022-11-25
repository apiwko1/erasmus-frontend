module.exports = {
  distDir: '_next',
  typescript: {
    ignoreBuildErrors: true,
  },
  serverRuntimeConfig: {
  },
  publicRuntimeConfig: {
    // API_URL: "http://localhost:9000",

    API_URL: process.env.API_URL,
  },
}