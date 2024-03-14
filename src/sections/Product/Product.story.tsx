import { Meta, StoryFn } from '@storybook/react';
import { WButton } from '../../components/Button/Button';

export default {
  title: 'Sections/Product/Button',
  component: WButton,
} as Meta;

const Template: StoryFn<any> = (args) => <WButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};
