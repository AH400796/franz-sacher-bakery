import { AppContent, Wrapper, Main } from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Footer from 'components/Footer';
import HeaderSection from 'components/HeaderSection';
import Container from 'components/Container';
import Skeleton from 'components/Skeleton';

export default function SharedLayout({ screenWidth }) {
  return (
    <Wrapper>
      <AppContent>
        <HeaderSection screenWidth={screenWidth} />
        <Main>
          <Container>
            <Suspense fallback={<Skeleton screenWidth={screenWidth} />}>
              <Outlet />
            </Suspense>
          </Container>
        </Main>
      </AppContent>
      <Footer />
    </Wrapper>
  );
}
