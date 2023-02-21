import ICharacter from './_ICharacter';
import Passive from '../passives/Curse of Purgatory';

class Character implements ICharacter {
    image = require('../../assets/characters/[Cursed Shackles] Purgatory Meliodas/portrait.png');
    name = "Purgatory Meliodas";
    title = "Cursed Shackles";
    attribute = "Dark";
    rarity = "SSR";
    race = "Demon";
    equipment = [
        ["HP","Attack"],
        ["Defense","Crit Damage"]
    ]
    basic = [
        680,        
        395,        
        6700,       
        95,         
        45,         
        10,         
        90,         
        180,        
        80,         
        70,         
        105,        
        15          
    ]
    stats = [
        6018,       
        3732,       
        60965,      
        95,         
        45,         
        10,         
        90,         
        80,         
        80,         
        70,         
        105,        
        15
    ]
    awakening = [
        [ 
            0,      
            0,      
            2100,   
            0,      
            0,      
            0,      
            0,      
            0,      
            3,      
            0,      
            4.5,    
            0       
        ],
        [ 
            360,    
            144,    
            0,      
            0,      
            0,      
            0,      
            0,      
            10,     
            0,      
            0,      
            0,      
            0       
        ],
        [ 
            0,      
            0,      
            2800,   
            0,      
            0,      
            3,      
            0,      
            0,      
            0,      
            7.5,    
            0,      
            0       
        ],
        [ 
            480,    
            192,    
            0,      
            0,      
            0,      
            0,      
            4,      
            0,      
            0,      
            0,      
            0,      
            0       
        ],
        [ 
            0,      
            0,      
            3500,   
            0,      
            4.5,    
            0,      
            0,      
            0,      
            0,      
            0,      
            0,      
            3       
        ],
        [ 
            600,      
            240,      
            0,      
            6,      
            0,      
            0,      
            0,      
            0,      
            0,      
            0,      
            0,      
            0       
        ]
    ]
    superawakening = [
        [ 
            0,      
            0,      
            6250,   
            0,      
            0,      
            0,      
            0,      
            0,      
            12,     
            0,      
            12,     
            0       
        ],
        [ 
            180,    
            160,    
            0,      
            0,      
            0,      
            0,      
            0,      
            20,     
            0,      
            0,      
            0,      
            0       
        ],
        [ 
            0,      
            0,      
            8750,   
            0,      
            0,      
            40,     
            0,      
            0,      
            0,      
            12,     
            0,      
            0       
        ],
        [ 
            540,    
            480,    
            0,      
            0,      
            0,      
            0,      
            15,     
            0,      
            0,      
            0,      
            0,      
            0       
        ],
        [ 
            0,      
            0,      
            0,      
            15,     
            0,      
            0,      
            0,      
            10,     
            0,      
            12,     
            0,      
            0       
        ],
        [ 
            360,    
            320,    
            12000,  
            0,      
            0,      
            0,      
            0,      
            0,      
            0,      
            0,      
            0,      
            0       
        ]
    ]
    skills = [
        require('../skills/Pierce and Strike'),
        require('../skills/Chain Slash')
    ]
    ultimate = [
        require('../skills/Trillion Dark')
    ]
    unique = new Passive();
    association = [];
    gender = 'Male';
    blood = 'B';
    age = '3000+';
    height = '152 cm';
    weight = '50 kg';
    birthday: Date = new Date(0, 6, 25);
    
    food = [];
    gift = [];
}

export default Character;