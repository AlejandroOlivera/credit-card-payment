import { render, screen, fireEvent } from '@test-utils';
import { WButton } from './WButton';

describe('Welcome component', () => {
  it('has correct Vite guide link', () => {
    render(<WButton title="" onClick={() => {}} />);
  });
  test('test_render_button_with_title', () => {
    render(<WButton title="Test Button" onClick={() => {}} />);
    const buttonElement = screen.getByRole('button', { name: 'Test Button' });
    expect(buttonElement).toBeInTheDocument();
  });

  test('test_onClick_function_called', () => {
    const mockOnClick = vi.fn();
    render(<WButton title="Clickable" onClick={mockOnClick} />);
    const buttonElement = screen.getByRole('button', { name: 'Clickable' });
    fireEvent.click(buttonElement);
    expect(mockOnClick).toHaveBeenCalled();
  });

  test('test_apply_styles_to_button', () => {
    render(
      <WButton
        title="Styled Button"
        onClick={() => {}}
        styles="custom-style"
      />,
    );
    const buttonElement = screen.getByRole('button', { name: 'Styled Button' });
    expect(buttonElement).toHaveClass('custom-style');
  });
});
