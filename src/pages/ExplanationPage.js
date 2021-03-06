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
justify-self: center;
width: 50vw;
  
@media screen and (max-width: 960px) {
  margin-top: 50px;
  width: 100vw;
  }
`;

const ExplanationTitle = styled.h2`
  color: #3ac5e8;
  margin: 30px 0 0 0;

  @media screen and (max-width: 960px) {
  font-size: 100%;
  margin: 30px 43px 0 43px;
  }
`;

const QuestionList = styled.ul`
 display: grid;
  list-style: none;
  padding: 0;
  margin: 20px 0 0 0;
  justify-self: center;
  gap: 20px;
  width: 50vw;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
    width: 100vw;
    gap: 15px;
    margin: 20px 0 0 0;
  }
`;

const StyledListItem = styled.li`
  display: grid;
  justify-items: center;
`;

const StyledExplButton = styled.button`
  border: none;
  color: #dcdcdc;
  border-radius: 5px;
  background: #0b4b5b;
  cursor: pointer;
  width: 24vw;
  height: 100px;
  padding: 0 20px;
  

  @media screen and (max-width: 960px) {
    font-size: 80%;
    width: 75vw;
    height: 48px;
    border: none;
    background-color: #0b4b5b;
    font-size: 80%;
    }
`;

const AnswerList = styled.ul`
  display: grid;
  list-style: none;
  padding-left: 0;
  position: absolute;
  width: 50vw;
  height: 100%;
  left: -100vw;
  top: 115px;
  z-index: 1;
  background: #121212;
  transition: all 0.5s ease;
  opacity: 1;

  @media screen and (max-width: 960px) {
  top: 110px;
  width: 100vw;
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
  width: 50vw;
  left: -100vw;
  transition: all 0.5s ease;

  @media screen and (max-width: 960px) {
    width: 100vw;
  }

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
