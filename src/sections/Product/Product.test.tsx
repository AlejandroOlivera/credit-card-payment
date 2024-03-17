import { render } from '@test-utils';

import { Provider } from 'react-redux';
import { Product } from './Product';

import store from '@/store/store';

describe('Product Component', () => {
  test('test_product_component_renders', () => {
    const { getByAltText } = render(
      <Provider store={store}>
        <Product />
      </Provider>,
    );

    expect(getByAltText('headphone')).toBeInTheDocument();
  });

  test('test_product_component_displays_details_correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Product />
      </Provider>,
    );

    expect(getByText('Sony WH-1000XM4')).toBeInTheDocument();
    expect(getByText('4.9')).toBeInTheDocument();
    expect(
      getByText(
        'Wireless Over-ear Industry Leading Noise Canceling Headphones with Microphone',
      ),
    ).toBeInTheDocument();
    expect(getByText('$50.09')).toBeInTheDocument();
  });
});
