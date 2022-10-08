import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('rout', () => {
  test('routs', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const mainlink = screen.getByTestId('main-link');
    const aboutlink = screen.getByTestId('about-link');
    expect(screen.getByTestId('main-link'));
    userEvent.click(aboutlink);
    expect(screen.getByTestId('about-link'));
  });
});
