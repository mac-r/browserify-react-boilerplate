import React from 'react';

class Layout extends React.Component {
  constructor(props) { super(props) }

  render() {
    const preloadedState = `window.__PRELOADED_STATE__ = ${JSON.stringify(this.props.preloadedState)}`

    return (
      <html>
        <head>
          <link rel='stylesheet' type='text/css' href='/main.css'/>
        </head>
        <body>
          <div id='container' dangerouslySetInnerHTML={{__html: this.props.content}}></div>
          <script dangerouslySetInnerHTML={{__html: preloadedState}}></script>
          <script src='/bundle.js'></script>
        </body>
      </html>
    )
  }
}

export default Layout;
