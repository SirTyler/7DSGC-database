import { Component } from "react";
import { Link } from "react-router-dom";
import { Segment, Image, Header, Grid, Divider } from 'semantic-ui-react'

import { ThemeContext } from './theme/theme-context';
import ICharacter from "./database/characters/_ICharacter";

let init = false;

class Page extends Component {

    constructor(props: any) {
        super(props);
        if(!init) {
            init = true;
        }
    }

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
                {buildGroup(require('./database/group/The Seven Deadly Sins'))}
                <Divider />
                {buildGroup(require('./database/group/The Seven Catastrophes'))}
                <Divider />
                {buildGroup(require('./database/group/Commandment'))}
                <Divider />
                {buildGroup(require('./database/group/The Four Archangels'))}
                <Divider />
                {buildGroup(require('./database/group/Ragnarok'))}
                <Divider />
                {buildGroup(require('./database/group/God'))}
                <Divider />
                {buildGroup(require('./database/group/Collab'))}
              </Segment>
            </Grid.Row>
            </>
            )}
        </ThemeContext.Consumer>
     );
    }
}

function buildGroup(group: {name: string, members: ICharacter[]}) {

  return (
    <ThemeContext.Consumer>
      {(theme) => (
      <Grid.Column>
          <Header as='h3' textAlign="center" className={theme.theme}>
            {group.name}
          </Header>
          {buildAssoc(group.members)}
      </Grid.Column>
    )}
    </ThemeContext.Consumer>
  )
}

function buildAssoc(association: ICharacter[]) {
  const table: JSX.Element[] = [];

  association.sort((n1,n2) => {
      let a = n1.sort.toLowerCase();
      let b = n2.sort.toLowerCase();

      if(a < b) return -1;
      if(a > b) return 1;
      return 0;
    });

  table.length = 0;
  association.forEach(character => {
      table.push(
        <ThemeContext.Consumer>
        {(theme) => (
        <Grid.Column className={theme.theme}>
        <Segment clearing as={Link} style={{display:'block'}}to={`../database/${character.title}+${character.name}`} className={theme.theme}>
          <Image src={character.image} floated='left' rounded className={theme.theme} width={75} height={75}/>
            <Header as='h3' textAlign="left" className={theme.theme}>
              <Header.Subheader className={theme.theme}>
                [{character.title}]
              </Header.Subheader>
              {character.s_name}
            </Header>
        </Segment>
        </Grid.Column>
        )}
      </ThemeContext.Consumer>
      )
  });

  return (
    <Grid columns='4' stackable>
      {table}
    </Grid>
  )
}

export default Page;