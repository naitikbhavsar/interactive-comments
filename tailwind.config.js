module.exports = {
  content: ["*.{html,js}"],
  theme: {
    fontWeight: {
      semibold: 500,
      bold: 700,
    },

    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        "moderate-blue": "hsl(238, 40%, 52%)",
        "soft-red": "hsl(358, 79%, 66%)",
        "light-grayish-blue": "hsl(239, 57%, 85%)",
        "pale-red": "hsl(357, 100%, 86%)",
        "dark-blue": "hsl(212, 24%, 26%)",
        "grayish-blue": "hsl(211, 10%, 45%)",
        "light-gray": "hsl(223, 19%, 93%)",
        "very-light-gray": "hsl(228, 33%, 97%)",
      },
      padding: {
        "18px": "18px",
      },
      fontSize: {
        "15px": "	0.9375rem",
      },
      screens: {
        desktop: "1280px",
      },
      spacing: {
        "desktop-card": "732px",
        "desktop-textarea": "530px",
        "mobile-textarea": "310px",
      },
    },
  },
  plugins: [],
};
