import { Component, OnInit } from '@angular/core';
import {TitleService} from '../title.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '../title.model';
import {ActorService} from '../../actor/actor.service';
import {DirectorService} from '../../director/director.service';
import {ClasseService} from '../../classe/classe.service';
import {Actor} from '../../actor/actor.model';
import {Director} from '../../director/director.model';
import {Classe} from '../../classe/classe.model';

@Component({
  selector: 'app-title-update',
  templateUrl: './title-update.component.html',
  styleUrls: ['./title-update.component.css']
})
export class TitleUpdateComponent implements OnInit {
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

  actors: Actor[] = [this.actor1, this.actor2];
  directors: Director[] = [this.director, this.director2];
  classes: Classe[] = [this.classe, this.classe2];

  constructor(private titleService: TitleService,
              private actorService: ActorService,
              private directorService: DirectorService,
              private classeService: ClasseService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.titleService.readById(id).subscribe(title => {
      this.title = title;
    });
    this.actorService.read()
      .subscribe(
        actors => this.actors = actors,
        error => console.log('Erro actors')
      );
    this.directorService.read()
      .subscribe(
        directors => this.directors = directors,
        error => console.log('Erro directors')
      );
    this.classeService.read()
      .subscribe(
        classes => this.classes = classes,
        error => console.log('Erro classes')
      );
  }

  updateTitle(): void {
    this.titleService.update(this.title).subscribe(() => {
      this.titleService.showMessage('Title alterado com sucesso!');
      this.router.navigate(['/title']);
    });
  }

  cancel(): void {
    this.router.navigate(['/title']);
  }
}
