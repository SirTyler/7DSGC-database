import { Component } from "react";
import { Link } from "react-router-dom";
import { Segment, Image, Header, Grid, SemanticWIDTHSNUMBER } from 'semantic-ui-react'

import { ThemeContext } from './theme/theme-context';
import ICharacter from "./database/characters/_ICharacter";


class DatabaseComponent extends Component<{database: ICharacter[], gridSize?: SemanticWIDTHSNUMBER, headerSize?: string, imageSize?: number, filter?: boolean}> {
    gridSize: SemanticWIDTHSNUMBER = 3;
    headerSize: string = 'h1';
    imageSize: number = 100;
    data: { name: string; race: string, attr: string, display: JSX.Element; }[] = [];
    
    constructor(props: any) {
        super(props);

        this.build(props.database);
        this.gridSize = props.gridSize? props.gridSize : 3;
        this.headerSize = props.headerSize? props.headerSize : 'h1';
        this.imageSize = props.imageSize? props.imageSize : 100;
    }

    state = {
        filterText: '',
        filterRace: '',
        filterAttr: ''
    }
    
    build(database: ICharacter[]) {
        this.data.length = 0;
        database.forEach(character => {
            let c = {
              name: character.sort.toLowerCase(),
              race: character.race.toLocaleLowerCase(),
              attr: character.attribute.toLowerCase(),
              display: (
              <ThemeContext.Consumer>
                {(theme) => (
                <Grid.Column className={theme.theme}>
                <Segment clearing as={Link} style={{display:'block'}} to={`/database/${character.title}+${character.name}`} className={theme.theme}>
                  <Image src={character.image} floated='left' rounded className={theme.theme} width={this.imageSize} height={this.imageSize}/>
                    <Header as={this.headerSize} textAlign="left" className={theme.theme}>
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
            this.data.push(c)
        });

        this.data.sort((n1,n2) => {
          let a = n1.name.toLowerCase();
          let b = n2.name.toLowerCase();
  
          if(a < b) return -1;
          if(a > b) return 1;
          return 0;
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
                {this.props.filter && (
                  <>
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
                </>
                )}
                <Grid columns={this.gridSize} stackable>
                  <>
                    {this.data.filter(character => character.name.includes(this.state.filterText.toLowerCase())).map(filter => (
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

export default DatabaseComponent;