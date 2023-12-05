/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  env:{
    MAIN_SUPABASE_URL: process.env.NODE_ENV.MAIN_SUPABASE_URL,
    MAIN_SUPABASE_KEY: process.env.NODE_ENV.MAIN_SUPABASE_KEY
  },


}

module.exports = nextConfig
