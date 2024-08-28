module.exports = {
  webpack: {
    configure: {
      entry: './src',
    },
  },
  eslint: {
    enable: true,
    mode: 'extends',
    configure: {
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'prettier',
      ],
    },
  },
};
export {};
