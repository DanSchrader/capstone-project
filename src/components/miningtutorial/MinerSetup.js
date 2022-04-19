import styled from 'styled-components';
import TextSeparator from '../TextSeparator';
import MiningTutorialHeadline from '../MiningTutorialHeadline';
import MiningTutorialText from '../MiningTutorialText';
import MiningTutorialImage from '../MiningTutorialImage';
import tutorialImage14 from '../../images/xmrig-ghostrider.png';
import tutorialImage15 from '../../images/xmrig-code.png';
import tutorialImage16 from '../../images/xmrig-admin.png';
import tutorialImage17 from '../../images/xmrig-mining.png';
import tutorialImage18 from '../../images/minafacil-walletenter.png';

export default function MinerSetup() {
  return (
    <TutorialArticleItem>
      <MiningTutorialHeadline headline={'XMRig - Setup'} />
      <MiningTutorialImage
        src={tutorialImage14}
        alt={'Dokumentationsbild: Miner-Installation'}
      />
      <MiningTutorialText
        text={
          'Wir gehen nun in unser entzipptes XMRig-Verzeichnis in unserem Mining-Ordner und öffnen die Datei "rtm_ghostrider_example" in einem Text-Editor. Dafür eignet sich jeder normale Text-Editor - auch der Windows-eigene. Wir verwenden für dieses Tutorial "notepad++".'
        }
      />
      <MiningTutorialImage
        src={tutorialImage15}
        alt={'Dokumentationsbild: Miner-Installation'}
      />
      <MiningTutorialText
        text={
          'Jetzt markieren wir uns in der hervorgehobenen Zeile auf dem Bild alles NACH xmrig.exe AB "-a" BIS EINSCHLIEßLICH "-u". Ist der Text markiert, fügen wir per Strg + V die Code-Zeile aus unserer Zwischenablage ein und speichern die Datei "rtm_ghostrider_example" ab.'
        }
      />
      <MiningTutorialImage
        src={tutorialImage16}
        alt={'Dokumentationsbild: Miner-Installation'}
      />
      <MiningTutorialText
        text={
          'Im Anschluss klicken wir mit der rechten Maustaste auf die ausführbare Anwendung "xmrig" und wechseln in den Reiter "Kompatibilität". Hier setzen wir noch einen Haken bei "Programm als Administrator ausführen".'
        }
      />
      <MiningTutorialText
        text={
          'Das ist wichtig, da XMRig sonst nur bis zu 1GB große Seiten verarbeiten kann und die Funktion "huge pages" deaktiviert ist. Somit wäre unsere Hashrate gedrosselt. Wir klicken auf "Übernehmen" und sind fast startklar.'
        }
      />
      <MiningTutorialImage
        src={tutorialImage17}
        alt={'Dokumentationsbild: Miner-Installation'}
      />
      <MiningTutorialText
        text={
          'Jetzt können wir loslegen. Wir klicken doppelt auf die Datei "rtm_ghostrider_example", die nun XMRig mit unseren Konfigurationen startet. Vermutlich fragt Windows nochmal nach Rechten, die könnt ihr erteilen und dann sollten sich zwei Fenster öffnen (Bild).'
        }
      />
      <MiningTutorialImage
        src={tutorialImage18}
        alt={'Dokumentationsbild: Miner-Installation'}
      />
      <MiningTutorialText
        text={
          'Wenn euer Miner nun fleißig Aufträge erhält, funktioniert alles. Habt etwas Geduld. Es dauert auf jeden Fall mehr als drei Stunden, bis euch die ersten Coins ausbezahlt werden. Überprüfen könnt ihr das dann in eurer Wallet oder in euren Minafacil-Stats.'
        }
      />
      <MiningTutorialText
        text={
          'Dazu geht ihr wieder auf minafacil.com und fügt unter "Wallet" eure Empfangs-Adresse ein, die ihr auch schon in der XMRig-Konfiguration verwendet habt. Fröhliches Minen!'
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
