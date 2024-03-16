/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    domains: [
      "placehold.it",
      "picsum.photos",
      "skillicons.dev",
      "media.graphassets.com",
    ],
  },
};

export default nextConfig;
