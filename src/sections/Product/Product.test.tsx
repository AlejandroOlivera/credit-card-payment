import { render } from '@test-utils';
import { Product } from './Product';

describe('Welcome component', () => {
  it('has correct Vite guide link', () => {
    render(<Product />);
  });
});
