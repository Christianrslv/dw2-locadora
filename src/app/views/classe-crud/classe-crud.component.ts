import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-classe-crud',
  templateUrl: './classe-crud.component.html',
  styleUrls: ['./classe-crud.component.css']
})
export class ClasseCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToClasseCreate(): void{
    this.router.navigate(['/classe/create']);
  }
}
