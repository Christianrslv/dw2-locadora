import {Title} from '../title/title.model';

export interface Item {
  id?: number;
  numSerie: number;
  dtAcquisition: string;
  typeItem: string;
  title: Title;
}
