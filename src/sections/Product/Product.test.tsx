import { Product } from './Product';
import { fireEvent, render, screen } from '@test-utils';

describe('Welcome component', () => {
  it('has correct Vite guide link', () => {
    render(<Product />);
  });
  test('The `Product` component should render correctly with all its child components.', () => {
    render(<Product />);
    expect(screen.getByAltText('headphone')).toBeInTheDocument();
    expect(screen.getByText('Sony WH-1000XM4')).toBeInTheDocument();
    expect(screen.getByText('4.9')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Wireless Over-ear Industry Leading Noise Canceling Headphones with Microphone',
      ),
    ).toBeInTheDocument();
    expect(screen.getByText('$50.09')).toBeInTheDocument();
    expect(screen.getByText('Paid with credit card')).toBeInTheDocument();
  });

  test('The `Product` component should open the `Modal` when the `WButton` is clicked.', () => {
    render(<Product />);
    fireEvent.click(screen.getByText('Paid with credit card'));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  test('The `Product` component should close the `Modal` when the `onClose` prop is triggered.', async () => {
    render(<Product />);
    fireEvent.click(screen.getByText('Paid with credit card')); // Open modal
    const modal = screen.getByRole('dialog');
    expect(modal).toBeInTheDocument();
  });
});
