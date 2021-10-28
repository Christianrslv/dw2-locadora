import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-title-crud',
  templateUrl: './title-crud.component.html',
  styleUrls: ['./title-crud.component.css']
})
export class TitleCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToTitleCreate(): void{
    this.router.navigate(['/title/create']);
  }

}
