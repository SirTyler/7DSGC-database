import { Component } from "react";
import { Link } from "react-router-dom";
import { Segment, Image, Header, Grid, SemanticWIDTHSNUMBER, Select, Input } from 'semantic-ui-react'

import { ThemeContext } from './theme/theme-context';
import ICharacter from "./database/characters/_ICharacter";


class DatabaseComponent extends Component<{database: ICharacter[], gridSize?: SemanticWIDTHSNUMBER, headerSize?: string, imageSize?: number, filterName?: boolean, filterAttribute?: boolean, filterRace?: boolean}> {
    gridSize: SemanticWIDTHSNUMBER = 3;
    headerSize: string = 'h1';
    imageSize: number = 100;
    filterSize: number = 3;
    data: { name: string; race: string, attr: string, display: JSX.Element; }[] = [];
    
    constructor(props: any) {
        super(props);

        this.build(props.database);
        this.gridSize = props.gridSize? props.gridSize : 3;
        this.headerSize = props.headerSize? props.headerSize : 'h1';
        this.imageSize = props.imageSize? props.imageSize : 100;
        this.filterSize = [props.filterName, props.filterAttribute, props.filterRace].filter(Boolean).length;
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

    stateChange = (selector: any, event: any) => {
      this.setState({[selector]: event.value});
    }

  render() {
    return (
      <ThemeContext.Consumer>
        {(theme) => (
          <>
            {this.filterSize > 0 && (
              <>
                <Segment className={theme.theme}>
                  <Header as='h2'>Search: </Header>
                  <Grid columns={this.filterSize as SemanticWIDTHSNUMBER} stackable>
                    {this.props.filterName && (
                      <Grid.Column>
                        <Input fluid icon='users' iconPosition='left' placeholder='Search Characters...' onChange={(event, data) => this.stateChange("filterText", data)} />
                      </Grid.Column>
                    )}
                    {this.props.filterAttribute && (
                      <Grid.Column>
                        <Select fluid placeholder='Select Attribute...' options={[
                          { value: '', text: '' },
                          { value: 'Speed', text: 'Speed' },
                          { value: 'Strength', text: 'Strength' },
                          { value: 'HP', text: 'HP' },
                          { value: 'Darkness', text: 'Darkness' },
                          { value: 'Light', text: 'Light' }
                        ]} onChange={(event, data) => this.stateChange("filterAttr", data)} />
                      </Grid.Column>
                    )}
                    {this.props.filterRace && (
                      <Grid.Column>
                        <Select fluid placeholder='Select Race...' options={[
                          { value: '', text: '' },
                          { value: 'Demon', text: 'Demon' },
                          { value: 'Fairy', text: 'Fairy' },
                          { value: 'Giant', text: 'Giant' },
                          { value: 'Goddess', text: 'Goddess' },
                          { value: 'Human', text: 'Human' },
                          { value: 'Unknown', text: 'Unknown' }
                        ]} onChange={(event, data) => this.stateChange("filterRace", data)} />
                      </Grid.Column>
                    )}
                  </Grid>
                </Segment>
                <br />
              </>
            )}
            <Grid columns={this.gridSize} stackable>
              <>
                {this.data.filter(character => character.name.includes(this.state.filterText.toLowerCase())).map(filter => (
                  filter.attr.includes(this.state.filterAttr.toLowerCase()) && (
                    filter.race.includes(this.state.filterRace.toLowerCase()) && (
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