import React, { Component } from 'react';
import Disqus from 'disqus-react';
import './Disqus.css';

export default class extends Component {
  render() {
    const disqusShortname = 'ideahub-test'; //found in your Disqus.com dashboard
    const disqusConfig = {
      url: 'http://localhost:3000', //this.props.pageUrl
      identifier: this.props.uniqueId, //this.props.uniqueId
      title: this.props.title, //this.props.title
    };

    return (
      <div className="article-container">
        <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </div>
    );
  }
}
