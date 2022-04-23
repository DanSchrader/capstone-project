import styled from 'styled-components';
import CloseTutorialButton from './CloseTutorialButton';
import MiningTutorialHeadline from './MiningTutorialHeadline';
import MiningTutorialText from './MiningTutorialText';

export default function TecSpecs({ hideTutorialArticle }) {
  return (
    <TutorialArticleItem>
      <MiningTutorialHeadline headline={'Technische Anforderungen'} />
      <MiningTutorialText
        text={
          'Für dieses Tutorial gehen wir von einer weit verbreiteten Hard- und Softwarekombination aus, die für die meisten Otto-Normalverbraucher relevant und für das Mining selbst auch mit am Profitabelsten ist:'
        }
      />
      <TechSpecList>
        <TechSpecListItem>Desktop-PC</TechSpecListItem>
        <TechSpecListItem>Windows 10 oder 11</TechSpecListItem>
        <TechSpecListItem>
          AMD Ryzen Desktop CPU (Ryzen 7 3800X oder höher)
        </TechSpecListItem>
        <TechSpecListItem>XMRig-Miner</TechSpecListItem>
      </TechSpecList>
      <MiningTutorialText
        text={
          'Mit modernen Intel-CPUs kann man natürlich auch minen, allerdings ist dort das Preis-CPU-Core-Verhältnis suboptimal und CPU-Mining profitiert stark von Multi-Core-CPUs - je mehr Kerne, desto besser.'
        }
      />
      <CloseTutorialButton hideTutorialArticle={hideTutorialArticle} />
    </TutorialArticleItem>
  );
}

const TutorialArticleItem = styled.li`
  display: grid;
  position: absolute;
  padding-bottom: 20px;
  width: 50vw;
  justify-self: center;

  @media screen and (max-width: 960px) {
    width: 100vw;
  }
`;

const TechSpecList = styled.ul`
  display: grid;
  padding: 0 15px 0 30px;
  margin: 20px 28px 0 28px;
`;

const TechSpecListItem = styled.li`
  @media screen and (max-width: 960px) {
  font-size: 90%;
  font-weight: 300;
  line-height: 120%;
  }
`;
