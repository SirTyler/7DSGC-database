import { Component } from "react";
import { Link } from "react-router-dom";
import { Segment, Image, Header, Grid, Divider, Table, Select} from 'semantic-ui-react'

import { database } from "./database/_database";
import { ThemeContext } from './theme/theme-context';
import ICharacter from "./database/characters/_ICharacter";

let init = false;
const data: { name: string, effects: string[], display: JSX.Element; }[] = [];
const options: Map<string, number> = new Map<string, number>();
const select_options: {text: string, value: string}[] = [];

class Page extends Component {

    constructor(props: any) {
        super(props);
        if(!init) {
            this.build();
            init = true;
        }
    }

    state = {
        filterEffect: ''
    }
    
    build() {
        data.length = 0;
        database.forEach(character => {
            let c = {
              name: character.sort.toLowerCase(),
              effects: buildList(character, true),
              display: (
              <ThemeContext.Consumer>
                {(theme) => (
                <Grid.Column className={theme.theme}>
                <Segment clearing as={Link} style={{display:'block'}} to={`/database/${character.title}+${character.name}`} className={theme.theme}>
                  <Image src={character.image} floated='left' rounded className={theme.theme} width={100} height={100}/>
                    <Header as='h1' textAlign="left" className={theme.theme}>
                      <Header.Subheader className={theme.theme}>
                        [{character.title}]
                      </Header.Subheader>
                      {character.s_name}
                    </Header>
                    <Divider />
                    <Table className={theme.theme} celled compact size='small' style={{overflow: 'hidden', maxWidth: '100%'}}>
                      <Table.Body>
                        {buildTable(buildList(character, false))}
                      </Table.Body>
                    </Table>
                </Segment>
                </Grid.Column>
                )}
              </ThemeContext.Consumer>
              )
            }
            data.push(c);
        });

        data.sort((n1,n2) => {
          let a = n1.name.toLowerCase();
          let b = n2.name.toLowerCase();
  
          if(a < b) return -1;
          if(a > b) return 1;
          return 0;
        });
        
        options.forEach((value, key) => {
          if(value > 1)
            select_options.push({text: key, value: key});
        })
        select_options.sort((n1, n2) => {
          let a = n1.text;
          let b = n2.text;

          if(a < b) return -1;
          if(a > b) return 1;
          return 0;
        })
    }

    stateChange = (selector: any, event: any) => {
      this.setState({[selector]: event.value});
    }

    render() {
      return(
        <ThemeContext.Consumer>
            {(theme) => (
            <>
                <Segment className={theme.theme}>
                  <Header as='h2'>Search: </Header>
                  <Select fluid placeholder='Select Effect...' options={select_options} onChange={(event, data) => this.stateChange("filterEffect", data)} />
                </Segment>
                <br />
                <Grid columns='3' stackable>
                  <>
                    {data.filter(character => character.effects.includes(this.state.filterEffect.toLowerCase())).map(filter => (
                      <>
                        {filter.display}
                      </>
                    ))}
                    </>
                </Grid>
            </>
            )}
        </ThemeContext.Consumer>
     );
    }
}

function buildList(character: ICharacter, toLower: boolean): string[] {
  let data: string[] = [];
  if(toLower) data.push("");
  character.skills.forEach(skill => {
    for(let index = 0; index < 3; index++) {
      for(let i = 0; i < skill.ranks[index].effect.length; i++) {
        data.push(toLower ? skill.ranks[index].effect[i].name.toLowerCase() : skill.ranks[index].effect[i].name);
      }
    }
  })
  character.ultimate.forEach(skill => {
    for(let index = 0; index < 6; index++) {
      for(let i = 0; i < skill.ranks[index].effect.length; i++) {
        data.push(toLower ? skill.ranks[index].effect[i].name.toLowerCase() : skill.ranks[index].effect[i].name);
      }
    }
  })
  for(let i = 0; i < character.unique.effects.length; i++) {
    data.push(toLower ? character.unique.effects[i].name.toLowerCase() : character.unique.effects[i].name);
  }
  if(character.grace != null) {
    for(let i = 0; i < character.grace.effects.length; i++) {
      data.push(toLower ? character.grace.effects[i].name.toLowerCase() : character.grace.effects[i].name);
    }
  }
  
  data = data.filter(elem => {return elem !== "applicable ally"});
  data = removeDuplicates(data);
  data.forEach(elem => {
    if(options.has(elem)) {
      options.set(elem, (options.get(elem) as number ) + 1);
    } else options.set(elem, 1);
  })

  return data;
}

function removeDuplicates(array: any[]) {
  return array.filter((elem, index, self)=> {
    return index === self.indexOf(elem);
  })
}

function buildTable(effect: string[]) {
  const content: any[] = [];
  while(effect.length > 0) {
    content.push(
    <Table.Row>
      <Table.Cell size='small'>
        <span style={{textAlign: 'center'}}>{effect.pop()}</span>
      </Table.Cell>
      <Table.Cell size='small'>
        <span style={{textAlign: 'center'}}>{effect.pop()}</span>
      </Table.Cell>
      <Table.Cell size='small'>
        <span style={{textAlign: 'center'}}>{effect.pop()}</span>
      </Table.Cell>
    </Table.Row>
    );
  }

  return(
      <ThemeContext.Consumer>
      {(theme) => (
        <>
          {content}
        </>
      )}
      </ThemeContext.Consumer>
    );
}


export default Page;