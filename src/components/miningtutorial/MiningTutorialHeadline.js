import styled from 'styled-components';
import logo from '../../images/raptoreum-logo.svg';

export default function MiningTutorialHeadline({ headline }) {
  return (
    <HeadlineWrapper>
      <RaptoreumLogoContainer>
        <RaptoreumLogo src={logo} alt="Raptoreum-Logo" />
      </RaptoreumLogoContainer>
      <TutorialHeadline>{headline}</TutorialHeadline>
    </HeadlineWrapper>
  );
}

const HeadlineWrapper = styled.div`
  display: grid;
  grid-template-columns: 30px 1fr;
  gap: 10px;
  margin: 20px 0 0 0;

  @media screen and (max-width: 960px) {
    margin: 15px 0 0 43px;
  }
`;

const RaptoreumLogoContainer = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: #dcdcdc;
  display: grid;
  align-items: center;
  justify-items: center;
`;

const RaptoreumLogo = styled.img`
  height: 27px;
  width: 27px;
`;

const TutorialHeadline = styled.h3`
  margin: 0;
  padding: 0;
  margin-top: 2px;

  @media screen and (max-width: 960px) {
  font-size: 100%;
  font-weight: 500;
  margin-top: 5px;
  }
`;
