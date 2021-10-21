import {Component, OnInit} from '@angular/core';
import {Actor} from '../actor.model';
import {ActorService} from '../actor.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-actor-create',
  templateUrl: './actor-create.component.html',
  styleUrls: ['./actor-create.component.css']
})
export class ActorCreateComponent implements OnInit {

  actor: Actor = {
    name: ''
  };

  constructor( private actorService: ActorService,
               private router: Router) {
  }

  ngOnInit(): void {
  }

  createActor(): void {
    this.actorService.create(this.actor)
      .subscribe(() => {
        this.actorService.showMessage('Ator cadastrado com sucesso!');
        this.router.navigate(['/actor']);
      });
  }

  cancel(): void {
    this.router.navigate(['/actor']);
  }
}
