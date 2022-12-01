import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../components/header/header';
import Media from 'react-media';
import Balance from '../balance/balance';
import Navigation from '../navigation/navigation';
import Currency from 'components/Currency';
import { Suspense } from 'react';
import bigImg from '../../images/Rectangle.png';
import { Routes, Route } from 'react-router';

import {
  Section,
  ContainerDashboard,
  Container,
  TabletWrapper,
  DesktopWrapper,
  Separator,
} from './dashboardPage.styled';

export function DashboardPage() {
  return (
    <>
      <Header />
      <main>
        <Section bigImg={bigImg}>
          <Media
            queries={{
              small: '(max-width: 767px)',
              medium: '(min-width: 768px) and (max-width: 1279px)',
              large: '(min-width: 1200px)',
            }}
          >
            {matches => (
              <Fragment>
                {matches.small && (
                  <Container>
                    <ContainerDashboard>
                      <Navigation />
                      <Routes>
                        <Route path="/home" element={<Balance />} />
                      </Routes>
                      <Suspense fallback={null}>
                        <Outlet />
                      </Suspense>
                    </ContainerDashboard>
                  </Container>
                )}
                {matches.medium && (
                  <Container>
                    <ContainerDashboard>
                      <TabletWrapper>
                        <Navigation />
                        <Balance />
                      </TabletWrapper>
                      <Currency />
                    </ContainerDashboard>
                    <div>
                      <Suspense fallback={null}>
                        <Outlet />
                      </Suspense>
                    </div>
                  </Container>
                )}
                {matches.large && (
                  <Container>
                    <ContainerDashboard>
                      <DesktopWrapper>
                        <Navigation />
                        <Balance />
                        <Currency />
                      </DesktopWrapper>
                      <Separator />
                      <div>
                        <Suspense fallback={null}>
                          <Outlet />
                        </Suspense>
                      </div>
                    </ContainerDashboard>
                  </Container>
                )}
              </Fragment>
            )}
          </Media>
        </Section>
      </main>
    </>
  );
}
