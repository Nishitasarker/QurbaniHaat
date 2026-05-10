/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-icons-png.flaticon.com',
        pathname: '/**',
      },
      {
        protocol:"https",
         hostname: '**',
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com', 
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com', // গুগলের প্রোফাইল ছবির জন্য (নতুন)
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;