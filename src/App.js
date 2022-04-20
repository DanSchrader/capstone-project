import styled from 'styled-components';
import NavBar from './components/NavBar';
import DashboardPage from './pages/DashboardPage';
import ExplanationPage from './pages/ExplanationPage';
import NewsPage from './pages/NewsPage';
import MiningTutPage from './pages/MiningTutPage';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <AppContainer>
      <NavBar />
      <Pages>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/explanation" element={<ExplanationPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/mining-tutorial" element={<MiningTutPage />} />
        </Routes>
      </Pages>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  width: 100vw;
  padding: 10px;
`;

const Pages = styled.main`
  justify-self: center;
`;
