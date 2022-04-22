import styled from 'styled-components';

export default function ExplanationText({ text }) {
  return (
    <TextWrapper>
      <Text>{text.p1}</Text>
      <Text>{text.p2}</Text>
      <Text>{text.p3}</Text>
      <Text>{text.p4}</Text>
      <Text>{text.p5}</Text>
      <Text>{text.p6}</Text>
      <Text>{text.p7}</Text>
      <Text>{text.p8}</Text>
    </TextWrapper>
  );
}

const TextWrapper = styled.div`
  display: grid;
  
  margin: 0;
  text-align: justify;
  hyphens: auto;
  height: fit-content;

  @media screen and (max-width: 960px) {
    padding: 0 50px;
  }
`;

const Text = styled.p`
  line-height: 130%;

  @media screen and (max-width: 960px) {
  font-size: 80%;
  font-weight: 300;
  line-height: 120%;
  }
`;
