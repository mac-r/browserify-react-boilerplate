import React from 'react';
import DocumentTitle from 'react-document-title';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <DocumentTitle title='Test'>
        <h1>good test</h1>
      </DocumentTitle>
    )
  }
}

export default Test;
