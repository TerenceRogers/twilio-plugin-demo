import React from 'react';

export class TweetDisplay extends React.Component {
  render() {
    return this.props.task.attributes.type === 'twitter'
      ? <div>
        <hr></hr>
        <iframe style={{ height: '200px', width: '100%' }} src={`https://twitframe.com/show?url=${this.props.task.attributes.tweetUrl}`}></iframe>
      </div>
      : <div></div>
  }
}