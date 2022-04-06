import styled from 'styled-components';
import Dashboard from '../components/Dashboard';
import NewsSection from '../components/NewsSection';

export default function DashboardPage() {
  return (
    <DashboardWrapper>
      <Dashboard />
      <NewsSection />
    </DashboardWrapper>
  );
}

const DashboardWrapper = styled.main`
  justify-self: center;

  @media screen and (max-width: 960px) {
    margin-top: 40px;
  }
`;
