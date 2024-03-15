import { Meta, StoryFn } from '@storybook/react';
import { WButton } from './WButton';
import classes from './WButton.module.css';

export default {
  title: 'compponents/WButton',
  component: WButton,
} as Meta;

export const ButtonStory: StoryFn<any> = (args) => (
  <WButton styles={classes.button} title="Prueba" onClick={() => {}} />
);
