import express from 'express'
import compress from 'compression'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import routes from './src/routes'
import Layout from './src/layout'
import appReducers from './src/reducers'

import cssModules from './dist/css-modules.json';
let cssClassesMap = {};
Object.keys(cssModules).forEach((key) => {
  let scopeKey = key.split('/').pop().replace('.css', '-css');
  Object.keys(cssModules[key]).forEach((klass) => {
    cssClassesMap[`${scopeKey}--${klass}`] = cssModules[key][klass]
  });
});

let app = express();

app.use(compress());
app.use(express.static('dist'));

app.get('*', (req, res) => {
  const store = createStore(appReducers)

  match({ routes: routes.routesCollection, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      let doctype = '';
      let content = renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      );

      Object.keys(cssClassesMap).forEach((key) => {
        content = content.replace(key, cssClassesMap[key]);
      });

      const preloadedState = store.getState()

      let full = renderToString(<Layout content={content} preloadedState={preloadedState} />);
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(doctype + full);
      res.end();
    } else {
      res.status(404).send('Not found')
    }
  })
});

app.listen(3000, () => {
  console.log('App is listening on port 3000! Happy coding ;)');
});
