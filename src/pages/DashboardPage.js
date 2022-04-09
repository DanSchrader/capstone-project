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

const DashboardWrapper = styled.div`
  display: grid;

  @media screen and (max-width: 960px) {
    margin-top: 50px;
  }
`;
