import { render, fireEvent } from '@testing-library/react';
import { WButton } from './Button';

describe('WButton', () => {
  it('renders with the correct title', () => {
    const onClickMock = vi.fn();
    const { getByText } = render(<WButton title="Test Button" onClick={onClickMock} />);
    const buttonElement = getByText('Test Button');
    expect(buttonElement).toBeInstanceOf(HTMLButtonElement);
  });

  it('calls onClick handler when clicked', () => {
    const onClickMock = vi.fn();
    const { getByText } = render(<WButton title="Test Button" onClick={onClickMock} />);
    const buttonElement = getByText('Test Button');
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalled();
  });
});
