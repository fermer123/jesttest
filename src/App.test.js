import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
//fireEvent для работы с событиями
describe('describe', () => {
  // test('get by когда сто процентов выбросит ошибку', () => {
  //   render(<App />);
  //   const hellowWorld = screen.getByText(/hello world/i);
  //   const btn = screen.getByRole('button');
  //   const input = screen.getByPlaceholderText(/input value/i);
  //   expect(hellowWorld).toBeInTheDocument();
  //   expect(btn).toBeInTheDocument();
  //   expect(input).toBeInTheDocument();
  //   screen.debug();
  //   expect(input).toMatchSnapshot();
  // });
  // test('query когда ошибку можно пропустить', () => {
  //   render(<App />);
  //   const hello = screen.queryByText(/hello wrld/i);
  //   expect(hello).toBeNull();
  // });
  // test('find', async () => {
  //   render(<App />);
  //   const hello = await screen.findByText(/data/i);
  //   expect(hello).toBeInTheDocument();
  //   expect(hello).toHaveStyle({ color: 'red' });
  // });
  // test('click event', () => {
  //   render(<App />);
  //   const btn = screen.getByTestId('toggle-btn');
  //   expect(screen.queryByTestId('toggle-elem')).toBeNull();
  //   fireEvent.click(btn);
  //   expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument();
  //   fireEvent.click(btn);
  //   expect(screen.queryByTestId('toggle-elem')).toBeNull();
  // });
  // test('input event', () => {
  //   render(<App />);
  //   const input = screen.getByPlaceholderText(/input value/i);
  //   expect(screen.queryByTestId('value-elem')).toContainHTML('');
  //   // fireEvent.input(input, {
  //   //   target: { value: '123123' },
  //   // });
  //   userEvent.type(input, '123123');
  //   expect(screen.queryByTestId('value-elem')).toContainHTML('123123');
  // });
});
