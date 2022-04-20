import styled from 'styled-components';

export default function MiningTutorialImage({ src, alt }) {
  return (
    <ImageContainer>
      <TutorialImage src={src} alt={alt} />
    </ImageContainer>
  );
}

const ImageContainer = styled.div`
  display: grid;
  margin: 20px 43px 0 43px;
`;

const TutorialImage = styled.img`
  max-width: 275px;
`;
