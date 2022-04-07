import logo from '../images/raptoreum-logo-ger.svg';
import styled, { css } from 'styled-components';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Hamburger from 'hamburger-react';

export default function NavBar() {
  const [click, setClick] = useState(false);

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
          <Hamburger />
        </MenuIconContainer>
        <NavList isClicked={click}>
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
  padding: 0 20px;
`;

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 300px auto auto;

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
    top: -5px;
    left: -10px;
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
    top: -7px;
    left: 0;
    transform: translate(25%, 50%);
  }
`;

const RaptoreumDecryptedText = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 110%;
  font-weight: 700;
`;

const NavList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-column-end: 4;
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
    left: -100%;
    opacity: 1;
    transition: all 0.5s ease;
    z-index: 1;
    text-align: center;
    justify-content: unset;
    align-items: unset;

    ${(props) =>
      props.isClicked &&
      css`
        background: #121212;
        left: 0;
        opacity: 1;
        transition: all 0.5s ease;
        z-index: 1;
      `}
  }
`;

const LinkStyled = styled(NavLink)`
  text-decoration: none;
  color: #dcdcdc;
  font-size: 100%;
`;

const MenuIconContainer = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 7px;
    right: 10px;
    cursor: pointer;
  }
`;
