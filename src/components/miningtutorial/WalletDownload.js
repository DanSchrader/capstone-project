import styled from 'styled-components';
import CloseTutorialButton from './CloseTutorialButton';
import MiningTutorialHeadline from './MiningTutorialHeadline';
import MiningTutorialText from './MiningTutorialText';
import MiningTutorialImage from './MiningTutorialImage';
import MiningTutorialLink from './MiningTutorialLink';
import tutorialImage04 from '../../images/rtm-wallet-download.png';
import tutorialImage05 from '../../images/rtm-wallet-download-2.png';
import tutorialImage06 from '../../images/rtm-wallet-download-3.png';

export default function WalletDownload({ hideTutorialArticle }) {
  return (
    <TutorialArticleItem>
      <MiningTutorialHeadline headline={'Die Wallet - Download'} />
      <MiningTutorialText
        text={
          'Nun widmen wir uns der Installation unserer Wallet. Sie dient später dazu, die von uns gemine-ten Coins zu empfangen und zu verwahren.'
        }
      />
      <MiningTutorialImage
        src={tutorialImage04}
        alt={'Dokumentationsbild: Wallet-Download'}
      />
      <MiningTutorialText
        text={
          'In diesem Tutorial verwenden wir die hauseigene Raptoreum-Wallet. Dazu besuchen wir die Website'
        }
      />
      <MiningTutorialLink link={'http://www.raptoreum.com'} text={'raptoreum.com'} />
      <MiningTutorialText
        text={'und wählen in der Navigationsleiste unter Downloads "Wallet".'}
      />
      <MiningTutorialImage
        src={tutorialImage05}
        alt={'Dokumentationsbild: Wallet-Download'}
      />
      <MiningTutorialText
        text={
          'Wir werden auf GitHub weitergeleitet und laden die Datei "raptoreum_versionsnummer_windows_64_setup.exe" herunter.'
        }
      />
      <MiningTutorialImage
        src={tutorialImage06}
        alt={'Dokumentationsbild: Wallet-Download'}
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
  justify-items: center;

  @media screen and (max-width: 960px) {
    width: 100vw;
  }
`;