import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-director-crud',
  templateUrl: './director-crud.component.html',
  styleUrls: ['./director-crud.component.css']
})
export class DirectorCrudComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  navigateToDirectorCreate(): void {
    this.router.navigate(['/director/create']);
  }
}
