import { useState } from 'react';
import styled from 'styled-components';
import ScrollToTop from '../utils/ScrollToTop';
import MiningTutorial from '../components/miningtutorial/MiningTutorial';

export default function MiningTutPage() {
  const [showTutorialArticle, setShowTutorialArticle] = useState(false);
  const [tutorial, setTutorial] = useState(null);

  const handleShowTutorialArticle = (page) => {
    setShowTutorialArticle(!showTutorialArticle);
    setTutorial(page);
  };

  const handleHideTutorialArticle = () => {
    setShowTutorialArticle(false);
  };

  return (
    <MiningTutWrapper>
      <ScrollToTop />
      <MiningTutTitle>Mining-Anleitung</MiningTutTitle>
      <HeadlineList role="list">
        <HeadlineListItem id={'hints'}>
          <HeadlineButton onClick={() => handleShowTutorialArticle('hint')}>
            Hinweise vorab
          </HeadlineButton>
        </HeadlineListItem>
        <HeadlineListItem id={'tecspecs'}>
          <HeadlineButton onClick={() => handleShowTutorialArticle('tecspecs')}>
            Technische Anforderungen
          </HeadlineButton>
        </HeadlineListItem>
        <HeadlineListItem id={'preparation'}>
          <HeadlineButton
            onClick={() => handleShowTutorialArticle('preparation')}
          >
            Windows - Vorbereitung
          </HeadlineButton>
        </HeadlineListItem>
        <HeadlineListItem id={'walletdownload'}>
          <HeadlineButton
            onClick={() => handleShowTutorialArticle('walletdownload')}
          >
            Die Wallet - Download
          </HeadlineButton>
        </HeadlineListItem>
        <HeadlineListItem id={'walletinstallation'}>
          <HeadlineButton
            onClick={() => handleShowTutorialArticle('walletinstallation')}
          >
            Die Wallet - Installation
          </HeadlineButton>
        </HeadlineListItem>
        <HeadlineListItem id={'minerdownload'}>
          <HeadlineButton
            onClick={() => handleShowTutorialArticle('minerdownload')}
          >
            XMRig - Miner-Download
          </HeadlineButton>
        </HeadlineListItem>
        <HeadlineListItem id={'miningpools'}>
          <HeadlineButton
            onClick={() => handleShowTutorialArticle('miningpools')}
          >
            Raptoreum - Mining-Pools
          </HeadlineButton>
        </HeadlineListItem>
        <HeadlineListItem id={'minerconfig'}>
          <HeadlineButton
            onClick={() => handleShowTutorialArticle('minerconfig')}
          >
            Minafacil - Konfiguration
          </HeadlineButton>
        </HeadlineListItem>
        <HeadlineListItem id={'minersetup'}>
          <HeadlineButton
            onClick={() => handleShowTutorialArticle('minersetup')}
          >
            XMRig - Setup
          </HeadlineButton>
        </HeadlineListItem>
      </HeadlineList>
      <MiningTutorial
        tutorial={tutorial}
        showTutorialArticle={showTutorialArticle}
        hideTutorialArticle={handleHideTutorialArticle}
      />
    </MiningTutWrapper>
  );
}

const MiningTutWrapper = styled.div`
  display: grid;
  width: 50vw;
  justify-self: center;  

  @media screen and (max-width: 960px) {
    margin-top: 50px;
    width: 100vw;
  }
`;

const MiningTutTitle = styled.h2`
  margin: 30px 0 0 0;
  color: #3ac5e8;

  @media screen and (max-width: 960px) {
    font-size: 100%;
    margin: 30px 43px 0 43px;
  }
`;

const HeadlineList = styled.ul`
  display: grid;
  list-style: none;
  padding: 0;
  margin: 20px 0 0 0;
  justify-self: center;
  gap: 20px;
  width: 50vw;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
    width: 100vw;
    gap: 15px;
    margin: 20px 0 0 0;
  }
`;

const HeadlineListItem = styled.li`
  display: grid;
  justify-items: center;
`;

const HeadlineButton = styled.button`
  border: none;
  color: #dcdcdc;
  border-radius: 5px;
  background: #0b4b5b;
  cursor: pointer;
  width: 24vw;
  height: 100px;
  padding: 0 20px;
  

  @media screen and (max-width: 960px) {
    font-size: 80%;
    width: 75vw;
    height: 48px;
    border: none;
    background: #0b4b5b;
    font-size: 80%;
    }
`;
