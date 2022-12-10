import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';

import { Suspense } from 'react';
import mediumImg from 'images/Rectangle.png.png';
import bigImg from 'images/rectangleDesk.png';

import { Dashboard } from 'components/Dashboard/Dashboard';
import { Section, ContainerDashboard } from './DashboardPages.styled';
import Container from 'components/Container/Container';
import { ModalAddCategory } from 'components/ModalAddCategory/ModalAddCategory';
import AddTransaction from 'components/AddTransaction/AddTransaction';

const DashboardPage = () => {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <main>
        <Section mediumImg={mediumImg} bigImg={bigImg}>
          <Container style={{ position: 'relative' }}>
            <ModalAddCategory />
            <ContainerDashboard>
              <Dashboard />
              <Suspense fallback={null}>
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
