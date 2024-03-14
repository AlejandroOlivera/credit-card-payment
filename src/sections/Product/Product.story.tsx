import { Meta, StoryFn } from '@storybook/react';
import { Product } from './Product';

export default {
  title: 'Sections/Product',
  component: Product,
} as Meta;

const Template: StoryFn<any> = (args) => <Product {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Product',
};
