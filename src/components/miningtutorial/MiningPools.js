import styled from 'styled-components';
import CloseTutorialButton from './CloseTutorialButton';
import MiningTutorialHeadline from './MiningTutorialHeadline';
import MiningTutorialText from './MiningTutorialText';
import MiningTutorialImage from './MiningTutorialImage';
import tutorialImage12 from '../../images/miningpoolstats-raptoreum.png';

export default function MiningPools({ hideTutorialArticle }) {
  return (
    <TutorialArticleItem>
      <MiningTutorialHeadline headline={'Raptoreum - Mining-Pools'} />
      <MiningTutorialImage
        src={tutorialImage12}
        alt={'Dokumentationsbild: Miner-Installation'}
      />
      <MiningTutorialText
        text={
          'Jetzt ist es an der Zeit, uns für einen Mining-Pool zu entscheiden. Auf der Seite'
        }
      />
      <StyledLink>miningpoolstats.stream/raptoreum</StyledLink>
      <MiningTutorialText
        text={
          'werden wir fündig. An dieser Stelle sei auch gleich auf eine Problematik bzgl. Raptoreum verwiesen:'
        }
      />
      <MiningTutorialText
        text={
          'Der größte und bekannteste Pool flockpool.com sollte nicht verwendet werden. Er verfügt immer noch über 60% der gesamten Hash-Rate und das stellt ein Sicherheitsrisiko dar. Außerdem wirft es kein gutes Licht auf Raptoreum insgesamt. Kein Mining-Pool sollte über 50% und mehr der gesamten Hashrate verfügen. 30 bis 40% sollten das Maximum für einen Pool darstellen.'
        }
      />
      <MiningTutorialText
        text={
          'Viele Miner glauben, im Flockpool würden sie den größten Profit machen, was längst widerlegt ist. In diesem Pool minen so viele Miner, dass die Anteile, die man selbst erhält, viel geringer sind als in anderen Pools. Da bringt es auch nichts, dass Flockpool die meisten Blocks findet - der einzelne kleine Miner kommt dabei schlechter weg.'
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
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: #dcdcdc;
  margin-top: 15px;
  border-bottom: solid 1px #3ac5e8;

  @media screen and (max-width: 960px) {
  font-size: 90%;
  margin: 0 43px;
  }
`;
