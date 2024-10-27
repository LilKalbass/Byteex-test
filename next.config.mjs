// next.config.mjs
export default {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
            },
        ],
    },
    experimental: {
        turbo: {
            enabled: true,
        },
    },
};
