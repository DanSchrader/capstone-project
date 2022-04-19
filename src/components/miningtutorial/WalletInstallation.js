import styled from 'styled-components';
import TextSeparator from '../TextSeparator';
import MiningTutorialHeadline from '../MiningTutorialHeadline';
import MiningTutorialText from '../MiningTutorialText';
import MiningTutorialImage from '../MiningTutorialImage';
import tutorialImage07 from '../../images/rtm-wallet-download.png';
import tutorialImage08 from '../../images/rtm-wallet-download-2.png';
import tutorialImage09 from '../../images/rtm-wallet-download-3.png';

export default function WalletInstallation() {
  return (
    <TutorialArticleItem>
      <MiningTutorialHeadline headline={'Die Wallet - Installation'} />
      <MiningTutorialImage
        src={tutorialImage07}
        alt={'Dokumentationsbild: Wallet-Installation'}
      />
      <MiningTutorialText
        text={
          'Nun installieren wir unsere Wallet in unserem freigegebenen Mining-Ordner.'
        }
      />
      <MiningTutorialImage
        src={tutorialImage08}
        alt={'Dokumentationsbild: Wallet-Installation'}
      />
      <MiningTutorialText
        text={
          'Die Raptoreum-Wallet installiert nun zusätzlich ein Abbild der gesamten Blockchain, das fortlaufend Updates erhält. So ist für volle Transparenz gesorgt, da jeder User sämtliche Transaktionen einsehen kann. Wir wählen dazu in unserem Mining-Ordner ein neues Verzeichnis: RaptoreumCoreData.'
        }
      />
      <MiningTutorialImage
        src={tutorialImage09}
        alt={'Dokumentationsbild: Wallet-Installation'}
      />
      <MiningTutorialText
        text={
          'Ist die Wallet fertig installiert klicken wir auf Datei und Empfangsadressen. Im neuen Fenster fügen wir über den Button "Neu" eine neue Empfangsadresse hinzu und nennen sie "Mining". Das Feld mit der manuellen Adresseingabe lassen wir leer und klicken auf den Button "OK". Jetzt wird uns eine neue Raptoreum-Adresse angezeigt, die wir uns in die Zwischenablage kopieren. Unsere Wallet ist startklar.'
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
