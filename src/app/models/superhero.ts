import { Appearance } from './appearance';
import { Biography } from './biography';
import { Connections } from './connections';
import { Images } from './images';
import { Powerstats } from './powerstats'; 
import { Work } from './work';

export interface Superhero {
    id: number;
    name: string;
    slug: string;
    powerstats:Powerstats;
    appearance:Appearance;
    biography:Biography;
    work:Work;
    connections:Connections;
    images:Images;
    
}
