module.exports = {
  presets: [
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        debug: true,
        targets: {
          browsers: ['defaults', '> 0.25% in KR', '> 0.25% in US'],
        },
      },
    ],
  ],
  plugins: [
    process.env.NODE_ENV !== 'production' && 'react-refresh/babel',
  ].filter(Boolean),
};
