import {ActorCreateComponent} from './components/actor/actor-create/actor-create.component';
import {ActorCrudComponent} from './views/actor-crud/actor-crud.component';
import {ProductUpdateComponent} from './components/product/product-update/product-update.component';
import {ProductCreateComponent} from './components/product/product-create/product-create.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './views/home/home.component';
import {ProductCrudComponent} from './views/product-crud/product-crud.component';
import {ActorUpdateComponent} from './components/actor/actor-update/actor-update.component';
import {DirectorCreateComponent} from './components/director/director-create/director-create.component';
import {DirectorUpdateComponent} from './components/director/director-update/director-update.component';
import {DirectorCrudComponent} from './views/director-crud/director-crud.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
},
  {
    path: 'products',
    component: ProductCrudComponent
  },
  {
    path: 'products/create',
    component: ProductCreateComponent
  },
  {
    path: 'products/update/:id',
    component: ProductUpdateComponent
  },
  {
    path: 'actor',
    component: ActorCrudComponent
  },
  {
    path: 'actor/create',
    component: ActorCreateComponent
  },
  {
    path: 'actor/update/:id',
    component: ActorUpdateComponent
  },
  {
    path: 'director',
    component: DirectorCrudComponent
  },
  {
    path: 'director/create',
    component: DirectorCreateComponent
  },
  {
    path: 'director/update/:id',
    component: DirectorUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
