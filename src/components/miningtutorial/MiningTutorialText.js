import styled from 'styled-components';

export default function MiningTutorialText({ text }) {
  return (
    <TextWrapper>
      <TutorialText>{text}</TutorialText>
    </TextWrapper>
  );
}

const TextWrapper = styled.div`
@media screen and (max-width: 960px) {
    padding: 0 15px;
    margin: 0 28px;
  }
`;

const TutorialText = styled.p`
  text-align: justify;
  hyphens: auto;
  margin: 20px 0 0 0;
  line-height: 130%;

  @media screen and (max-width: 960px) {
  font-size: 90%;
  font-weight: 300;
  line-height: 120%;
  }
`;
