import {Component, OnInit} from '@angular/core';
import {Item} from '../item.model';
import {ItemService} from '../item.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '../../title/title.model';
import {TitleService} from '../../title/title.service';

@Component({
  selector: 'app-item-update',
  templateUrl: './item-update.component.html',
  styleUrls: ['./item-update.component.css']
})
export class ItemUpdateComponent implements OnInit {
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

  constructor(private itemService: ItemService,
              private titleService: TitleService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.itemService.readById(id).subscribe(item => {
      this.item = item;
    });
    this.titleService.read()
      .subscribe(
        titles => this.titles = titles,
        error => console.log('Erro titles')
      );
  }

  updateItem(): void {
    this.itemService.update(this.item).subscribe(() => {
      this.itemService.showMessage('Item alterada com sucesso!');
      this.router.navigate(['/item']);
    });
  }

  cancel(): void {
    this.router.navigate(['/item']);
  }
}
