import React from 'react';
import DocumentTitle from 'react-document-title';

class NotFound extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <DocumentTitle title='404'>
        <h1>Not Found</h1>
      </DocumentTitle>
    )
  }
}

export default NotFound;
