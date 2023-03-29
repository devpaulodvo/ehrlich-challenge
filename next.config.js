/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    GITHUB_ID: "40972291227bf3d701d0",
    GITHUB_SECRET: "ea57cfcb1c8efdcfaee06bf9e232bdf4622c8780"
  }
}

module.exports = nextConfig
