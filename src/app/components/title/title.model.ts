import {Actor} from '../actor/actor.model';
import {Director} from '../director/director.model';
import {Classe} from '../classe/classe.model';

export interface Title {
  id?: number;
  name: string;
  year: string;
  synopsis: string;
  category: string;
  actors: Actor[];
  director: Director;
  classe: Classe;
}
