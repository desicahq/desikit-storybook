import React from 'react';

import { Status } from './Status';

export default {
  title: 'Status',
  component: Status,
  parameters: { 
    docs: { 
      page: 'Status.mdx' 
    } 
  }
};

const Template = (args) => <Status {...args} />;

export const Badge = Template.bind({});
Badge.args = {
  up: true,
  label: 'All systems normal'
};