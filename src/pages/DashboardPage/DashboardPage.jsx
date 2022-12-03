import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import Media from 'react-media';
import Balance from 'components/Balance/Balance';
// import Navigation from '../navigation/navigation';
import Currency from 'components/Currency/Currency';
import { Suspense } from 'react';
import bigImg from 'images/Rectangle.png.png';
import { Routes, Route } from 'react-router';
import Navigation from 'components/Navigation/Navigation';

import {
  Section,
  ContainerDashboard,
  Container,
  TabletWrapper,
  DesktopWrapper,
  Separator,
} from './DashboardPages.styled';

export function DashboardPage() {
  return (
    <>
      <Header />
      <main>
        <Section bigImg={bigImg}>
          <Container>
            <ContainerDashboard>
              <Navigation />
              <Balance />

              <Media
                queries={{
                  tablet: '(min-width: 768px)',
                }}
              >
                {matches => matches.tablet && <Currency />}
              </Media>

              <Suspense fallback={null}>
                <Outlet />
              </Suspense>
            </ContainerDashboard>
          </Container>
          {/* <Media
            queries={{
              small: '(max-width: 767px)',
              medium: '(min-width: 768px) and (max-width: 1279px)',
              large: '(min-width: 1280px)',
            }}
          >
            {matches => (
              <Fragment>
                {matches.small && (
                  
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
          </Media> */}
        </Section>
      </main>
    </>
  );
}
