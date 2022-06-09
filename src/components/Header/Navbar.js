import { Route } from 'express';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
      <Route>
    <nav className='navbar'>
      <NavLink
        to='/'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Home
      </NavLink>

      <NavLink
        to='/Contact'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Contact
      </NavLink>
      <NavLink
        to='/Profile'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Profile
      </NavLink>

    </nav>
    </Route>
  );
};

export default Navbar;