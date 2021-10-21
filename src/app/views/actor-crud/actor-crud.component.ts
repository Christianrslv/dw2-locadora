import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actor-crud',
  templateUrl: './actor-crud.component.html',
  styleUrls: ['./actor-crud.component.css']
})
export class ActorCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToActorCreate(): void{
    this.router.navigate(['/actor/create']);
  }

}
