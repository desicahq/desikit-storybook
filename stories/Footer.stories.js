import React from 'react';

import { Footer } from './Footer';

export default {
  title: 'Components/Footer',
  component: Footer,
  parameters: { 
    docs: { 
      page: Footer.stories.mdx
    } 
  }
};

export const Base = () => <Footer />