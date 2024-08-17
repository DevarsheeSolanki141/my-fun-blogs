const path = require("path");
//TODO: Hot reload not working. This post might have a solution https://github.com/gatsbyjs/gatsby/issues/11934

module.exports = {
  siteMetadata: {
    title: "FFUN BLOG",
    description: `Set Description.`,
    author: `FFUN dev team`,
    authorDescription: "Development team at FFUN",
    socials: {
      linkedin: "https://ca.linkedin.com/company/ffun-motor-group",
      facebook: "https://www.facebook.com/FFUNCars",
      twitter: "https://twitter.com/FFUNMotorGroup",
    },
    themeColor: "#96cbbf",
    siteUrl: "https://blog.ffun.com",
    clientUrl: "https://ffun.com",
    image:
      "https://carooga.com/static/54f3be73c004e26215a4a0cbf82c4524/ad85c/carooga-logo.webp", //TODO: Set the image
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-sass",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: {
        prefixes: [],
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-PP3WWT4",
        defaultDataLayer: { platform: "gatsby" },
        enableWebVitalsTracking: true,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ffun-blog`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#96cbbf`,
        display: `minimal-ui`,
        icon: `src/assets/images/vm-icon-192x192.png`,
        icon_options: {
          purpose: `maskable any`,
        },
        icons: [
          {
            src: `src/assets/images/vm-icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: "src/assets/images/logo/wm-icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          "gatsby-remark-relative-images-v2",
          {
            resolve: `gatsby-remark-images`,
            options: {
              backgroundColor: "transparent",
              // maxWidth: "800",
              disableBgImageOnAlpha: true,
              linkImagesToOriginal: true,
              withWebp: true,
              // loading: "eager"
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        components: path.join(__dirname, "src/components"),
        styles: path.join(__dirname, "src/assets/styles"),
        images: path.join(__dirname, "src/assets/images"),
        types: path.join(__dirname, "src/types"),
        data: path.join(__dirname, "src/data"),
        hooks: path.join(__dirname, "src/hooks"),
        pages: path.join(__dirname, "src/pages"),
        utils: path.join(__dirname, "src/utils"),

        // client: path.join(__dirname, `${client}`),
        // components: path.join(__dirname, `${client}/src/components`),
        // constants: path.join(__dirname, `${client}/src/constants`),
        // data: path.join(__dirname, `${client}/src/data`),
        // images: path.join(__dirname, `${client}/src/assets/images`),
        // pages: path.join(__dirname, `${client}/src/pages`),
        // src: path.join(__dirname, `${client}/src`),
        // styles: path.join(__dirname, `${client}/src/assets/styles`),
        // types: path.join(__dirname, `${client}/src/types`),
        // utils: path.join(__dirname, `${client}/src/utils`)
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/markdown/`,
        name: `markdown-pages`,
      },
    },
    // {
    //   resolve: 'gatsby-plugin-preconnect',
    //   options: {
    //     domains: [

    //     ]
    //   }
    // },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        // printRejected: true, // Print removed selectors and processed file names
        // purgeOnly: [

        // ],
        ignore: ["node_modules/@fortawesome", "blog-category-link"],
        whitelist: [],
        whitelistPatterns: [/svg.*/, /fa.*/, /react-share.*/],
      },
    },
  ],
};
