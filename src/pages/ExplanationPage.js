import styled, { css } from 'styled-components';
import explanations from '../utils/explanations';
import ExplanationHeadline from '../components/explanations/ExplanationHeadline';
import ExplanationText from '../components/explanations/ExplanationText';
import { useState } from 'react';

export default function ExplanationPage() {
  const [showExplanation, setShowExplanation] = useState(false);

  const handleExplanation = () => setShowExplanation(!showExplanation);
  const hideExplanation = () => setShowExplanation(false);

  return (
    <Wrapper>
      <ButtonList>
        {explanations.map((button) => (
          <StyledListItem key={button.name}>
            <StyledExplButton onClick={handleExplanation}>
              {button.name}
            </StyledExplButton>
          </StyledListItem>
        ))}
      </ButtonList>
      <ExplanationList isActivated={showExplanation}>
        {explanations.map((article) => (
          <Explanation key={article._id}>
            <ExplanationHeadline headline={article.question} />
            <ExplanationText text={article.answer} />
          </Explanation>
        ))}
      </ExplanationList>
      <CloseExplButton onClick={hideExplanation} isActivated={showExplanation}>
        <i className="fa-solid fa-times"></i>
      </CloseExplButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  position: relative;
  margin-top: 50px;
`;

const ButtonList = styled.ul`
  list-style: none;
  padding-left: 0;
  display: grid;
  justify-self: center;
  gap: 20px;
  width: 40vw;

  @media screen and (max-width: 960px) {
    width: unset;
  }
`;

const StyledListItem = styled.li`
  display: grid;
`;

const StyledExplButton = styled.button`
  background: transparent;
  border: none;
  border-bottom: solid 1px #454545;
  color: #dcdcdc;
  font-size: 80%;
  cursor: pointer;
  height: 48px;
`;

const ExplanationList = styled.ul`
  list-style: none;
  padding-left: 0;
  justify-self: center;
  width: 100vw;
  position: absolute;
  right: -120%;

  ${(props) =>
    props.isActivated &&
    css`
      background: #121212;
      right: 0;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 1;
    `}

  @media screen and (max-width: 960px) {
    width: 100vw;
    position: absolute;

    ${(props) =>
      props.isActivated &&
      css`
        background: #121212;
        right: 0;
        opacity: 1;
        transition: all 0.5s ease;
        z-index: 1;
      `}
  }
`;

const Explanation = styled.article`
  display: grid;
  position: absolute;
`;

const CloseExplButton = styled.button`
  position: absolute;
  right: -100%;
  top: 10px;

  ${(props) =>
    props.isActivated &&
    css`
      right: 0;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 1;
    `}
`;
