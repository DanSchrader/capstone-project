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

  @media screen and (max-width: 960px) {
    margin-top: 50px;
    width: 100%;
  }
`;

const MiningTutTitle = styled.h2`
  margin: 0;
  margin: 30px 0 0 0;
  color: #3ac5e8;

  @media screen and (max-width: 960px) {
    font-size: 100%;
  }
`;

const HeadlineList = styled.ul`
  display: grid;
  list-style: none;
  padding: 0;
  margin: 20px 0 0 0;
  position: relative;
  justify-self: center;
  gap: 20px;
  width: 50vw;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;

const HeadlineListItem = styled.li`
  display: grid;
  justify-items: center;
`;

const HeadlineButton = styled.button`
  background: transparent;
  border: none;
  position: relative;
  color: #dcdcdc;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  cursor: pointer;
  width: 400px;
  height: 100px;
  

  @media screen and (max-width: 960px) {
    font-size: 80%;
    width: 300px;
    height: 48px;
    background: transparent;
    border: none;
    border-bottom: solid 1px #565656;
    box-shadow: none;
    font-size: 80%;
    }
`;
