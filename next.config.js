module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://saitface-a13849c8bb7c.herokuapp.com/:path*", // Proxy to Backend
      },
    ];
  },
};
