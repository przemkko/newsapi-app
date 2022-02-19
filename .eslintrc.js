module.exports = {
  extends: ['next/core-web-vitals', 'prettier'],
  overrides: [
    {
      files: ['*test.tsx'],
      extends: ['plugin:testing-library/react'],
      plugins: ['testing-library'],
    },
  ],
};
