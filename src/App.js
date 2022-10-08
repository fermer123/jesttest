import { useEffect, useState } from 'react';
import Users from './users/Users';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import MainPage from './pages/MainPage';

// function App() {
//   const [data, setData] = useState(null);
//   const [toggle, setToggle] = useState(false);
//   const [value, setValue] = useState('');
//   const [valueMy, setValueMy] = useState('');
//   const onClick = () => setToggle(!toggle);

//   const myInp = (e) => {
//     setValueMy(e.target.value);
//   };

//   useEffect(() => {
//     setTimeout(() => {
//       setData('data');
//     }, 100);
//   }, []);
//   return (
//     <div className='App'>
//       <h1 data-testid='value-elem'>{value}</h1>
//       <h2 data-testid='valueMy-elem'>{valueMy}</h2>
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
//       <input placeholder='myvalue' onChange={myInp} />
//       <Users />
//     </div>
//   );
// }

// export default App;

const App = () => {
  return (
    <BrowserRouter>
      <div style={{ marginLeft: '50px' }}>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
        <Link to='/' data-testid='main-link'>
          main
        </Link>
        <Link
          style={{ marginLeft: '50px' }}
          to='/about'
          data-testid='about-link'
        >
          about
        </Link>
      </div>
    </BrowserRouter>
  );
};

export default App;
