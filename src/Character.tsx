import { database } from "./database/_database";
import {
    useLoaderData,
    Link,
    LoaderFunctionArgs
} from "react-router-dom";
import {
    Divider,
    Grid,
    Header,
    Segment,
    Table,
    Image,
} from 'semantic-ui-react'
import ReactECharts from 'echarts-for-react';

import { ThemeContext } from './theme/theme-context';
import ICharacter from "./database/characters/_ICharacter";

const limit = [
    8538    /* Attack */,
    7606    /* Defense */,
    104090  /* HP */,
    116     /* Pierce Rate */,
    73      /* Resistance */,
    93      /* Regeneration */,
    129     /* Crit Chance */,
    136.5   /* Crit Damage */,
    103     /* Crit Resistance */,
    111.5   /* Crit Defense */,
    166.5   /* Recovery Rate */,
    54      /* Lifesteal */
];

const stat_header = [
    "Attack",
    "Defense",
    "HP",
    "Pierce Rate",
    "Resistance",
    "Regeneration",
    "Crit Chance",
    "Crit Damage",
    "Crit Resistance",
    "Crit Defense",
    "Recovery Rate",
    "Lifesteal"
]

const stats: number[] = [];
const stats_norm: number[] = [];
const max_stats: number[] = [];
const max_stats_norm: number[] = [];
const total_changes: number[] = [];

const radar = {
    radar: [
        {
            indicator: [
                {text: 'Attack', max: limit[0] },
                {text: 'Defense', max: limit[1] },
                {text: 'HP', max: limit[2] },
                {text: 'Pierce Rate', max: limit[3] },
                {text: 'Resistance', max: limit[4] },
                {text: 'Regeneration', max: limit[5] },
                {text: 'Crit Chance', max: limit[6] },
                {text: 'Crit Damage', max: limit[7] },
                {text: 'Crit Resistance', max: limit[8] },
                {text: 'Crit Defense', max: limit[9] },
                {text: 'Recovery Rate', max: limit[10] },
                {text: 'Lifesteal', max: limit[11] }
            ]
        }
    ],
    series: [
        {
            type: 'radar',
            silent: true,
            areaStyle: {},
            data: [max_stats, stats]
        }
    ]
};

const bar = {
    xAxis: {},
    yAxis: {
        type: 'category',
        inverse: true,
        data: ['','','','','','','','','','','','',]
    },
    series: [
        {

            type: 'bar',
            stack: 'total',
            color: '#91cc75',
            label: {
                show: true,
                formatter: (params: { dataIndex: number; }) => {
                    return stats[params.dataIndex];
                }
            },
            data: stats_norm
        },
        {

            type: 'bar',
            stack: 'total',
            color: '#5470c6',
            label: {
                show: true,
                formatter: (params: { dataIndex: number; }) => {
                    return max_stats[params.dataIndex];
                }
            },
            data: max_stats_norm
        }
    ]
}

export async function loader(args: LoaderFunctionArgs) {
    let query: string[] = args.params.query!.split("+");
    return getCharacter(query[0], query[1]);
}

export default function Character() {
    const character: ICharacter = useLoaderData() as ICharacter;
    buildChart(character);

    return (
        <ThemeContext.Consumer>
          {(theme) => (
        <>
        <Grid columns='equal' stackable>
            <Grid.Row stretched>
                <Grid.Column>
                    <Segment clearing className={theme.theme}>
                        <Image src={character.image} floated='left' rounded/>
                        <Header as='h1' textAlign="left" className={theme.theme}>
                            <Header.Subheader>
                                [{character.title}]
                            </Header.Subheader>
                            {character.name}
                        </Header>
                    </Segment>
                    <Segment secondary className={theme.theme}>
                        <ReactECharts option={radar} />
                    </Segment>
                </Grid.Column>
                <Grid.Column width={10}>
                    <Segment className={theme.theme}>
                        <Table striped compact size='small' className={theme.theme}>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell colSpan='2'>Basic Info</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>Rarity</Table.Cell>
                                    <Table.Cell>{character.rarity}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Attribute</Table.Cell>
                                    <Table.Cell>{character.attribute}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Race</Table.Cell>
                                    <Table.Cell>{character.race}</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                        <Header>Recommended Equipment</Header>
                        <Grid columns='2' stackable>
                            <Grid.Column>
                                {buildTable("Set 1", character.equipment[0], [], [], 'center')}
                            </Grid.Column>
                            <Grid.Column>
                                {buildTable("Set 2", character.equipment[1], [], [], 'center')}
                            </Grid.Column>
                        </Grid>
                    </Segment>
                </Grid.Column>
            </Grid.Row>
            <Grid.Column className='mobile only' >
            <Segment className={theme.theme}>
                <ReactECharts option={bar} style={{height: '100%', minHeight: '300px'}}/>
            </Segment>
            </Grid.Column>
        </Grid>
        <Divider />

        <Grid columns='equal' stackable>
            <Grid.Row stretched>
                <Grid.Column width={5}>
                    <Segment className={theme.theme}>
                        {buildTable("Max Stats", max_stats, stat_header, [], 'center', false)}
                    </Segment>
                    <Grid className='computer only'>
                        <Grid.Row stretched>
                            <Grid.Column>
                                <Segment className={theme.theme}>
                                    {buildTable("Level 100 Stats", character.stats, stat_header, [], 'center', false)}
                                </Segment>
                                <Segment className={theme.theme}>
                                    {buildTable("Basic Stats", character.basic, stat_header, [],'center', false)}
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
                <Grid.Column width={7}>
                    <Segment className={theme.theme}>
                        {buildSkill(character.skills[0])}
                        {buildSkill(character.skills[1])}
                    </Segment>
                    <Segment className={theme.theme}>
                        {buildSkill(character.ultimate[0], 6, true)}
                    </Segment>
                    <Segment className={theme.theme}>
                        {buildPassive(character.unique, true)}
                    </Segment>
                </Grid.Column>
                <Grid.Column width={4}>
                    {buildGrace(character.grace, true)}
                    <Segment className={theme.theme}>
                        {buildTable("Awakening", character.awakening, ["★1","★2","★3","★4","★5","★6"], stat_header, 'right', false, true)}
                    </Segment>
                    <Segment className={theme.theme}>
                        {buildTable("Super Awakening", character.superawakening, ["★1","★2","★3","★4","★5","★6"], stat_header, 'right', false, true)}
                    </Segment>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row stretched>
                <Grid.Column>
                    <Segment className={theme.theme}>
                        {buildAssoc(character)}
                    </Segment>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row stretched>
                <Grid.Column>
                    <Segment className={theme.theme}>
                        {character.birthday.toLocaleDateString('default', {month: 'long', day: 'numeric'})}
                    </Segment>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        </>
          )}
        </ThemeContext.Consumer>
    )
}

function buildSkill(skill: any, count = 3, vertical = false) {
    const content: any[] = [];
    for (let index = 0; index < count; index++) {
        content.push(
            <ThemeContext.Consumer>
            {(theme) => (
            <Table.Row>
                <Table.Cell>Rank {index+1}</Table.Cell>
                <Table.Cell>{skill.getDescription(index)}</Table.Cell>
            </Table.Row>
            )}
            </ThemeContext.Consumer>
        );
    }
    if (vertical) {
        return(
            <ThemeContext.Consumer>
            {(theme) => (
            <Grid columns='equal'>
                <Grid.Row stretched>
                    <Grid.Column>
                        <Image src={skill.image} floated='left' centered rounded/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Table compact size='small' className={theme.theme}>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell colSpan='2'>{skill.name}</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                {content}
                            </Table.Body>
                        </Table>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            )}
            </ThemeContext.Consumer>
            );
    } else {
        return(
            <ThemeContext.Consumer>
            {(theme) => (
            <Grid columns='equal'>
                <Grid.Row>
                    <Grid.Column>
                        <Image src={skill.image} floated='left' rounded/>
                    </Grid.Column>
                    <Grid.Column>
                        <Table compact size='small' className={theme.theme}>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell colSpan='2'>{skill.name}</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                {content}
                            </Table.Body>
                        </Table>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            )}
            </ThemeContext.Consumer>
            );
    }
}

function buildTable(title: string, data: any[], header: string[], subheader: string[] = [], text_align: string = 'left', isDefinied: boolean = false, skipZero: boolean = false) {
    const content: any[] = [];
    for (let index = 0; index < data.length; index++) {
        if (data[index] instanceof Array) {
            content.push(buildTable(header[index], data[index], subheader, [], text_align, isDefinied, skipZero));
        } else {
            if(skipZero) {
                if(data[index] !== 0) {
                    content.push(
                        <Table.Row>
                            {header.length > 0 && <Table.Cell rowSpan={data[index].length}>{header[index]}</Table.Cell>}
                            <Table.Cell style={{textAlign: text_align}}>{(data[index])}</Table.Cell>
                        </Table.Row>
                    )
                }
            } else {
                content.push(
                    <Table.Row>
                        {header.length > 0 && <Table.Cell rowSpan={data[index].length}>{header[index]}</Table.Cell>}
                        <Table.Cell style={{textAlign: text_align}}>{(data[index])}</Table.Cell>
                    </Table.Row>
                )
            }
        }
    }

    return(
        <ThemeContext.Consumer>
        {(theme) => (
            <Table striped definition={isDefinied} compact size='small' className={theme.theme}>
                <Table.Header>
                    <Table.Row>
                        {title.length > 0 ? <Table.HeaderCell colSpan='2'>{title}</Table.HeaderCell> : <></>}
                    </Table.Row>
                </Table.Header>
        
                <Table.Body>
                    {content}
                </Table.Body>
            </Table>
        )}
      </ThemeContext.Consumer>);
}

function buildChart(character: ICharacter) {
    // Build Stats
    for(let i = 0; i < 12; i ++) {
        stats[i] = character.stats[i];
        stats_norm[i] = (stats[i] / limit[i]) * 100;

    }

    // Build Max Stats
    let ac = [0,0,0,0,0,0,0,0,0,0,0,0];
    let sac = [0,0,0,0,0,0,0,0,0,0,0,0];
    let table = [0,0,0,0,0,0,0,0,0,0,0,0];
    for (let i = 0; i < 6; i++) {
        for (let index = 0; index < 12; index++) {
            ac[index] = ac[index] + character.awakening[i][index];
            sac[index] = sac[index] + character.superawakening[i][index];
            table[index] = ac[index] + sac[index];
        }
    }
    
    for(let index = 0; index < 12; index++) {
        total_changes[index] = table[index];
        max_stats[index] = stats[index] + total_changes[index];
        max_stats_norm[index] = ((max_stats[index] / limit[index]) * 100) - stats_norm[index];
    }
}

function buildAssoc(character: ICharacter) {
    const table: JSX.Element[] = [];
    character.association.forEach(ch => {
        let assoc = ch[0];
        table.push(
            <ThemeContext.Consumer>
            {(theme) => (
            <Grid.Column>
                <Table as={Link} style={{display:'block'}}to={`../${assoc.title}+${assoc.name}`} className={theme.theme}>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                            <Image src={assoc.image} floated='left' rounded />
                            <Header as='h4' textAlign="left">
                                <Header.Subheader>
                                    [{assoc.title}]
                                </Header.Subheader>
                                {assoc.name}
                            </Header>
                            </Table.Cell>
                            <Table.Cell textAlign="right">
                                {ch[1]}
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </Grid.Column>
            )}
          </ThemeContext.Consumer>
            
          )
    })
  
    return (
      <Grid columns='3' stackable>
        {table}
      </Grid>
    )
}

function buildPassive(passive: any, vertical: boolean) {
    if (vertical) {
        return(
            <ThemeContext.Consumer>
            {(theme) => (
                <Grid columns='equal'>
                  <Grid.Row stretched>
                      <Grid.Column>
                          <Image src={passive.image} floated='left' centered rounded />
                      </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                      <Grid.Column>
                          <Table compact size='small' className={theme.theme}>
                              <Table.Header>
                                  <Table.Row>
                                      <Table.HeaderCell colSpan='2'>{passive.name}</Table.HeaderCell>
                                  </Table.Row>
                              </Table.Header>
          
                              <Table.Body>
                                    {passive.getDescription()}
                              </Table.Body>
                          </Table>
                      </Grid.Column>
                  </Grid.Row>
                </Grid>
            )}
          </ThemeContext.Consumer>
        );
    } else {
        return(
            <ThemeContext.Consumer>
            {(theme) => (
            <Grid columns='equal'>
                <Grid.Row>
                    <Grid.Column>
                        <Image src={passive.image} floated='left' rounded/>
                    </Grid.Column>
                    <Grid.Column>
                        <Table compact size='small' className={theme.theme}>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell colSpan='2'>{passive.name}</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                {passive.getDescription}
                            </Table.Body>
                        </Table>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            )}
          </ThemeContext.Consumer>
        );
    }
}

function buildGrace(passive: any, vertical: boolean) {
    if (passive === null) return;

    if (vertical) {
        return(
            <ThemeContext.Consumer>
            {(theme) => (
                <Segment className={theme.theme}>
                <Grid columns='equal'>
                  <Grid.Row stretched>
                      <Grid.Column>
                          <Image src={passive.image} floated='left' centered rounded />
                      </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                      <Grid.Column>
                          <Table compact size='small' className={theme.theme}>
                              <Table.Header>
                                  <Table.Row>
                                      <Table.HeaderCell colSpan='2'>{passive.name}</Table.HeaderCell>
                                  </Table.Row>
                              </Table.Header>
          
                              <Table.Body>
                                    {passive.getDescription()}
                              </Table.Body>
                          </Table>
                      </Grid.Column>
                  </Grid.Row>
                </Grid>
                </Segment>
            )}
          </ThemeContext.Consumer>
        );
    } else {
        return(
            <ThemeContext.Consumer>
            {(theme) => (
            <Segment className={theme.theme}>
            <Grid columns='equal'>
                <Grid.Row>
                    <Grid.Column>
                        <Image src={passive.image} floated='left' rounded/>
                    </Grid.Column>
                    <Grid.Column>
                        <Table compact size='small' className={theme.theme}>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell colSpan='2'>{passive.name}</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                {passive.getDescription}
                            </Table.Body>
                        </Table>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </Segment>
            )}
          </ThemeContext.Consumer>
        );
    }
}


export async function getCharacter(title: string, name: string) {
    let character;
    database.forEach(element => {
        if( element.title.toLowerCase() === title.toLowerCase() && 
            element.name.toLowerCase() === name.toLowerCase())
        character = element;
    })
    return character ?? null;
}

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
function PrintJson (data: any) {
    return (<div>{JSON.stringify(data, null, 2)}</div>);
}