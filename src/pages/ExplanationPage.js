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
  margin-top: 50px;
`;

const ExplanationTitle = styled.h2`
  font-size: 100%;
  margin: 0;
  margin: 30px 0 0 30px;
  color: #3ac5e8;
`;

const QuestionList = styled.ul`
  list-style: none;
  padding-left: 0;
  display: grid;
  position: relative;
  justify-self: center;
  gap: 20px;
  width: 100%;

  @media screen and (max-width: 960px) {
  }
`;

const StyledListItem = styled.li`
  display: grid;
  justify-items: center;
  position: relative;
`;

const StyledExplButton = styled.button`
  background: transparent;
  border: none;
  border-bottom: solid 1px #565656;
  color: #dcdcdc;
  font-size: 80%;
  cursor: pointer;
  height: 48px;
  width: 300px;
  position: relative;
`;

const AnswerList = styled.ul`
  display: grid;
  list-style: none;
  padding-left: 0;
  position: absolute;
  top: 110px;
  width: 100%;
  height: 100%;
  left: -100%;
  z-index: 1;
  background: #121212;
  transition: all 0.5s ease;
  opacity: 1;

  ${(props) =>
    props.isShown &&
    css`
      left: 0;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 1;
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
  right: 35px;
  top: -30px;
  background: none;
  border: none;
  color: #dcdcdc;
  font-size: 150%;
  height: 48px;
  width: 48px;
`;
