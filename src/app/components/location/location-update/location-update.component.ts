import { Component, OnInit } from '@angular/core';
import {Title} from '../../title/title.model';
import {Item} from '../../item/item.model';
import {Customer} from '../../customer/customer.model';
import {LocationModel} from '../location.model';
import {Actor} from '../../actor/actor.model';
import {Director} from '../../director/director.model';
import {Classe} from '../../classe/classe.model';
import {ItemService} from '../../item/item.service';
import {CustomerService} from '../../customer/customer.service';
import {LocationService} from '../location.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-location-update',
  templateUrl: './location-update.component.html',
  styleUrls: ['./location-update.component.css']
})
export class LocationUpdateComponent implements OnInit {

  classe = {
    id: 12,
    name: 'teste',
    value: 14,
    returnDate: ''
  };
  classe2 = {
    id: 12,
    name: 'DOISSSSSS',
    value: 26,
    returnDate: ''
  };

  actor1 = {
    id: 3,
    name: 'um'
  };
  actor2 = {
    id: 4,
    name: 'dois'
  };

  director = {
    id: 5,
    name: 'TESDASDASDASD'
  };
  director2 = {
    id: 5,
    name: 'DOIS'
  };

  title: Title = {
    name: '',
    year: '',
    synopsis: '',
    category: '',
    actors: [],
    director: this.director,
    classe: this.classe
  };

  item: Item = {
    numSerie: 0,
    dtAcquisition: '',
    typeItem: 'TESTE',
    title: this.title
  };

  customer: Customer = {
    name: 'Cliente teste',
    numInscricao: '',
    dtNascimento: '',
    sexo: '',
    estahAtivo: true,
    cpf: '',
    endereco: '',
    tel: '',
  };

  location: LocationModel = {
    dtLocacao: '',
    dtDevolucaoPrevista: '',
    dtDevolucaoEfetiva: '',
    valorCobrado: 0,
    multaCobrada: 0,
    item: this.item,
    customer: this.customer
  };

  actors: Actor[] = [this.actor1, this.actor2];
  directors: Director[] = [this.director, this.director2];
  classes: Classe[] = [this.classe, this.classe2];
  items: Item[] = [this.item];
  customers: Customer[] = [this.customer];

  constructor(private itemService: ItemService,
              private customerService: CustomerService,
              private locationService: LocationService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.locationService.readById(id).subscribe(location => {
      this.location = location;
    });
    this.itemService.read()
      .subscribe(
        items => this.items = items,
        error => console.log('Erro Items')
      );
    this.customerService.read()
      .subscribe(
        customers => this.customers = customers,
        error => console.log('Erro Customers')
      );
  }

  updateLocation(): void {
    this.locationService.update(this.location).subscribe(() => {
      this.locationService.showMessage('Locacao alterada com sucesso!');
      this.router.navigate(['/location']);
    });
  }

  cancel(): void {
    this.router.navigate(['/location']);
  }
}
