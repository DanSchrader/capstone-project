import styled from 'styled-components';

export default function MiningTutorialText({ text }) {
  return (
    <TextWrapper>
      <TutorialText>{text}</TutorialText>
    </TextWrapper>
  );
}

const TextWrapper = styled.div`
  padding: 0 15px;
  margin: 0 28px;
  margin-top: 20px;
`;

const TutorialText = styled.p`
  font-size: 90%;
  font-weight: 300;
  text-align: justify;
  hyphens: auto;
  margin: 0;
`;
