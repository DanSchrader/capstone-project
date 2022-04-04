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
  max-width: 400px;
  display: grid;
  justify-content: center;
`;
