import axios from 'axios';
import { useEffect, useState } from 'react';
import style from './users.module.scss';

const Users = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const resp = await axios.get('https://jsonplaceholder.typicode.com/users');
    setUsers(resp.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={style.main} data-testid='check'>
      {users.map((e) => (
        <div data-testid='user-item' key={e.id}>
          {e.name}
        </div>
      ))}
    </div>
  );
};

export default Users;
