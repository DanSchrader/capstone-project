import styled, { css } from 'styled-components';
import Hint from './Hint';
import TecSpecs from './TecSpecs';
import Preparation from './Preparation';
import WalletDownload from './WalletDownload';
import WalletInstallation from './WalletInstallation';
import MinerDownload from './MinerDownload';
import MiningPools from './MiningPools';
import MinerConfig from './MinerConfig';
import MinerSetup from './MinerSetup';

export default function MiningTutorial({
  showTutorialArticle,
  hideTutorialArticle,
  tutorial,
}) {
  return (
    <TutorialArticleList isVisible={showTutorialArticle} role="list">
      {tutorial === 'hint' && (
        <Hint id={'hint'} hideTutorialArticle={hideTutorialArticle} />
      )}
      {tutorial === 'tecspecs' && (
        <TecSpecs id={'tecspecs'} hideTutorialArticle={hideTutorialArticle} />
      )}
      {tutorial === 'preparation' && (
        <Preparation
          id={'preparation'}
          hideTutorialArticle={hideTutorialArticle}
        />
      )}
      {tutorial === 'walletdownload' && (
        <WalletDownload
          id={'walletdownload'}
          hideTutorialArticle={hideTutorialArticle}
        />
      )}
      {tutorial === 'walletinstallation' && (
        <WalletInstallation
          id={'walletinstallation'}
          hideTutorialArticle={hideTutorialArticle}
        />
      )}
      {tutorial === 'minerdownload' && (
        <MinerDownload
          id={'minerdownload'}
          hideTutorialArticle={hideTutorialArticle}
        />
      )}
      {tutorial === 'miningpools' && (
        <MiningPools
          id={'miningpools'}
          hideTutorialArticle={hideTutorialArticle}
        />
      )}
      {tutorial === 'minerconfig' && (
        <MinerConfig
          id={'minerconfig'}
          hideTutorialArticle={hideTutorialArticle}
        />
      )}
      {tutorial === 'minersetup' && (
        <MinerSetup
          id={'minersetup'}
          hideTutorialArticle={hideTutorialArticle}
        />
      )}
    </TutorialArticleList>
  );
}

const TutorialArticleList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  position: absolute;
  top: 120px;
  height: 100vh;
  width: 100%;
  left: -100%;
  background: #121212;
  opacity: 0;
  z-index: 1;
  transition: all 0.5s ease;

  ${(props) =>
    props.isVisible &&
    css`
      left: 0;
      background: #121212;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 1;
    `}
`;
