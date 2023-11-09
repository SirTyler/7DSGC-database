import { Component } from "react";

import { ThemeContext } from './theme/theme-context';
import { database } from "./database/_database";
import { Type } from "./database/passives/_IPassive";
import ICharacter from "./database/characters/_ICharacter";
import DatabaseComponent from "./DatabaseComponent";

let init = false;
const data: ICharacter[] = [];

class Page extends Component {

    constructor(props: any) {
        super(props);
        if(!init) {
            this.build();
            init = true;
        }
    }
    
    build() {
        data.length = 0;
        database.filter(character => character.unique.conditions.includes(Type.SUB)).map(character => {
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
                <DatabaseComponent database={data} gridSize={2} filter={true} />
            </>
            )}
        </ThemeContext.Consumer>
     );
    }
}

export default Page;