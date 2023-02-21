import React from "react";
import {
  createHashRouter,
  Link,
  Outlet,
  useLocation,
  useRouteError
} from "react-router-dom";
import {
  Container, Segment, Divider, Breadcrumb} from 'semantic-ui-react'

import Character, {
  loader as characterLoader,
} from './Character';
import { ThemeContext } from './theme/theme-context';

import './App.css';
import Database from './Database';

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
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: "database",
            errorElement: <ErrorPage />,
            children: [
              {index: true, element: <Database />},
              {
                path: ":query",
                element: <Character />,
                loader: characterLoader
              }
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
        <Outlet />
      </Container>
      <ToggleButton />
      </div>
    )}
  </ThemeContext.Consumer>
  );
}

function Index() {
  return(
    <div>
      <ThemeContext.Consumer>
        {(theme) => (
          <Segment clearing as={Link} style={{display:'block'}}to='database' className={theme.theme}>Database</Segment>
        )}
      </ThemeContext.Consumer>
    </div>
  );
}

function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        {error}
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
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