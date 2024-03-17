import { render } from '@test-utils';

import '@testing-library/jest-dom';
import { Provider } from 'react-redux';

import { HomePage } from '@/pages/Home.page';
import { Product } from '@/sections/Product/Product';
import store from '@/store/store';

describe('HomePage Component', () => {
  test('renders without crashing', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Product />
      </Provider>,
    );

    // Realiza tus aserciones de prueba
    expect(getByText('Some Text')).toBeInTheDocument(); // Por ejemplo, busca algún texto presente en tu componente
  });
  test('renders Product and CreditCardInfo sections', () => {
    const { getByTestId } = render(<HomePage />);

    // Verifica que el componente Product esté presente
    const productSection = getByTestId('product-section');
    expect(productSection).toBeInTheDocument();

    // Verifica que el componente CreditCardInfo esté presente
    const creditCardInfoSection = getByTestId('credit-card-info-section');
    expect(creditCardInfoSection).toBeInTheDocument();
  });
});
