/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable React strict mode for catching potential issues in development
    reactStrictMode: true,
  
    // Enable SWC compiler for faster builds and optional minification
    swcMinify: true,
  
    // Use experimental app directory (if applicable for your project)
    experimental: {
      appDir: true, // Set this to true if you're using the `app` directory in Next.js 13+
    },
  
    // Optimize images using Next.js' built-in image optimization
    images: {
      domains: ['example.com'], // Add the domains of any external images you use
      formats: ['image/webp'], // Specify supported image formats
    },
  
    // Define custom environment variables (if needed)
    env: {
      CUSTOM_VAR: process.env.CUSTOM_VAR || 'default_value',
    },
  
    // Enable internationalized routing (if applicable)
    i18n: {
      locales: ['en', 'es'], // Add your supported locales
      defaultLocale: 'en',
    },
  
    // Output standalone build for serverless deployment (useful for Vercel)
    output: 'standalone',
  };
  
  export default nextConfig;
  