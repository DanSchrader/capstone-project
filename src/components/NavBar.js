import logo from '../images/raptoreum-logo-ger.svg';
import styled from 'styled-components';
import { useState } from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  const [click, setClick] = useState(false);
  //const [dropdown, setDropdown] = useState(false);
  console.log(click);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <NavBarHeader>
      <Nav>
        <LinkStyledLogo to="/" onClick={closeMobileMenu}>
          <RaptoreumLogoContainer>
            <RaptoreumLogoImage src={logo} alt="Raptoreum-Logo" />
          </RaptoreumLogoContainer>
          <RaptoreumDecryptdedContainer>
            <RaptoreumDecryptedText>
              raptoreum.de.crypted
            </RaptoreumDecryptedText>
          </RaptoreumDecryptdedContainer>
        </LinkStyledLogo>
        <MenuIconContainer onClick={handleClick}>
          <MenuIcon
            className={click ? 'fa-solid fa-times' : 'fa-solid fa-bars'}
          ></MenuIcon>
        </MenuIconContainer>
        <NavList className={click ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <LinkStyled to="/" onClick={closeMobileMenu}>
              Dashboard
            </LinkStyled>
          </li>
          <li>
            <LinkStyled to="/explanation" onClick={closeMobileMenu}>
              Beschreibung
            </LinkStyled>
          </li>
          <li>
            <LinkStyled to="/mining-tutorial" onClick={closeMobileMenu}>
              Mining-Anleitung
            </LinkStyled>
          </li>
          <li>
            <LinkStyled to="/buying-tutorial" onClick={closeMobileMenu}>
              Buying-Anleitung
            </LinkStyled>
          </li>
        </NavList>
      </Nav>
    </NavBarHeader>
  );
}

const NavBarHeader = styled.header`
  width: 100vw;
`;

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 250px auto auto;

  @media screen and (max-width: 960px) {
    position: relative;
  }
`;

const LinkStyledLogo = styled(NavLink)`
  display: grid;
  grid-template-columns: 50px auto;
  text-decoration: none;
  color: #dcdcdc;
`;

const RaptoreumLogoContainer = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: linear-gradient(
    155deg,
    rgba(254, 254, 254, 1) 0%,
    rgba(18, 18, 18, 1) 100%
  );
  display: grid;
  align-items: center;
  justify-items: center;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    position: absolute;
    top: -15px;
    left: 0;
    transform: translate(25%, 50%);
  }
`;

const RaptoreumLogoImage = styled.img`
  height: 35px;
  width: 35px;
`;

const RaptoreumDecryptdedContainer = styled.div`
  height: 40px;
  display: grid;
  align-items: center;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    position: absolute;
    top: -17px;
    left: 15px;
    transform: translate(25%, 50%);
  }
`;

const RaptoreumDecryptedText = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 120%;
  font-weight: 700;
`;

const NavList = styled.ul`
  /*display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
  justify-content: end;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 70px;
    left: ${(props) => (props.click ? '-100%' : '0')};
    opacity: 1;
    transition: all 0.5s ease;
    z-index: ${(props) => (props.click ? '1' : '0')};
    text-align: right;
    justify-content: unset;
    align-items: unset;
  }*/
`;

const LinkStyled = styled(NavLink)`
  text-decoration: none;
  color: #dcdcdc;
  font-size: 80%;
`;

const MenuIconContainer = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: -15px;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const MenuIcon = styled.i`
  font-size: 90%;
`;

//@media screen and (max-width: 960px) {}
