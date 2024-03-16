import { render } from '@test-utils';
import { WFrame } from './WFrame';

describe('WFrame Component', () => {
  it('should render the children prop correctly', () => {
    const { getByText } = render(
      <WFrame>
        <div>Test Child</div>
      </WFrame>
    );
    expect(getByText('Test Child')).toBeInTheDocument();
  });

  it('should render correctly even when the styles prop is not provided', () => {
    const { container } = render(
      <WFrame>
        <div>Test Child</div>
      </WFrame>
    );
    expect(container.firstChild).not.toHaveAttribute('class');
  });
});
