/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["localhost", "127.0.0.1", "localhost:3000", "127.0.0.1:3000", "192.168.31.220", "192.168.31.220:3000"],
  images: {
    formats: ["image/avif", "image/webp"]
  }
};

export default nextConfig;
