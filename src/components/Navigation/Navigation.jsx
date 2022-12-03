import { NavLink } from 'react-router-dom';
import Media from 'react-media';
import { Nav } from './Navigation.styled';

const Navigation = () => {
  return (
    <Nav>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/diagram">Statistics</NavLink>

      <Media
        queries={{
          small: '(max-width: 767px)',
        }}
      >
        {matches => (
          <>{matches.small && <NavLink to="/currency">Currency</NavLink>}</>
        )}
      </Media>
    </Nav>
  );
};

export default Navigation;
