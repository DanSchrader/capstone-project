import styled, { css } from 'styled-components';
import Hints from './miningtutorial/Hints';
import TecSpecs from './miningtutorial/TecSpecs';
import Preparation from './miningtutorial/Preparation';
import WalletDownload from './miningtutorial/WalletDownload';
import WalletInstallation from './miningtutorial/WalletInstallation';
import MinerDownload from './miningtutorial/MinerDownload';
import MiningPools from './miningtutorial/MiningPools';
import MinerConfig from './miningtutorial/MinerConfig';
import MinerSetup from './miningtutorial/MinerSetup';

export default function MiningTutorial({ showTutorialArticle }) {
  return (
    <TutorialArticleList isVisible={showTutorialArticle}>
      <Hints id={'hints'} />
      <TecSpecs id={'tecspecs'} />
      <Preparation id={'preparation'} />
      <WalletDownload id={'walletdownload'} />
      <WalletInstallation id={'walletinstallation'} />
      <MinerDownload id={'minerdownload'} />
      <MiningPools id={'miningpools'} />
      <MinerConfig id={'minerconfig'} />
      <MinerSetup id={'minersetup'} />
    </TutorialArticleList>
  );
}

const TutorialArticleList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  position: absolute;
  width: 100%;
  left: -100%;
  background: #121212;
  opacity: 0;
  z-index: 0;

  ${(props) =>
    props.isVisible &&
    css`
      left: 0;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 1;
    `}
`;
