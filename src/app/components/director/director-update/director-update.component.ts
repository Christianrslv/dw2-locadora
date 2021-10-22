import {Component, OnInit} from '@angular/core';
import {Director} from '../director.model';
import {ActivatedRoute, Router} from '@angular/router';
import {DirectorService} from '../director.service';

@Component({
  selector: 'app-director-update',
  templateUrl: './director-update.component.html',
  styleUrls: ['./director-update.component.css']
})
export class DirectorUpdateComponent implements OnInit {

  director: Director;

  constructor(private directorService: DirectorService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.directorService.readById(id).subscribe(director => {
      this.director = director;
    });
  }

  updateDirector(): void {
    this.directorService.update(this.director).subscribe(() => {
      this.directorService.showMessage('Diretor alterado com sucesso!');
      this.router.navigate(['/director']);
    });
  }

  cancel(): void {
    this.router.navigate(['/director']);
  }
}
