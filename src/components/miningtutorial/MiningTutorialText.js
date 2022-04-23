import styled from 'styled-components';

export default function MiningTutorialText({ text }) {
  return (
    <TextWrapper>
      <TutorialText>{text}</TutorialText>
    </TextWrapper>
  );
}

const TextWrapper = styled.div`
display: grid;
width: 50vw;

@media screen and (max-width: 960px) {
    width: 80vw;
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
