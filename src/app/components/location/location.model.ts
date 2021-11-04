import {Item} from '../item/item.model';
import {Customer} from '../customer/customer.model';

export interface LocationModel {
  id?: number;
  dtLocacao: string;
  dtDevolucaoPrevista: string;
  dtDevolucaoEfetiva: string;
  valorCobrado: number;
  multaCobrada: number;
  item: Item;
  customer: Customer;
}
