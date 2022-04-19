import { useState } from 'react';
import styled from 'styled-components';
import ScrollToTop from '../utils/ScrollToTop';
import MiningTutorial from '../components/MiningTutorial';

export default function MiningTutPage() {
  const [showTutorialArticle, setShowTutorialArticle] = useState(false);

  const handleShowTutorialArticle = () => {
    setShowTutorialArticle(!showTutorialArticle);
  };

  return (
    <MiningTutWrapper>
      <ScrollToTop />
      <MiningTutTitle>Mining-Tutorial</MiningTutTitle>
      <HeadlineList>
        <HeadlineListItem id={'hints'}>
          <HeadlineButton onClick={handleShowTutorialArticle}>
            Hinweise vorab
          </HeadlineButton>
        </HeadlineListItem>
        <HeadlineListItem id={'tecspecs'}>
          <HeadlineButton>Technische Anforderungen</HeadlineButton>
        </HeadlineListItem>
        <HeadlineListItem id={'preparation'}>
          <HeadlineButton>Windows - Vorbereitung</HeadlineButton>
        </HeadlineListItem>
        <HeadlineListItem id={'walletdownload'}>
          <HeadlineButton>Die Wallet - Download</HeadlineButton>
        </HeadlineListItem>
        <HeadlineListItem id={'walletinstallation'}>
          <HeadlineButton>Die Wallet - Installation</HeadlineButton>
        </HeadlineListItem>
        <HeadlineListItem id={'minerdownload'}>
          <HeadlineButton>XMRig - Miner-Download</HeadlineButton>
        </HeadlineListItem>
        <HeadlineListItem id={'miningpools'}>
          <HeadlineButton>Raptoreum - Mining-Pools</HeadlineButton>
        </HeadlineListItem>
        <HeadlineListItem id={'minerconfig'}>
          <HeadlineButton>Minafacil - Konfiguration</HeadlineButton>
        </HeadlineListItem>
        <HeadlineListItem id={'minersetup'}>
          <HeadlineButton>XMRig - Setup</HeadlineButton>
        </HeadlineListItem>
      </HeadlineList>
      <MiningTutorial />
    </MiningTutWrapper>
  );
}

const MiningTutWrapper = styled.div`
  display: grid;
  margin-top: 50px;
`;

const MiningTutTitle = styled.h2`
  font-size: 100%;
  margin: 0;
  margin: 30px 0 0 30px;
  color: #3ac5e8;
`;

const HeadlineList = styled.ul`
  display: grid;
  list-style: none;
  padding: 0;
  margin: 20px 0 0 0;
`;

const HeadlineListItem = styled.li`
  display: grid;
  justify-items: center;
`;

const HeadlineButton = styled.button`
  background: transparent;
  border: none;
  border-bottom: solid 1px #565656;
  color: #dcdcdc;
  font-size: 80%;
  cursor: pointer;
  height: 48px;
  width: 300px;
  position: relative;
`;
