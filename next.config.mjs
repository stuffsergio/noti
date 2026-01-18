/** @type {import('next').NextConfig} */

//import withPWA from "next-pwa";

const nextConfig = {
  reactStrictMode: true,
  // NextJS utiliza Turbopack, lo cual no es compatible con Webpack (usado por next-pwa - progressive-web-apps)
  turbopack: {},
};

/*export default withPWA({
  dest: "public",
  sw: "sw.js",
  customWorkerDir: "public",
  disable: process.env.NODE_ENV === "development",
})(nextConfig);*/
