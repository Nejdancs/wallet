import Media from 'react-media';

import {
  List,
  Nav,
  Item,
  StyledNavLink,
  StyledIconHome,
  StyledStatistic,
  StyledIconCurrency,
  Text,
} from './Navigation.styled';
// import IconHome from '../../images/IconHome.svg';
// import statistic from '../../images/Statistic.svg';

const Navigation = () => {
  return (
    <Nav>
      <List>
        <Item>
          <StyledNavLink to="/home">
            <StyledIconHome />
            <Text>Home</Text>
          </StyledNavLink>
        </Item>

        <Item>
          <StyledNavLink to="/diagram">
            <StyledStatistic />
            <Text>Statistics</Text>
          </StyledNavLink>
        </Item>

        <Media
          queries={{
            small: '(max-width: 767px)',
          }}
        >
          {matches => (
            <>
              {matches.small && (
                <Item>
                  <StyledNavLink to="/currency">
                    <StyledIconCurrency />
                  </StyledNavLink>
                </Item>
              )}
            </>
          )}
        </Media>
      </List>
    </Nav>
  );
};

export default Navigation;
