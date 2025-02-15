/** @type {import('next').NextConfig} */
const nextConfig = { async headers() {
    return [
        {
          source: "/images/:path*", // Cache images
          headers: [
            {
              key: "Cache-Control",
              value: "public, max-age=31536000, immutable", 
            },
          ],
        },
        {
          source: "/audio/:path*", // Cache audio files
          headers: [
            {
              key: "Cache-Control",
              value: "public, max-age=31536000, immutable",
            },
          ],
        },
        {
          source: "/videos/:path*", // Cache video files
          headers: [
            {
              key: "Cache-Control",
              value: "public, max-age=31536000, immutable",
            },
          ],
        },
      ];
  },};

export default nextConfig;
  