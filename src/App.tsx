import React, { useEffect } from "react";
import {
  createHashRouter,
  isRouteErrorResponse,
  Link,
  Outlet,
  useLocation,
  useRouteError
} from "react-router-dom";
import { Container, Segment, Divider, Image, Breadcrumb, Header, Button} from 'semantic-ui-react'

import Character, {
  loader as characterLoader,
} from './Character';
import RacePage from './RacePage';
import { ThemeContext } from './theme/theme-context';

import './App.css';
import Database from './Database';
import Characteristics from "./Characteristics";
import SubSlots from "./SubSlots";
import ScrollButton from "./ScrollButon";
import EffectFilter from "./EffectFilter";
import DatabaseComponent from "./DatabaseComponent";
import { latest_database } from "./database/_database";

const NavCrumb = () => {
  const { pathname } = useLocation();

  const paths = pathname.split("/").filter(Boolean);
  return (
    <ThemeContext.Consumer>
    {(theme) => (
      <Breadcrumb className={theme.theme}>
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
    )}
    </ThemeContext.Consumer>
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
                path: "Demon",
                element: <RacePage race="Demon" />
              },
              {
                path: "Fairy",
                element: <RacePage race="Fairy" />
              },
              {
                path: "Giant",
                element: <RacePage race="Giant" />
              },
              {
                path: "Goddess",
                element: <RacePage race="Goddess" />
              },
              {
                path: "Human",
                element: <RacePage race="Human" />
              },
              {
                path: "Unknown",
                element: <RacePage race="Unknown" />
              },
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
          },
          {
            path: "subslots",
            children: [
              {index: true, element: <SubSlots />}
            ]
          },
          {
            path: "effects",
            children: [
              {index: true, element: <EffectFilter />}
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
        <ScrollButton />
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
            <Header className={theme.theme} as='h2'>Latest Characters</Header>
            <DatabaseComponent database={latest_database} gridSize={2} />
            <Divider />
            <Segment className={theme.theme}>
              <Button clearing fluid as={Link} to='database' className={theme.theme}>Database</Button>
              <br />
              <Button.Group widths='3'>
                <Button clearing as={Link} to='characteristics' className={theme.theme}>Characteristics</Button>
                <Button clearing as={Link} to='subslots' className={theme.theme}>Sub Slot Uniques</Button>
                <Button clearing as={Link} to='effects' className={theme.theme}>Effects Filter</Button>
              </Button.Group>
            </Segment>
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
        <input type="checkbox" id="darkmode" onClick={toggle} checked={dark} />
        <label />
      </div>
      <i className={`moon icon ${theme}`} style={{float: "right"}}/>
    </div>
  )
}