import { Meta, StoryFn } from '@storybook/react';
import { WText } from './WText';

export default {
  title: 'compponents/WText',
  component: WText,
} as Meta;

const Template: StoryFn<any> = (args) => <WText {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'WText',
};
