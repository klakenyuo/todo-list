module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],

  theme: {
    screens: {
      

      'lg': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }
 

      'phone':{'max':'768px'},
    }
  },
  plugins: [],
}
