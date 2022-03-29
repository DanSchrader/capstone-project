import styled from 'styled-components';
import Header from './components/Header';
import DashboardPage from './pages/DashboardPage';

export default function App() {
  return (
    <AppContainer>
      <Header />
      <DashboardPage />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  background-color: #121212;
  color: #dcdcdc;
`;
