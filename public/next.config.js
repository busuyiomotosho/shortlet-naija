/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "dctahvizk",
    NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN:
      "pk.eyJ1IjoiYnVzdXlpIiwiYSI6ImNsbWdjcWdjZzJmemczZXRjenc5OG5jb3oifQ.-8uUWMmEzo9rnJSH6dlhAg",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
