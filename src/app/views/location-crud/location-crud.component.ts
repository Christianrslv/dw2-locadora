import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-location-crud',
  templateUrl: './location-crud.component.html',
  styleUrls: ['./location-crud.component.css']
})
export class LocationCrudComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  navigateToLocationCreate(): void{
    this.router.navigate(['/location/create']);
  }
}
