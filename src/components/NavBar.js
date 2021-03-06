import logo from '../images/raptoreum-logo-ger.svg';
import styled, { css } from 'styled-components';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Hamburger from 'hamburger-react';

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => setShowMenu(!showMenu);
  const closeMobileMenu = () => setShowMenu(false);

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
          <Hamburger toggled={showMenu} />
        </MenuIconContainer>
        <NavList isClicked={showMenu}>
          <LinkConTainer>
            <LinkStyled to="/" onClick={closeMobileMenu}>
              <LinkButton>Dashboard</LinkButton>
            </LinkStyled>
          </LinkConTainer>
          <LinkConTainer>
            <LinkStyled to="/explanation" onClick={closeMobileMenu}>
              <LinkButton>Beschreibung</LinkButton>
            </LinkStyled>
          </LinkConTainer>
          <LinkConTainer>
            <LinkStyled to="/news" onClick={closeMobileMenu}>
              <LinkButton>News</LinkButton>
            </LinkStyled>
          </LinkConTainer>
          <LinkConTainer>
            <LinkStyled to="/mining-tutorial" onClick={closeMobileMenu}>
              <LinkButton>Mining-Anleitung</LinkButton>
            </LinkStyled>
          </LinkConTainer>
        </NavList>
      </Nav>
    </NavBarHeader>
  );
}

const NavBarHeader = styled.header`
  width: 100vw;
  max-width: 1200px;
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
  align-items: center;
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
  
  left: 0;

  @media screen and (max-width: 960px) {
    position: absolute;
    top: -7px;
    left: 0;
    transform: translate(25%, 50%);
  }
`;

const RaptoreumDecryptedText = styled.h1`
  margin-top: 2px;
  padding: 0;
  font-size: 140%;
  
  @media screen and (max-width: 960px) {
    font-size: 110%;
    font-weight: 700;
    margin: 0;
  }
`;

const NavList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-column-end: 4;
  gap: 20px;
  list-style: none;
  padding-left: 0;
  margin-right: 20px;
  text-align: center;
  justify-content: end;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: grid;
    grid-template-columns: unset;
    grid-template-rows: 48px 48px 48px 48px;
    padding: 0;
    margin: 0;
    gap: 20px;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 70px;
    left: -100%;
    opacity: 1;
    transition: all 0.5s ease;
    z-index: 2;
    text-align: center;
    justify-content: center;
    align-items: center;

    ${(props) =>
      props.isClicked &&
      css`
        background: #121212;
        left: 0;
        opacity: 1;
        transition: all 0.5s ease;
        z-index: 2;
      `}
  }
`;

const LinkConTainer = styled.li`
  display: grid;
  border-bottom: 1px solid #3ac5e8;

  @media screen and (max-width: 960px) {
    width: 40vw;
    border-bottom: 1px solid #3ac5e8;
  }
`;

const LinkStyled = styled(NavLink)`
  display: grid;
  text-decoration: none;
  padding: 0;
  margin: 0;

  @media screen and (max-width: 960px) {
    height: 48px;
  }
`;

const LinkButton = styled.button`
  background: transparent;
  border: none;
  color: #dcdcdc;
  
  cursor: pointer;

  @media screen and (max-width: 960px) {
    font-size: 80%;
  }
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
