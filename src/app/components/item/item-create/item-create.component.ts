import {Component, OnInit} from '@angular/core';
import {Item} from '../item.model';
import {Title} from '../../title/title.model';
import {TitleService} from '../../title/title.service';
import {Router} from '@angular/router';
import {ItemService} from '../item.service';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {
  classe = {
    id: 12,
    name: 'teste',
    value: 14,
    returnDate: ''
  };

  director = {
    id: 5,
    name: 'TESDASDASDASD'
  };

  titulau: Title = {
    name: 'AIAIAIAIAI',
    year: '',
    synopsis: '',
    category: '',
    actors: [],
    director: this.director,
    classe: this.classe
  };

  item: Item = {
    id: 1,
    typeItem: '',
    dtAcquisition: '',
    numSerie: 0,
    title: this.titulau
  };

  titles: Title[] = [this.titulau];

  constructor(private titleService: TitleService,
              private itemService: ItemService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.titleService.read()
      .subscribe(
        titles => this.titles = titles,
        error => console.log('Erro titles')
      );
  }

  createItem(): void {
    console.log(this.item);
    this.itemService.create(this.item)
      .subscribe(() => {
        this.itemService.showMessage('Item cadastrado com sucesso!');
        this.router.navigate(['/item']);
      });
  }

  cancel(): void {
    this.router.navigate(['/item']);
  }
}
