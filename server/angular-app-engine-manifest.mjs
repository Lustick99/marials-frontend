
export default {
  basePath: 'https://lustick99.github.io/marials-frontend',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
