/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ymkwfhibmrznkncwopys.supabase.co",
      },
    ],
  },
};

export default nextConfig;
