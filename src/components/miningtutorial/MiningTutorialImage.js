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
  margin: 20px 0 0 0;
`;

const TutorialImage = styled.img`
  width: 50vw;

  @media screen and (max-width: 960px) {
    width: 80vw;
  }
`;
