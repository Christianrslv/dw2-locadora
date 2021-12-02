import {Component, OnInit} from '@angular/core';
import {Customer} from '../customer.model';
import {CustomerService} from '../customer.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {
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

  dependente: Customer = {
    name: '',
    numInscricao: '',
    dtNascimento: '',
    sexo: '',
    estahAtivo: true,
    cpf: '',
    endereco: '',
    tel: '',
    socio: this.socio
  };

  socios: Customer[] = [this.socio];

  constructor(private customerService: CustomerService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.customerService.read()
      .subscribe(
        socios => {
          this.socios = socios;
          this.getCliente();
        },
        error => console.log('Erro Socios')
      );

  }

  getCliente(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.customerService.readById(id).subscribe(customer => {
      this.socio = customer;
      if (!this.socio.cpf) {
        this.dependente = this.socio;
      }
      console.log(this.socio);
    });
  }

  updateSocio(): void {
    this.customerService.updateSocio(this.socio)
      .subscribe(() => {
        this.customerService.showMessage('Cliente atualizado com sucesso!');
        this.router.navigate(['/customer']);
      });
  }

  updateDependente(): void {
    this.customerService.updateDependente(this.dependente)
      .subscribe(() => {
        this.customerService.showMessage('Cliente atualizado com sucesso!');
        this.router.navigate(['/customer']);
      });
  }

  cancel(): void {
    this.router.navigate(['/customer']);
  }
}
