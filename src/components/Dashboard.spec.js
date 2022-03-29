import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard.js';

describe('Dashboard', () => {
  it('shows an image and text', () => {
    render(<Dashboard text="Preis" />);

    const image = screen.getByRole('img');
    const text = screen.getByText('Preis', { exact: false });

    expect(image).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
});
