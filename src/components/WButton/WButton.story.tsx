import { Meta, StoryFn } from '@storybook/react';
import { FaArrowRight } from 'react-icons/fa';
import { WButton } from './WButton';
import classes from './WButton.module.css';

export default {
  title: 'compponents/WButton',
  component: WButton,
} as Meta;

export const ButtonStory: StoryFn<any> = () => (
  <WButton icon={<FaArrowRight />} styles={classes.button} title="Prueba" onClick={() => {}} />
);
