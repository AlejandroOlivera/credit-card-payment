import React from 'react';
import { render, screen } from '@test-utils';

import { FinalStatus } from './FinalStatus';

describe('FinalStatus', () => {
  test('renders the thank you message', () => {
    render(<FinalStatus />);
    const message = screen.getByText('Thanks for shopping with us!');
    expect(message).toBeInTheDocument();
  });
});
