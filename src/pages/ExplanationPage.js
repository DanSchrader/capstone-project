import styled from 'styled-components';

export default function ExplanationPage() {
  return (
    <Wrapper>
      <Placeholder>ExplanationPage</Placeholder>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
`;

const Placeholder = styled.div`
  justify-self: center;
  position: fixed;
  top: 40vh;
`;
