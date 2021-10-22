import {Component, OnInit} from '@angular/core';
import {Director} from '../director.model';
import {ActorService} from '../../actor/actor.service';
import {Router} from '@angular/router';
import {DirectorService} from '../director.service';

@Component({
  selector: 'app-director-create',
  templateUrl: './director-create.component.html',
  styleUrls: ['./director-create.component.css']
})
export class DirectorCreateComponent implements OnInit {

  director: Director = {
    name: ''
  };

  constructor(private directorService: DirectorService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  createDiretor(): void {
    this.directorService.create(this.director)
      .subscribe(() => {
        this.directorService.showMessage('Diretor cadastrado com sucesso!');
        this.router.navigate(['/director']);
      });
  }

  cancel(): void {
    this.router.navigate(['/director']);
  }
}
