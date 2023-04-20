module.exports = {
  url: process.env.URL || 'http://localhost:8080',
  siteName: 'Kitsune',
  siteDescription:
    'Kitsune, the AI language tutor.',
  siteType: 'Person', // schema
  locale: 'en_EN',
  lang: 'en',
  skipContent: 'Skip to content',
  author: 'Andrej Marsic', // i.e. Lene Saile - author's name. Must be set.
  authorEmail: '', // i.e. hola@lenesaile.com - email of the author
  authorWebsite: '', // i.e. https.://www.lenesaile.com - the personal site of the author
  themeColor: '#d26f48', //  Manifest: defines the default theme color for the application
  themeBgColor: '#F3F3F3', // Manifest: defines a placeholder background color for the application page to display before its stylesheet is loaded
  meta_data: {
    opengraph_default: '/assets/images/opengraph-default.jpg', // fallback/default meta image
    opengraph_default_alt:
      'Kitsune, the AI language tutor.', // alt text for default meta image
    twitterSite: '', // i.e. @site - twitter profile of the site
    twitterCreator: '', // i.e. @author -  twitter profile of the site
    mastodonProfile: '' // i.e. https://front-end.social/@lene - url to your mastodon instance/profile
  },
  blog: {
    // this is for the rss feed
    name: 'Kitsune blog',
    description:
      'Tell the word what you are writing about in your blog! It will show up on feed readers.'
  },
  pagination: {
    itemsPerPage: 20
  },
  address: {
    // edit all presets or leave empty. They are being used in the pages for privacy.md and imprint.md
    firma: 'nraw',
    street: 'Marezige',
    city: 'Marezige',
    state: 'Koper',
    zip: '6000',
  },
  menu: {
    closedText: 'Menu'
  }
};
