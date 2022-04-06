import styled from 'styled-components';
import NavBar from './components/NavBar';
import DashboardPage from './pages/DashboardPage';
import ExplanationPage from './pages/ExplanationPage';
import MiningDocPage from './pages/MiningDocPage';
import BuyingDocPage from './pages/BuyingDocPage';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <AppContainer>
      <NavBar />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/explanation" element={<ExplanationPage />} />
        <Route path="/mining-tutorial" element={<MiningDocPage />} />
        <Route path="/buying-tutorial" element={<BuyingDocPage />} />
      </Routes>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  width: 100vw;
  padding: 10px;
`;
