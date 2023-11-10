import { Component } from "react";
import { Header, Divider } from 'semantic-ui-react'

import { database, latest_database } from "./database/_database";
import { ThemeContext } from './theme/theme-context';
import DatabaseComponent from "./DatabaseComponent";

class Page extends Component {
    render() {
      return(
        <ThemeContext.Consumer>
            {(theme) => (
            <>
                <Header className={theme.theme} as='h2'>Latest Characters</Header>
                <DatabaseComponent database={latest_database} gridSize={2} />
                <Divider />
                <DatabaseComponent database={database} gridSize={3} filterName={true} filterAttribute={true} filterRace={true} />
            </>
            )}
        </ThemeContext.Consumer>
     );
    }
}

export default Page;