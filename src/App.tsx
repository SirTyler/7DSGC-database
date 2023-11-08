import React, { useEffect } from "react";
import {
  createHashRouter,
  isRouteErrorResponse,
  Link,
  Outlet,
  useLocation,
  useRouteError
} from "react-router-dom";
import { Container, Segment, Divider, Image, Breadcrumb, Header} from 'semantic-ui-react'

import Character, {
  loader as characterLoader,
} from './Character';
import { ThemeContext } from './theme/theme-context';

import './App.css';
import Database from './Database';
import Characteristics from "./Characteristics";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const state = {
  filterText: ''
}

const NavCrumb = () => {
  const { pathname } = useLocation();

  const paths = pathname.split("/").filter(Boolean);
  return (
    <Breadcrumb>
    {paths.length ? (
      <>
      <Breadcrumb.Section
        as={Link}
        to={"/"}>Home</Breadcrumb.Section>
        <Breadcrumb.Divider />
      </>
    ) : (
      <Breadcrumb.Section>Home</Breadcrumb.Section>
    )}
    {paths.map((name, index) => {
      const routeTo = `/${paths.slice(0, index+1).join("/")}`;
      const isLast = index === paths.length-1;
      return isLast ? (
        <Breadcrumb.Section>{decodeURIComponent(name).replaceAll("+"," ")}</Breadcrumb.Section>
      ) : (
        <>
        <Breadcrumb.Section
          as={Link}
          to={routeTo}>{decodeURIComponent(name).replaceAll("+"," ")}</Breadcrumb.Section>
          <Breadcrumb.Divider />
          </>
      );
    })}
    </Breadcrumb>
  )
};

export const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        children: [
          { index: true, element: <Index />},
          {
            path: "database",
            children: [
              {index: true, element: <Database />},
              {
                path: ":query",
                element: <Character />,
                loader: characterLoader
              }
            ]
          },
          {
            path: "characteristics",
            children: [
              {index: true, element: <Characteristics />}
            ]
          }
        ]
      }
    ]
  }
]);

function Root() {
  return(
    <ThemeContext.Consumer>
    {(theme) => (
      <div className={theme.dark ? 'dark' : ''}>
      <Container>
        <NavCrumb />
        <Divider />
        <ScrollToTop />
        <Outlet />
      </Container>
      <ToggleButton />
      </div>
    )}
  </ThemeContext.Consumer>
  );
}

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0
    });
  }, [pathname]);

  return null;
}

function Index() {
  return(
    <div>
      <ThemeContext.Consumer>
        {(theme) => (
          <>
            <Segment clearing as={Link} style={{display:'block'}}to='database' className={theme.theme}>Database</Segment>
            <Segment clearing as={Link} style={{display:'block'}}to='characteristics' className={theme.theme}>Characteristics</Segment>
          </>
        )}
      </ThemeContext.Consumer>
    </div>
  );
}

function ErrorPage() {
  const error: Error = useRouteError() as Error;
  console.error(error);

  if(!isRouteErrorResponse(error)) {
    return (
      <ThemeContext.Consumer>
      {(theme) => (
        <div id="error-page" className={theme.dark ? 'dark' : ''}>
        <Container>
          <NavCrumb />
          <Divider />
          <ScrollToTop />
          <Header as='h1' className={theme.theme}>
              Oops!
              <Header.Subheader>
                Sorry, an unexpected error has occurred.
              </Header.Subheader>
            </Header>
            <Image src={require(`./assets/icons/oops.png`)} className={theme.theme} centered />
            <Segment className={theme.theme}>
              <Header as='h2'>{error.message || error.name}</Header>
            </Segment>
            <Segment className={theme.theme}>
                {error.stack}
            </Segment>
        </Container>
        <ToggleButton />
        </div>
      )}
      </ThemeContext.Consumer>
    );
  } else {
    return (
      <ThemeContext.Consumer>
      {(theme) => (
        <div id="error-page" className={theme.dark ? 'dark' : ''}>
        <Container>
          <NavCrumb />
          <Divider />
          <ScrollToTop />
          <Header as='h1' className={theme.theme}>
              Oops!
              <Header.Subheader>
                Sorry, an unexpected error has occurred.
              </Header.Subheader>
            </Header>
            <Image src={require(`./assets/icons/oops.png`)} className={theme.theme} centered />
            <Segment className={theme.theme}>
              <Header as='h2'>{error.status || error.statusText}</Header>
            </Segment>
            <Segment className={theme.theme}>
                {error.data}
            </Segment>
        </Container>
        <ToggleButton />
        </div>
      )}
      </ThemeContext.Consumer>
    );
  }
}

function ToggleButton() {
  const { theme, toggle, dark } = React.useContext(ThemeContext);
  return (
    <div style={{display: "inline-block", marginTop: "10px", width: "110px"}}>
      <i className={`sun icon ${theme}`} style={{float: "left"}}/>
      <div className="ui toggle checkbox">
        <input type="checkbox" id="darkmode" onClick={toggle} defaultChecked={dark}/>
        <label />
      </div>
      <i className={`moon icon ${theme}`} style={{float: "right"}}/>
    </div>
  )
}