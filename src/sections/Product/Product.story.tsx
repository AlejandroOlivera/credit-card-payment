import { Meta, Story } from '@storybook/react';
import { Button } from '../../components/Button/Button';


export default {
  title: 'Sections/Product/Button',
  component: Button,
} as Meta;

const Template: Story<any> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};
