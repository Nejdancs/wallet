import { NavLink } from 'react-router-dom';
import Media from 'react-media';
// import { ReactComponent as IconHome } from 'images/IconHome.svg';
// import { ReactComponent as Statistic } from 'images/Statistic.svg';
import { Nav } from './Navigation.styled';
import IconHome from '../../images/IconHome.svg'
import statistic from '../../images/Statistic.svg';
import {
  Icon,
Item} from './Navigation.styled'
const Navigation = () => {
  return (
    <Nav>
      <Item>
        <Icon src={IconHome} />
        {/* <IconHome /> */}
      <NavLink 
        style={({ isActive }) => ({
        fontWeight: isActive ? '700' : '400',
      })} 
        to="/home"> Home </NavLink>
      </Item>
      
      <Item>
        {/* <Statistic/> */}
         <Icon  src={statistic} />
        <NavLink
          style={({ isActive }) => ({
        fontWeight: isActive ? '700' : '400',
      })}
            to="/diagram">Statistics</NavLink>
          </Item>

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
