/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  redirects() {
    return [
      {
        source: "/examples",
        destination: "/examples/mail",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
