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
    9049    /* Attack */,
    7606    /* Defense */,
    109520  /* HP */,
    116     /* Pierce Rate */,
    83.0     /* Resistance */,
    93      /* Regeneration */,
    136     /* Crit Chance */,
    245.5   /* Crit Damage */,
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

function calcCC() {
    let cc = 0;
    cc += Math.round(max_stats[0] * 1);     //Attack
    cc += Math.round(max_stats[1] * 0.8);   //Defense
    cc += Math.round(max_stats[2] * 0.2);   //HP
    cc += Math.round(max_stats[3] * 5);     //Pierce
    cc += Math.round(max_stats[4] * 4);     //Resistance
    cc += Math.round(max_stats[5] * 5);     //Regeration Rate
    cc += Math.round(max_stats[6] * 5);     //Crit Chance
    cc += Math.round(max_stats[7] * 2.5);   //Crit Damage
    cc += Math.round(max_stats[8] * 4);     //Crit Resistance
    cc += Math.round(max_stats[9] * 4);     //Crit Defense
    cc += Math.round(max_stats[10] * 2.5);  //Recovery Rate
    cc += Math.round(max_stats[11] * 5);    //Lifesteal
    cc += 400 * 6                           //Max Ult
    cc += 500                               //Passive Unlocked
    return cc;
}

export function loader(args: LoaderFunctionArgs) {
    let query: string[] = args.params.query!.split("+");
    let character = getCharacter(query[0], query[1]);
    if (character != null)
        return character;
    else
        throw new Response(`Error: No route matches URL "/database/${args.params.query}"`, { status: 404 , statusText: "Not Found"});
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
                        <Grid columns='2' stackable>
                            <Grid.Column>
                            <Table striped compact size='small' className={theme.theme}>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell colSpan='3'>Basic Info</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                    <Table.Cell height={35}>
                                        <Image src={require(`./assets/icons/rarity/${character.rarity}.png`)} floated='left' rounded className={theme.theme} width={35} height={35} alt={character.rarity} />
                                    </Table.Cell>
                                    <Table.Cell height={35}>
                                        <Image src={require(`./assets/icons/attribute/${character.attribute}.png`)} floated='left' rounded className={theme.theme} width={35} height={35} alt={character.attribute} />
                                    </Table.Cell>
                                    <Table.Cell height={35}>
                                        <Image src={require(`./assets/icons/race/${character.race}.png`)} floated='left' rounded className={theme.theme} width={35} height={35} alt={character.race} />
                                    </Table.Cell>
                            </Table.Body>
                            </Table>
                            <Header className={theme.theme}>Recommended Equipment</Header>
                        <Grid columns='2' stackable>
                            <Grid.Column>
                                {buildTable("Set 1", character.equipment[0], [], [], 'center')}
                            </Grid.Column>
                            <Grid.Column>
                                {buildTable("Set 2", character.equipment[1], [], [], 'center')}
                            </Grid.Column>
                        </Grid>
                            </Grid.Column>
                            <Grid.Column>
                            <Segment className={theme.theme} style={{float: 'right'}}>
                                {buildPassive(character.unique, true)}
                        </Segment>
                            </Grid.Column>
                        </Grid>
                    </Segment>
                </Grid.Column>
            </Grid.Row>
            <Grid.Column className='mobile only' >
            <Segment className={theme.theme}>
            <div style={{position: 'absolute', top: '21%', left: '8%'}}>
                    <Image src={require(`./assets/icons/attack.png`)} className={theme.theme} width={12} height={12} style={{marginBottom: '3px'}}/>
                    <Image src={require(`./assets/icons/defense.png`)} className={theme.theme} width={12} height={12} style={{marginBottom: '3px'}}/>
                    <Image src={require(`./assets/icons/hp.png`)} className={theme.theme} width={12} height={12} style={{marginBottom: '3px'}}/>
                    <Image src={require(`./assets/icons/pierce.png`)} className={theme.theme} width={12} height={12} style={{marginBottom: '3px'}}/>
                    <Image src={require(`./assets/icons/resist.png`)} className={theme.theme} width={12} height={12} style={{marginBottom: '3px'}}/>
                    <Image src={require(`./assets/icons/regen.png`)} className={theme.theme} width={12} height={12} style={{marginBottom: '3px'}}/>
                    <Image src={require(`./assets/icons/crit.png`)} className={theme.theme} width={12} height={12} style={{marginBottom: '3px'}}/>
                    <Image src={require(`./assets/icons/crit.png`)} className={theme.theme} width={12} height={12} style={{marginBottom: '3px'}}/>
                    <Image src={require(`./assets/icons/crit_dmg.png`)} className={theme.theme} width={12} height={12} style={{marginBottom: '3px'}}/>
                    <Image src={require(`./assets/icons/crit_res.png`)} className={theme.theme} width={12} height={12} style={{marginBottom: '3px'}}/>
                    <Image src={require(`./assets/icons/crit_def.png`)} className={theme.theme} width={12} height={12} style={{marginBottom: '3px'}}/>
                    <Image src={require(`./assets/icons/recovery.png`)} className={theme.theme} width={12} height={12} style={{marginBottom: '3px'}}/>
                    <Image src={require(`./assets/icons/lifesteal.png`)} className={theme.theme} width={12} height={12} style={{marginBottom: '3px'}}/>
                </div>
                <ReactECharts option={bar} style={{height: '100%', minHeight: '320px'}}/>
            </Segment>
            </Grid.Column>
        </Grid>
        <Divider />

        <Grid columns='equal' stackable>
            <Grid.Row stretched>
                <Grid.Column width={5}>
                    <Segment className={theme.theme}>
                        <Header>CC: {calcCC().toLocaleString("en-US")}</Header>
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
                        {character.ultimate.length > 1 && buildSkill(character.ultimate[1], 6, true)}
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

            {character.birthday != null &&
            <Grid.Row stretched>
                <Grid.Column>
                    <Segment className={theme.theme}>
                        Birthday: {character.birthday.toLocaleDateString('default', {month: 'long', day: 'numeric'})}
                    </Segment>
                </Grid.Column>
            </Grid.Row>
            }
            {character.group.length > 0 &&
            <Grid.Row stretched>
                <Grid.Column>
                    <Segment className={theme.theme}>
                        <Header as='h1' textAlign="center" className={theme.theme} >
                            Characteristics
                        </Header>
                        {character.group.length> 0 &&
                            <>
                                <Header as='h3' textAlign="center" className={theme.theme}>
                                    {character.group[0].name}
                                </Header>
                                {buildAssoc(character.group[0].members)}
                            </>
                        }
                        {character.group.length> 1 &&
                            <>
                                <Header as='h3' textAlign="center" className={theme.theme}>
                                    {character.group[1].name}
                                </Header>
                                {buildAssoc(character.group[1].members)}
                            </>
                        }
                    </Segment>
                </Grid.Column>
            </Grid.Row>
            }
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
            <Grid columns='equal' stackable>
                <Grid.Row stretched>
                    <Grid.Column>
                        <Image src={skill.image} floated='left' centered rounded height={265}/>
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
            <Grid columns='equal' stackable>
                <Grid.Row>
                    <Grid.Column>
                        <span style={{display: 'inline-block'}}>
                            <Image src={skill.image} floated='left' rounded height={265}/>
                            <Image src={require(`./assets/icons/icon_type_${skill.type}.png`)} style={{position: 'absolute', top: '200px'}} className={theme.theme} width={64} height={64} />
                        </span>
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
                            <Table.Cell style={{textAlign: text_align}}>{(data[index]).toLocaleString("en-US")}</Table.Cell>
                        </Table.Row>
                    )
                }
            } else {
                content.push(
                    <Table.Row>
                        {header.length > 0 && <Table.Cell rowSpan={data[index].length}>{header[index]}</Table.Cell>}
                        <Table.Cell style={{textAlign: text_align}}>{(data[index]).toLocaleString("en-US")}</Table.Cell>
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
          <Segment clearing as={Link} style={{display:'block'}}to={`../${character.title}+${character.name}`} className={theme.theme}>
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

function buildPassive(passive: any, vertical: boolean) {
    if (vertical) {
        return(
            <ThemeContext.Consumer>
            {(theme) => (
                <Grid columns='equal'>
                  <Grid.Row stretched>
                      <Grid.Column>
                            <Image src={passive.image} centered rounded />
                            <div className={theme.theme} style={{position: 'absolute', left: '50%', top: '80%'}}>
                                <Image src={passive.conditions[0]} floated='left' className={theme.theme} width={24} height={24} />
                                <Image src={passive.conditions[1]} floated='left' className={theme.theme} width={24} height={24} />
                            </div>
                      </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                      <Grid.Column>
                          <Table compact size='small' className={theme.theme}>
                              <Table.Header>
                                  <Table.Row>
                                    <Table.HeaderCell colSpan='2'>
                                        {passive.name}
                                    </Table.HeaderCell>
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
                                    <Table.HeaderCell colSpan='1'>
                                        <Image src={passive.image} centered rounded />
                                        <div className={theme.theme} style={{position: 'absolute', left: '50%', top: '80%'}}>
                                            <Image src={passive.conditions[0]} floated='left' className={theme.theme} width={24} height={24} />
                                            <Image src={passive.conditions[1]} floated='left' className={theme.theme} width={24} height={24} />
                                        </div>
                                    </Table.HeaderCell>
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
                        <Image src={passive.image} centered rounded />
                        <div className={theme.theme} style={{position: 'absolute', left: '50%', top: '80%'}}>
                            <Image src={passive.conditions[0]} floated='left' className={theme.theme} width={24} height={24} />
                            <Image src={passive.conditions[1]} floated='left' className={theme.theme} width={24} height={24} />
                        </div>
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


export function getCharacter(title: string, name: string) {
    let character: ICharacter|null = null;
    database.forEach(element => {
        if( element.title.toLowerCase() === title.toLowerCase() && 
            element.name.toLowerCase() === name.toLowerCase()) {
                character = element;
            }
    })

    return character ?? null;
}

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
function PrintJson (data: any) {
    return (<div>{JSON.stringify(data, null, 2)}</div>);
}