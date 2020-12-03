const path = require('path');
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Corbsoft',
    description: 'Corbsoft Ltd',
    author: 'Darren Corbett',
  },
  plugins: [
    'gatsby-env-variables',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Corbsoft',
        short_name: 'Corbsoft',
        description: 'Corbsoft Ltd',
        start_url: '/',
        background_color: '#303030',
        theme_color: '#000000',
        lang: 'en',
        display: 'standalone',
        icon: 'src/images/total_loyalty_icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        components: path.join(__dirname, 'src/components'),
        theme: path.join(__dirname, 'src/theme'),
      },
    },
  ],
};
