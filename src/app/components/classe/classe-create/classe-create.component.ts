import {Component, OnInit} from '@angular/core';
import {Classe} from '../classe.model';
import {ClasseService} from '../classe.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-classe-create',
  templateUrl: './classe-create.component.html',
  styleUrls: ['./classe-create.component.css']
})
export class ClasseCreateComponent implements OnInit {

  classe: Classe = {
    name: '',
    value: 0,
    returnDate: ''
  };

  constructor(private classeService: ClasseService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  createActor(): void {
    this.classeService.create(this.classe)
      .subscribe(() => {
        this.classeService.showMessage('Classe cadastrada com sucesso!');
        this.router.navigate(['/classe']);
      });
  }

  cancel(): void {
    this.router.navigate(['/actor']);
  }
}
