import styled from 'styled-components';
import CloseTutorialButton from './CloseTutorialButton';
import MiningTutorialHeadline from './MiningTutorialHeadline';
import MiningTutorialText from './MiningTutorialText';
import MiningTutorialImage from './MiningTutorialImage';
import tutorialImage13 from '../../images/minafacil-config.png';

export default function MinerConfig({ hideTutorialArticle }) {
  return (
    <TutorialArticleItem>
      <MiningTutorialHeadline headline={'Minafacil - Konfiguration'} />
      <MiningTutorialText
        text={
          'Wir entscheiden uns in diesem Tutorial für den Minafacil-Pool, nicht zuletzt, weil er keine Gebühren verlangt und immer gut abschneidet, was das Coin/User-Verhältnis betrifft. Ein Klick auf den minafacil.com-Link in der Tabelle führt uns auch gleich zur Website des Pools.'
        }
      />
      <MiningTutorialImage
        src={tutorialImage13}
        alt={'Dokumentationsbild: Miner-Konfiguration'}
      />
      <MiningTutorialText
        text={
          'Auf der Homepage scrollen wir ein bisschen runter, bis wir zum Mining-Konfigurator kommen. Die Stratum-Location setzen wir auf "Europe Stratum". Coin belassen wir bei "Raptoreum" und Solo auf "No".'
        }
      />
      <MiningTutorialText
        text={
          'Per Strg+V platzieren wir nun unsere Wallet-Adresse aus der Zwischenanlage im Eingabefeld für die Wallet-Adresse. Das Eingabefeld für den Rig-Namen können wir leer lassen oder auch eine Eingabe machen. Das spielt erst für versiertere Miner eine Rolle.'
        }
      />
      <MiningTutorialText
        text={
          'Wir bestätigen mit "Start Mining". Jetzt startet aber noch kein Miner, sondern wir bekommen drei Code-Zeilen aktualisiert. Uns interessiert der Inhalt der Zeile "Main Pool", den wir uns in die Zwischenablage kopieren.'
        }
      />
      <CloseTutorialButton hideTutorialArticle={hideTutorialArticle} />
    </TutorialArticleItem>
  );
}

const TutorialArticleItem = styled.li`
  display: grid;
  position: absolute;
`;
