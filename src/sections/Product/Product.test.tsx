import { fireEvent, render } from '@test-utils';

import { Provider } from 'react-redux';
import { Product } from './Product';

import { openModal } from './productSlice';
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

  // test('test_showModal_function_on_WButton_click', () => {
  //   const { getByText } = render(
  //     <Provider store={store}>
  //       <Product />
  //     </Provider>,
  //   );

  //   fireEvent.click(getByText('Paid with credit card'));
  //   expect(store.dispatch).toHaveBeenCalledWith(openModal());
  // });

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
