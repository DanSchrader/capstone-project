import styled, { css } from 'styled-components';
import explanations from '../utils/explanationsData';
import { useState } from 'react';
import ExplanationHeadline from '../components/ExplanationHeadline';
import ExplanationText from '../components/ExplanationText';
import ScrollToTop from '../utils/ScrollToTop';

export default function ExplanationPage() {
  const [showExplanation, setShowExplanation] = useState(false);
  const [explanationList, setExplanationList] = useState(explanations);

  const hideExplanation = () => {
    setShowExplanation(false);
    setExplanationList(explanations);
  };

  return (
    <ExplanationsWrapper>
      <ScrollToTop />
      <ExplanationTitle>Beschreibung</ExplanationTitle>
      <QuestionList>
        {explanationList.map(({ _id, name }) => {
          return (
            <StyledListItem key={_id}>
              <StyledExplButton
                onClick={() => {
                  setExplanationList((explanationList) =>
                    explanationList.filter(
                      (explanation) => explanation._id === _id
                    )
                  );
                  setShowExplanation(!showExplanation);
                  window.scrollTo(0, 0);
                }}
              >
                {name}
              </StyledExplButton>
            </StyledListItem>
          );
        })}
      </QuestionList>
      <AnswerList isShown={showExplanation}>
        {explanationList.map(({ _id, question, answer }) => (
          <AnswerItem key={_id} isShown={showExplanation}>
            <ExplanationHeadline headline={question} />
            <ExplanationText text={answer} />
            <CloseExplButton onClick={hideExplanation}>
              <i className="fa fa-times" />
            </CloseExplButton>
          </AnswerItem>
        ))}
      </AnswerList>
    </ExplanationsWrapper>
  );
}

const ExplanationsWrapper = styled.div`
display: grid;
  
@media screen and (max-width: 960px) {
  margin-top: 50px;
  }
`;

const ExplanationTitle = styled.h2`
  color: #3ac5e8;

  @media screen and (max-width: 960px) {
  font-size: 100%;
  margin: 30px 0 0 0;
  }
`;

const QuestionList = styled.ul`
  list-style: none;
  padding-left: 0;
  display: grid;
  position: relative;
  justify-self: center;
  gap: 20px;
  width: 50vw;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;

const StyledListItem = styled.li`
  display: grid;
  justify-items: center;
  position: relative;
`;

const StyledExplButton = styled.button`
  cursor: pointer;
  position: relative;
  width: 400px;
  height: 100px;
  background: transparent;
  border-radius: 5px;
  border: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  color: #dcdcdc;

  @media screen and (max-width: 960px) {
    font-size: 80%;
    width: 300px;
    height: 48px;
    background: transparent;
    border: none;
    border-bottom: solid 1px #565656;
    box-shadow: none;
    }
`;

const AnswerList = styled.ul`
  display: grid;
  list-style: none;
  padding-left: 0;
  position: absolute;
  width: 50vw;
  height: 100%;
  left: -100%;
  top: 115px;
  z-index: 1;
  background: #121212;
  transition: all 0.5s ease;
  opacity: 1;

  @media screen and (max-width: 960px) {
  top: 110px;
  width: 100%;
  }

  ${(props) =>
    props.isShown &&
    css`
      left: 25vw;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 1;

      @media screen and (max-width: 960px) {
      left: 0;
      }
    `}
`;

const AnswerItem = styled.li`
  display: grid;
  grid-template-rows: 50px auto;
  position: absolute;
  opacity: 0;
  width: 100%;
  left: -100%;
  transition: all 0.5s ease;

  ${(props) =>
    props.isShown &&
    css`
      left: 0;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 1;
    `}
`;

const CloseExplButton = styled.button`
  position: absolute;
  right: -10px;
  top: -52px;
  background: none;
  border: none;
  color: #dcdcdc;
  font-size: 150%;
  height: 48px;
  width: 48px;

  @media screen and (max-width: 960px) {
    right: 35px;
  }
`;
