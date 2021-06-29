module.exports = {
  mode: process.env.NODE_ENV ? 'jit' : undefined,
  purge: ['./index.html', './src/**/*.{vue,js,ts}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
