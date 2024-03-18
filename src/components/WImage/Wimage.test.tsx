import React from 'react';
import { render, screen } from '@test-utils';
import { WImage } from './WImage';

describe('WImage', () => {
  test('renders the image with correct src and alt', () => {
    render(<WImage src="test-image.jpg" alt="Test Image" />);

    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', 'test-image.jpg');
    expect(img).toHaveAttribute('alt', 'Test Image');
  });
});
