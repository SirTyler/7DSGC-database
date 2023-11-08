import { Component } from "react";
import { Link } from "react-router-dom";
import { Segment, Image, Header, Grid } from 'semantic-ui-react'

import { ThemeContext } from './theme/theme-context';
import { db_build, sub_passives } from "./database/_database";

let init = false;
const data: { name: any; display: JSX.Element; }[] = [];

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
        sub_passives.forEach(character => {
            let c = {
              name: character.sort.toLowerCase(),
              display: (
              <ThemeContext.Consumer>
                {(theme) => (
                <Grid.Column className={theme.theme}>
                <Segment clearing as={Link} style={{display:'block'}}to={`../database/${character.title}+${character.name}`} className={theme.theme}>
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
                <Segment className={theme.theme}>
                  <label>Search: </label>
                  <input type="text" name="filterText" onChange={this.stateChange} />
                </Segment>
                <br />
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

export default Page;