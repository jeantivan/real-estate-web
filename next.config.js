module.exports = {
  images: {
    domains: ["images.prismic.io"],
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/home",
      },
      {
        source: "/inmuebles",
        destination: "/inmuebles/1",
      },
    ];
  },
  swcMinify: true,
};
