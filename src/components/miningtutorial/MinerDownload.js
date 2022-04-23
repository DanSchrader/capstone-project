import styled from 'styled-components';
import CloseTutorialButton from './CloseTutorialButton';
import MiningTutorialHeadline from './MiningTutorialHeadline';
import MiningTutorialText from './MiningTutorialText';
import MiningTutorialImage from './MiningTutorialImage';
import tutorialImage10 from '../../images/xmrig-download.png';
import tutorialImage11 from '../../images/xmrig-unzipped.png';

export default function MinerDownload({ hideTutorialArticle }) {
  return (
    <TutorialArticleItem>
      <MiningTutorialHeadline headline={'XMRig - Miner-Download'} />
      <MiningTutorialImage
        src={tutorialImage10}
        alt={'Dokumentationsbild: Miner-Download'}
      />
      <MiningTutorialText
        text={'Wir besuchen der Einfachheit halber die Seite'}
      />
      <StyledLink href="http://www.xmrig.com/download">
        xmrig.com/download
      </StyledLink>
      <MiningTutorialText
        text={
          'und laden uns die aktuelle Version von XMRig für Win64 herunter. Jetzt wird so ziemlich jeder Browser meckern und den Download verhindern wollen. Ein Mining-Programm wird immer als Schadsoftware eingestuft. Wir gestatten den Download manuell und speichern die .zip-Datei ebenfalls in unserem Mining-Ordner ab.'
        }
      />
      <MiningTutorialImage
        src={tutorialImage11}
        alt={'Dokumentationsbild: Miner-Download'}
      />
      <MiningTutorialText
        text={
          'Die .zip-Datei entpacken wir im selben Ordner und können sie anschließend löschen. Der Ordner "old" auf dem Bild kann ignoriert werden, der stammt noch aus einem alten Tutorial.'
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

const StyledLink = styled.a`
  text-decoration: none;
  color: #dcdcdc;
  margin: 0 43px;
  margin-top: 20px;
  border-bottom: solid 1px #3ac5e8;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    font-size: 90%;
    font-weight: 300;
  }
`;
