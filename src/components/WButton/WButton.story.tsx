import { Meta, StoryFn } from '@storybook/react';
import { WButton } from './WButton';
import classes from './WButton.module.css';
import { FaArrowRight } from 'react-icons/fa';

export default {
  title: 'compponents/WButton',
  component: WButton,
} as Meta;

export const ButtonStory: StoryFn<any> = (args) => (
  <WButton icon={<FaArrowRight />} styles={classes.button} title="Prueba" onClick={() => {}} />
);
