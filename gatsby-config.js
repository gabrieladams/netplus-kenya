/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [
          require("autoprefixer"),
          require("postcss-nested"),
          require("postcss-pxtorem")({
            rootValue: 16,
            unitPrecision: 7,
            propList: ["*"],
            selectorBlackList: ["html"],
            mediaQuery: true,
            minPixelValue: 0,
          }),
          require("postcss-font-magician")({
            variants: {
              "Noto Sans JP": {
                "300 light": [],
                "400 regular": [],
                "700 bold": [],
              },
              "Noto Serif JP": {
                "300 light": [],
                "400 regular": [],
                "500 medium": [],
              },
            },
            formats: "otf",
            foundries: [
              "./src/assets/fonts/Noto_Sans_JP",
              "./src/assets/fonts/Noto_Serif_JP",
            ],
          }),
        ],
      },
    },
  ],
}

// npm install postcss-pxtorem --save-dev
// npm install postcss-font-magician --save-dev
