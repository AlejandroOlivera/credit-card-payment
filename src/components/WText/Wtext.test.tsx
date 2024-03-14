import { render } from '@test-utils';
import { WText } from './WText';

describe('WText Component', () => {
  it('should render the text passed as a prop', () => {
    const { getByText } = render(<WText text="Hello, World!" />);
    expect(getByText('Hello, World!')).toBeInTheDocument();
  });

  it('should apply the styles passed as a prop', () => {
    const { getByText } = render(<WText text="Styled Text" styles="custom-style" />);
    expect(getByText('Styled Text')).toHaveClass('custom-style');
  });
});
