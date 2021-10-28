import {Component, OnInit} from '@angular/core';
import {Classe} from '../classe.model';
import {ClasseService} from '../classe.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-classe-update',
  templateUrl: './classe-update.component.html',
  styleUrls: ['./classe-update.component.css']
})
export class ClasseUpdateComponent implements OnInit {

  classe: Classe;

  constructor(private classeService: ClasseService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.classeService.readById(id).subscribe(classe => {
      this.classe = classe;
    });
  }

  updateClasse(): void {
    this.classeService.update(this.classe).subscribe(() => {
      this.classeService.showMessage('Classe alterada com sucesso!');
      this.router.navigate(['/classe']);
    });
  }

  cancel(): void {
    this.router.navigate(['/classe']);
  }
}
