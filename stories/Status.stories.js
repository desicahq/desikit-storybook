import React from 'react';

import { Status } from './Status';

export default {
  title: 'Components/Status',
  component: Status,
  parameters: { 
    docs: { 
      page: Status.stories.mdx
    } 
  }
};

const Template = (args) => <Status {...args} />;

export const Badge = Template.bind({});
Badge.args = {
  up: true,
  label: 'All systems normal'
};