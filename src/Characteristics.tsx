import { Component } from "react";
import { Segment, Header, Grid, Divider } from 'semantic-ui-react'

import { ThemeContext } from './theme/theme-context';
import DatabaseComponent from "./DatabaseComponent";

import * as TheSevenDeadlySins from "./database/group/The Seven Deadly Sins";
import * as TheSevenCatastrophes from "./database/group/The Seven Catastrophes";
import * as TheFourArchAngels from "./database/group/The Four Archangels";
import * as Commandments from "./database/group/Commandment";
import * as Ragnarok from "./database/group/Ragnarok";
import * as God from "./database/group/God";
import * as Collab from "./database/group/Collab";

class Page extends Component {

    render() {
      return(
        <ThemeContext.Consumer>
            {(theme) => (
            <>
            <Header as='h1' textAlign="center" className={theme.theme} >
              Characteristics
            </Header>
            <Grid.Row stretched>
              <Segment className={theme.theme}>
                <Grid.Column>
                  <Header as='h3' textAlign="center" className={theme.theme}>
                    {TheSevenDeadlySins.name}
                  </Header>
                  <DatabaseComponent database={TheSevenDeadlySins.members} gridSize={4} headerSize="h3" imageSize={75}/>
                </Grid.Column>
                <Divider />
                <Grid.Column>
                  <Header as='h3' textAlign="center" className={theme.theme}>
                    {TheSevenCatastrophes.name}
                  </Header>
                  <DatabaseComponent database={TheSevenCatastrophes.members} gridSize={4} headerSize="h3" imageSize={75}/>
                </Grid.Column>
                <Divider />
                <Grid.Column>
                  <Header as='h3' textAlign="center" className={theme.theme}>
                    {TheFourArchAngels.name}
                  </Header>
                  <DatabaseComponent database={TheFourArchAngels.members} gridSize={4} headerSize="h3" imageSize={75}/>
                </Grid.Column>
                <Divider />
                <Grid.Column>
                  <Header as='h3' textAlign="center" className={theme.theme}>
                    {Commandments.name}
                  </Header>
                  <DatabaseComponent database={Commandments.members} gridSize={4} headerSize="h3" imageSize={75}/>
                </Grid.Column>
                <Divider />
                <Grid.Column>
                  <Header as='h3' textAlign="center" className={theme.theme}>
                    {Ragnarok.name}
                  </Header>
                  <DatabaseComponent database={Ragnarok.members} gridSize={4} headerSize="h3" imageSize={75}/>
                </Grid.Column>
                <Divider />
                <Grid.Column>
                  <Header as='h3' textAlign="center" className={theme.theme}>
                    {God.name}
                  </Header>
                  <DatabaseComponent database={God.members} gridSize={4} headerSize="h3" imageSize={75}/>
                </Grid.Column>
                <Divider />
                <Grid.Column>
                  <Header as='h3' textAlign="center" className={theme.theme}>
                    {Collab.name}
                  </Header>
                  <DatabaseComponent database={Collab.members} gridSize={4} headerSize="h3" imageSize={75}/>
                </Grid.Column>
              </Segment>
            </Grid.Row>
            </>
            )}
        </ThemeContext.Consumer>
     );
    }
}

export default Page;