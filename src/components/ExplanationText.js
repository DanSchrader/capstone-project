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
  grid-template-rows: auto auto auto auto auto;
  padding: 0 50px;
  margin: 0;
  text-align: justify;
  hyphens: auto;
  height: fit-content;
`;

const Text = styled.p`
  font-size: 80%;
  font-weight: 300;
  line-height: 130%;
`;
