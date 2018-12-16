import { FlexPlugin } from 'flex-plugin';
import React from 'react';
import { TweetDisplay } from './TweetDisplay';
import IFrame from 'react-iframe';

const PLUGIN_NAME = 'PluginDemo';

export default class PluginDemo extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
    this.state = {
      taskType: '',
      tweetUrl: ''
    }
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  init(flex, manager) {
    flex.CRMContainer.defaultProps.uriCallback = (task) => {
      return task && task.attributes.productId ? `https://localhost:3000/product/${task.attributes.productId}` : 'https://localhost:3000/';
    }

    flex.TaskInfoPanel.Content.add(<TweetDisplay key="tweet-display" />, { sortOrder: -1 });
  }
}
