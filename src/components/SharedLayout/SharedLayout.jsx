import { AppContent, Wrapper, Main } from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Footer from 'components/Footer';
import HeaderSection from 'components/HeaderSection';
import Container from 'components/Container';

export default function SharedLayout() {
  return (
    <Wrapper>
      <AppContent>
        <HeaderSection />
        <Main>
          <Container>
            <Suspense fallback={<div>Loading page...</div>}>
              <Outlet />
            </Suspense>
          </Container>
        </Main>
      </AppContent>
      <Footer />
    </Wrapper>
  );
}
