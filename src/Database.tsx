import { Component } from "react";
import { Link } from "react-router-dom";
import { Segment, Image, Header, Grid, Divider } from 'semantic-ui-react'

import { database, db_build, latest_database } from "./database/_database";
import { ThemeContext } from './theme/theme-context';

let init = false;
const data: { name: string; race: string, attr: string, rarity: string, display: JSX.Element; }[] = [];
const latest: JSX.Element[] = [];

class Page extends Component {

    constructor(props: any) {
        super(props);
        if(!init) {
            db_build();
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
              name: character.sort.toLowerCase(),
              race: character.race.toLocaleLowerCase(),
              attr: character.attribute.toLowerCase(),
              rarity: character.rarity.toLowerCase(),
              display: (
              <ThemeContext.Consumer>
                {(theme) => (
                <Grid.Column className={theme.theme}>
                <Segment clearing as={Link} style={{display:'block'}}to={`${character.title}+${character.name}`} className={theme.theme}>
                  <Image src={character.image} floated='left' rounded className={theme.theme} width={100} height={100}/>
                    <Header as='h1' textAlign="left" className={theme.theme}>
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
                <Image src={character.image} floated='left' rounded className={theme.theme} width={100} height={100}/>
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
                <Header className={theme.theme} as='h2'>Latest Characters</Header>
                <Grid columns='2' stackable  className={theme.theme}>
                    {latest}
                </Grid>
                <Divider />
                <Segment className={theme.theme}>
                  <label>Search: </label>
                  <input type="text" name="filterText" onChange={this.stateChange} />
                  <select name="filterAttr" onChange={this.stateChange}>
                    <option value=""></option>
                    <option value="Speed">Speed</option>
                    <option value="Strength">Strength</option>
                    <option value="HP">HP</option>
                    <option value="Darkness">Darkness</option>
                    <option value="Light">Light</option>
                  </select>
                  <select name="filterRace" onChange={this.stateChange}>
                    <option value=""></option>
                    <option value="Demon">Demon</option>
                    <option value="Fairy">Fairy</option>
                    <option value="Giant">Giant</option>
                    <option value="Goddess">Goddess</option>
                    <option value="Human">Human</option>
                    <option value="Unknown">Unknown</option>
                  </select>
                </Segment>
                <br />
                <Grid columns='3' stackable>
                  <>
                    {data.filter(character => character.name.includes(this.state.filterText.toLowerCase())).map(filter => (
                      filter.attr.includes(this.state.filterAttr.toLowerCase()) &&(
                        filter.race.includes(this.state.filterRace.toLowerCase()) &&(
                          <>
                            {filter.display}
                          </>
                        )
                      )
                    ))}
                    </>
                </Grid>
            </>
            )}
        </ThemeContext.Consumer>
     );
    }
}

export default Page;