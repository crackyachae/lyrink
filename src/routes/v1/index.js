const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const albumRoute = require('./album.route');
const trackRoute = require('./track.route');
const lyricRoute = require('./lyric.route');
const reviewRoute = require('./review.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/album',
    route: albumRoute,
  },
  {
    path: '/track',
    route: trackRoute,
  },
  {
    path: '/lyric',
    route: lyricRoute,
  },
  {
    path: '/review',
    route: reviewRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
