import { render, screen } from '@testing-library/react';
import NewsSection from './NewsSection.js';
import { MemoryRouter } from 'react-router-dom';

describe('Header', () => {
  it('shows a title, logo, headline and text', () => {
    render(<NewsSection />, { wrapper: MemoryRouter });

    const title = screen.getByText('news', { exact: false });
    const logo = screen.getByRole('img');
    const headline = screen.getByText('2 millionen wallets', { exact: false });
    const text = screen.getByText('raptoreum-coins', { exact: false });

    expect(logo).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(headline).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
});
