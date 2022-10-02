import { render, screen } from '@testing-library/react';
import axios from 'axios';
import Users from './users';

jest.mock('axios');
describe('Users test', () => {
  let response;
  beforeEach(() => {
    response = {
      data: [
        {
          id: 1,
          name: 'Leanne Graham',
        },
        {
          id: 2,
          name: 'Ervin Howell',
        },
      ],
    };
  });
  'render users',
    async () => {
      axios.get.mockReturnValue(response);
      render(<Users />);
      const users = await screen.findAllByTestId('user-item');
      expect(users.length).toBe(2);
      expect(axios.get).toBeCalledTimes(1);
      screen.debug();
    };
});
