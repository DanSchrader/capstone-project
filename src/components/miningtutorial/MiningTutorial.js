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
  display: grid;
  list-style: none;
  padding-left: 0;
  position: absolute;
  width: 100vw;
  height: 100%;
  left: -100vw;
  top: 115px;
  z-index: 1;
  background: #121212;
  transition: all 0.5s ease;
  opacity: 0;

  @media screen and (max-width: 960px) {
  top: 100px;
  width: 100vw;
  }

  ${(props) =>
    props.isVisible &&
    css`
      left: 0;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 1;

      @media screen and (max-width: 960px) {
      left: 0;
      }
    `}
`;
