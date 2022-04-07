import styled from 'styled-components';

export default function MiningDocPage() {
  return (
    <Wrapper>
      <Placeholder>MiningDocPage</Placeholder>
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
