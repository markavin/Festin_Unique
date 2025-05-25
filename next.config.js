// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   webpack: (config, { isServer }) => {
//     // Fix untuk bcrypt dan dependencies lainnya
//     if (!isServer) {
//       config.resolve.fallback = {
//         ...config.resolve.fallback,
//         fs: false,
//         net: false,
//         tls: false,
//         crypto: false,
//         stream: false,
//         url: false,
//         zlib: false,
//         http: false,
//         https: false,
//         assert: false,
//         os: false,
//         path: false,
//       };
//     }

//     // Exclude bcrypt dari client bundle
//     config.externals = config.externals || [];
//     config.externals.push({
//       bcrypt: 'bcrypt',
//     });

//     return config;
//   },
//   experimental: {
//     serverComponentsExternalPackages: ['bcrypt', 'bcryptjs'],
//   },
// };

// module.exports = nextConfig;