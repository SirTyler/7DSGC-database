import { Component } from "react";
import { Link } from "react-router-dom";
import { Segment, Image, Header, Grid, Divider } from 'semantic-ui-react'

import { database, latest_database } from "./database/_database";
import { ThemeContext } from './theme/theme-context';

let init = false;
const data: { name: any; display: JSX.Element; }[] = [];
const latest: JSX.Element[] = [];

class Database extends Component {

    constructor(props: any) {
        super(props);
        if(!init) {
            this.build();
            init = true;
        }
    }

    state = {
        filterText: '',
        filterRace: '',
        filterAttr: '',
        filterRarity: '',
    }
    
    build() {
        data.length = 0;
        database.forEach(character => {
            let c = {
              name: character.name.toLowerCase(),
              display: (
              <ThemeContext.Consumer>
                {(theme) => (
                <Grid.Column className={theme.theme}>
                <Segment clearing as={Link} style={{display:'block'}}to={`${character.title}+${character.name}`} className={theme.theme}>
                  <Image src={character.image} floated='left' rounded className={theme.theme}/>
                    <Header as='h1' textAlign="left" className={theme.theme}>
                      <Header.Subheader className={theme.theme}>
                        [{character.title}]
                      </Header.Subheader>
                      {character.name}
                    </Header>
                </Segment>
                </Grid.Column>
                )}
              </ThemeContext.Consumer>
              )
            }
            data.push(c)
        });

        data.sort((n1,n2) => {
          let a = n1.name.toLowerCase();
          let b = n2.name.toLowerCase();
  
          if(a < b) return -1;
          if(a > b) return 1;
          return 0;
        });

        latest.length = 0;
        latest_database.forEach(character => {
            latest.push(
              <ThemeContext.Consumer>
              {(theme) => (
              <Grid.Column className={theme.theme}>
              <Segment clearing as={Link} style={{display:'block'}}to={`${character.title}+${character.name}`} className={theme.theme}>
                <Image src={character.image} floated='left' rounded className={theme.theme}/>
                  <Header as='h1' textAlign="left" className={theme.theme}>
                    <Header.Subheader className={theme.theme}>
                      [{character.title}]
                    </Header.Subheader>
                    {character.name}
                  </Header>
              </Segment>
              </Grid.Column>
              )}
            </ThemeContext.Consumer>
            )
        });
    }


    stateChange = (f: { target: { name: string; value: any; }; }) => {
        const {name, value} = f.target;
        this.setState({
            [name]: value,
        });
    }

    render() {
      return(
        <ThemeContext.Consumer>
            {(theme) => (
            <>
                <h2>New Characters</h2>
                <Grid columns='2' stackable  className={theme.theme}>
                    {latest}
                </Grid>
                <Divider />
                <input type="text" name="filterText" onChange={this.stateChange} />
                <Grid columns='3' stackable>
                    {data.filter(character => character.name.includes(this.state.filterText.toLowerCase())).map(filter => (
                    <>
                        {filter.display}
                    </>
                    ))}
                </Grid>
            </>
            )}
        </ThemeContext.Consumer>
     );
    }
}

export default Database;