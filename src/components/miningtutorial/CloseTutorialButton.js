import styled from 'styled-components';

export default function CloseTutorialButton({ hideTutorialArticle }) {
  return (
    <CloseButton onClick={hideTutorialArticle}>
      <i className="fa fa-times" />
    </CloseButton>
  );
}

const CloseButton = styled.button`
  border: none;
  background: transparent;
  height: 48px;
  width: 48px;
  color: white;
  font-size: 150%;
  position: absolute;
  right: -15px;
  top: -35px;
 
  cursor: pointer;

  @media screen and (max-width: 960px) {
  right: 25px;
  top: -43px;
  }
`;
