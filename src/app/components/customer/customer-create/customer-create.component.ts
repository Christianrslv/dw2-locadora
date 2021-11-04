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

  customer: Customer = {
    name: '',
    numInscricao: '',
    dtNascimento: '',
    sexo: '',
    estahAtivo: true,
    cpf: '',
    endereco: '',
    tel: ''
  };

  constructor(private customerService: CustomerService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  createCustomer(): void {
    this.customerService.create(this.customer)
      .subscribe(() => {
        this.customerService.showMessage('Cliente cadastrada com sucesso!');
        this.router.navigate(['/customer']);
      });
  }

  cancel(): void {
    this.router.navigate(['/customer']);
  }
}
