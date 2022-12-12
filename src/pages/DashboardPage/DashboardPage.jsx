import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';

import { Suspense } from 'react';
import mediumImg from 'images/rectangle.png.png';
import bigImg from 'images/rectangleDesk.png';

import { Dashboard } from 'components/Dashboard/Dashboard';
import { Section, ContainerDashboard } from './DashboardPages.styled';
import Container from 'components/Container/Container';

const DashboardPage = () => {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <main>
        <Section mediumImg={mediumImg} bigImg={bigImg}>
          <Container>
            <ContainerDashboard>
              <Dashboard />
              <Suspense fallback={<Loader />}>
                <Outlet />
              </Suspense>
            </ContainerDashboard>
          </Container>
        </Section>
      </main>
    </>
  );
};

export default DashboardPage;
