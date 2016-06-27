import React from 'react';
import DocumentTitle from 'react-document-title';

class Kitchensink extends React.Component {
  render() {
    return (
      <DocumentTitle title='Kitchensink'>
        <div>
          <div>Kitchensink!!</div>
        </div>
      </DocumentTitle>
    )
  }
}

export default Kitchensink;
