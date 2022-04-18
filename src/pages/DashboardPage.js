import styled from 'styled-components';
import Dashboard from '../components/Dashboard';
import DashboardNews from '../components/DashboardNews';
import ScrollToTop from '../utils/ScrollToTop';

export default function DashboardPage() {
  return (
    <DashboardWrapper>
      <ScrollToTop />
      <Dashboard />
      <DashboardNews />
    </DashboardWrapper>
  );
}

const DashboardWrapper = styled.div`
  display: grid;

  @media screen and (max-width: 960px) {
    margin-top: 50px;
  }
`;
