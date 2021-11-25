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

  customer: Customer;

  constructor(private customerService: CustomerService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.customerService.readById(id).subscribe(customer => {
      this.customer = customer;
    });
  }

  updateCustomer(): void {
    this.customerService.update(this.customer).subscribe(() => {
      this.customerService.showMessage('Cliente alterado com sucesso!');
      this.router.navigate(['/customer']);
    });
  }

  cancel(): void {
    this.router.navigate(['/customer']);
  }
}
