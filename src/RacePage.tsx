import { Component } from "react";

import { database } from "./database/_database";
import { ThemeContext } from './theme/theme-context';
import DatabaseComponent from "./DatabaseComponent";
import ICharacter from "./database/characters/_ICharacter";

const data: ICharacter[] = [];

class RacePage extends Component<{race?: string}> {

    constructor(props: any) {
        super(props);
        this.build(props.race);
    }
    
    build(race: string) {
        data.length = 0;
        
        // eslint-disable-next-line
        database.filter(character => character.race === race).map(character => {
            data.push(character);
        });

        data.sort((n1,n2) => {
          let a = n1.sort.toLowerCase();
          let b = n2.sort.toLowerCase();
  
          if(a < b) return -1;
          if(a > b) return 1;
          return 0;
        });
    }

    render() {
      return(
        <ThemeContext.Consumer>
            {(theme) => (
            <>
                <DatabaseComponent database={data} gridSize={3} filterName={true} filterAttribute={true}/>
            </>
            )}
        </ThemeContext.Consumer>
     );
    }
}

export default RacePage;