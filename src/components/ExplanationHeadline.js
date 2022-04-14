import styled from 'styled-components';

export default function ExplanationHeadline({ headline }) {
  return (
    <HeadlineWrapper>
      <Headline>{headline}</Headline>
    </HeadlineWrapper>
  );
}

const HeadlineWrapper = styled.div`
  display: grid;
  padding: 0 50px;
`;

const Headline = styled.h4`
  font-size: 80%;
  padding-bottom: 10px;
  border-bottom: solid 1px #454545;
`;
