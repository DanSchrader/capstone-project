import logo from '../images/raptoreum-logo.svg';
import styled from 'styled-components';

export default function Header() {
  return (
    <AppHeader>
      <RaptoreumLogoContainer>
        <RaptoreumLogoImage src={logo} alt="Raptoreum-Logo" />
      </RaptoreumLogoContainer>
      <RaptoreumDecryptdedContainer>
        <RaptoreumDecryptedText>raptoreum.de.crypted</RaptoreumDecryptedText>
      </RaptoreumDecryptdedContainer>
    </AppHeader>
  );
}

const AppHeader = styled.header`
  display: grid;
  grid-template-columns: 40px 1fr;
  padding: 10px;
  gap: 10px;
`;

const RaptoreumLogoContainer = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: #dcdcdc;
  display: grid;
  align-items: center;
  justify-items: center;
`;

const RaptoreumLogoImage = styled.img`
  height: 35px;
  width: 35px;
`;

const RaptoreumDecryptdedContainer = styled.div`
  height: 40px;
  display: grid;
  align-items: center;
`;

const RaptoreumDecryptedText = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 140%;
  font-weight: 900;
`;
