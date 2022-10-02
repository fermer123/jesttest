// import { useEffect, useState } from 'react';
// import Users from './users/Users';

import { Link, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import MainPage from './pages/MainPage';

// function App() {
//   const [data, setData] = useState(null);
//   const [toggle, setToggle] = useState(false);
//   const [value, setValue] = useState('');

//   const onClick = () => setToggle(!toggle);

//   useEffect(() => {
//     setTimeout(() => {
//       setData('data');
//     }, 100);
//   }, []);
//   return (
//     <div className='App'>
//       <h1 data-testid='value-elem'>{value}</h1>
//       {data && <div style={{ color: 'red' }}>{data}</div>}
//       {toggle && <div data-testid='toggle-elem'>!--toggle--!</div>}
//       <h1>hello world</h1>
//       <button data-testid='toggle-btn' onClick={onClick}>
//         click me
//       </button>
//       <input
//         onChange={(e) => setValue(e.target.value)}
//         placeholder='input value'
//       />
//       <Users />
//     </div>
//   );
// }

// export default App;

const App = () => {
  return (
    <div style={{ marginLeft: '50px' }}>
      <Link to='/' data-testid='main-link'>
        main
      </Link>
      <Link style={{ marginLeft: '50px' }} to='/about' data-testid='about-link'>
        about
      </Link>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </div>
  );
};

export default App;
