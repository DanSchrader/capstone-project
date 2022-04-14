import { render, screen } from '@testing-library/react';
import NavBar from './Navbar.js';
import { MemoryRouter } from 'react-router-dom';

describe('Header', () => {
  it('shows a logo and a title', () => {
    render(<NavBar />, { wrapper: MemoryRouter });

    const logo = screen.getByRole('img');
    const title = screen.getByText('raptoreum', { exact: false });

    expect(logo).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });
});
