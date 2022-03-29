import { render, screen } from '@testing-library/react';
import Header from './Header.js';

describe('Header', () => {
  it('shows a logo and a title', () => {
    render(<Header />);

    const logo = screen.getByRole('img');
    const title = screen.getByText('Raptoreum', { exact: false });

    expect(logo).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });
});
