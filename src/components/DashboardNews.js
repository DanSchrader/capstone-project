import styled from 'styled-components';
import DashboardNewsHeadLine from './DashboardNewsHeadline';
import DashboardNewsArticle from './DashboardNewsArticle';
import news from '../utils/newsData';
import { NavLink } from 'react-router-dom';

export default function DashBoardNews() {
  const mostRecentNews = news[0];
  return (
    <NewsWrapper>
      <NewsTitle>News</NewsTitle>
      <DashboardNewsHeadLine mostRecentNews={mostRecentNews} />
      <DashboardNewsArticle mostRecentNews={mostRecentNews} />
      <NewsLink to="/news">
        <NewsButton onClick={window.scrollTo(0, 0)}>Mehr News...</NewsButton>
      </NewsLink>
    </NewsWrapper>
  );
}

const NewsWrapper = styled.section`
  display: grid;
`;

const NewsTitle = styled.h2`
  
  margin: 0;
  margin: 30px 0 0 30px;
  color: #3ac5e8;

  @media screen and (max-width: 960px) {
    font-size: 100%;
  }
`;

const NewsLink = styled(NavLink)`
  display: grid;
  text-decoration: none;
  height: 48px;
  width: 150px;
  justify-self: center;
  margin-top: 10px;
`;

const NewsButton = styled.button`
  background: transparent;
  border: none;
  color: #dcdcdc;
  cursor: pointer;
  border-bottom: 1px solid #3ac5e8;

  @media screen and (max-width: 960px) {
    font-size: 80%;
  }
`;
