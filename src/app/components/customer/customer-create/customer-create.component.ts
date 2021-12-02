import {Component, OnInit} from '@angular/core';
import {Customer} from '../customer.model';
import {CustomerService} from '../customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  dependente: Customer = {
    name: '',
    numInscricao: '',
    dtNascimento: '',
    sexo: '',
    estahAtivo: true,
    cpf: '',
    endereco: '',
    tel: ''
  };

  socio: Customer = {
    name: '',
    numInscricao: '',
    dtNascimento: '',
    sexo: '',
    estahAtivo: true,
    cpf: '',
    endereco: '',
    tel: ''
  };

  socios: Customer[] = [this.socio];

  constructor(private customerService: CustomerService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.customerService.read()
      .subscribe(
        socios => this.socios = socios,
        error => console.log('Erro Socios')
      );
  }

  createSocio(): void {
    this.customerService.createSocio(this.socio)
      .subscribe(() => {
        this.customerService.showMessage('Cliente cadastrada com sucesso!');
        this.router.navigate(['/customer']);
      });
  }

  createDependente(): void {
    this.customerService.createDependente(this.dependente)
      .subscribe(() => {
        this.customerService.showMessage('Cliente cadastrada com sucesso!');
        this.router.navigate(['/customer']);
      });
  }

  cancel(): void {
    this.router.navigate(['/customer']);
  }
}
