import { Meta, StoryFn } from '@storybook/react';
import { WText } from './WText';

export default {
  title: 'compponents/WText',
  component: WText,
} as Meta;

export const TextStory: StoryFn<any> = (args) => <WText text="Hola" />;
