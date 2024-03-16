import { Meta, StoryFn } from '@storybook/react';
import { FaArrowRight } from 'react-icons/fa';

import classes from './Wframe.module.css';
import { WFrame } from './WFrame';

export default {
  title: 'compponents/WFrame',
  component: WFrame,
} as Meta;

export const ButtonStory: StoryFn<any> = () => (
  <WFrame styles={classes.frame}>
    <FaArrowRight />
  </WFrame>
);
