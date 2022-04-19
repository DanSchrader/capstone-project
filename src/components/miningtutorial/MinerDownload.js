import styled from 'styled-components';
import TextSeparator from '../TextSeparator';
import MiningTutorialHeadline from '../MiningTutorialHeadline';
import MiningTutorialText from '../MiningTutorialText';
import MiningTutorialImage from '../MiningTutorialImage';
import tutorialImage10 from '../../images/rtm-wallet-download.png';
import tutorialImage11 from '../../images/rtm-wallet-download-2.png';

export default function MinerDownload() {
  return (
    <TutorialArticleItem>
      <MiningTutorialHeadline headline={'XMRig - Miner-Download'} />
      <MiningTutorialImage
        src={tutorialImage10}
        alt={'Dokumentationsbild: Miner-Download'}
      />
      <MiningTutorialText
        text={
          'Wir besuchen der Einfachheit halber die Seite xmrig.com/download und laden uns die aktuelle Version von XMRig für Win64 herunter. Jetzt wird so ziemlich jeder Browser meckern und den Download verhindern wollen. Ein Mining-Programm wird immer als Schadsoftware eingestuft. Wir gestatten den Download manuell und speichern die .zip-Datei ebenfalls in unserem Mining-Ordner ab.'
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
      <TextSeparator />
    </TutorialArticleItem>
  );
}

const TutorialArticleItem = styled.li`
  display: grid;
  position: absolute;
`;
