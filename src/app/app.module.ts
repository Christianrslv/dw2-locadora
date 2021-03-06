import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './components/template/header/header.component';
import {FooterComponent} from './components/template/footer/footer.component';
import {NavComponent} from './components/template/nav/nav.component';
import {ForDirective} from './directives/for.directive';
import {ProductCreateComponent} from './components/product/product-create/product-create.component';
import {ProductCrudComponent} from './views/product-crud/product-crud.component';
import {GrayDirective} from './directives/gray.directive';
import {HomeComponent} from './views/home/home.component';
import {ProductReadComponent} from './components/product/product-read/product-read.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {A11yModule} from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {OverlayModule} from '@angular/cdk/overlay';
import {ProductRead2Component} from './components/product/product-read2/product-read2.component';
import {ProductUpdateComponent} from './components/product/product-update/product-update.component';
import {ActorCrudComponent} from './views/actor-crud/actor-crud.component';
import {ActorCreateComponent} from './components/actor/actor-create/actor-create.component';
import {ActorReadComponent} from './components/actor/actor-read/actor-read.component';
import {ActorUpdateComponent} from './components/actor/actor-update/actor-update.component';
import {ActorDeleteComponent} from './components/actor/actor-delete/actor-delete.component';
import {DirectorCreateComponent} from './components/director/director-create/director-create.component';
import {DirectorReadComponent} from './components/director/director-read/director-read.component';
import {DirectorUpdateComponent} from './components/director/director-update/director-update.component';
import {DirectorDeleteComponent} from './components/director/director-delete/director-delete.component';
import {DirectorCrudComponent} from './views/director-crud/director-crud.component';
import {ClasseCrudComponent} from './views/classe-crud/classe-crud.component';
import {ClasseCreateComponent} from './components/classe/classe-create/classe-create.component';
import {ClasseDeleteComponent} from './components/classe/classe-delete/classe-delete.component';
import {ClasseUpdateComponent} from './components/classe/classe-update/classe-update.component';
import {ClasseReadComponent} from './components/classe/classe-read/classe-read.component';
import {TitleCrudComponent} from './views/title-crud/title-crud.component';
import {TitleCreateComponent} from './components/title/title-create/title-create.component';
import {TitleReadComponent} from './components/title/title-read/title-read.component';
import {TitleDeleteComponent} from './components/title/title-delete/title-delete.component';
import {TitleUpdateComponent} from './components/title/title-update/title-update.component';
import {ItemCrudComponent} from './views/item-crud/item-crud.component';
import {ItemCreateComponent} from './components/item/item-create/item-create.component';
import {ItemDeleteComponent} from './components/item/item-delete/item-delete.component';
import {ItemReadComponent} from './components/item/item-read/item-read.component';
import {ItemUpdateComponent} from './components/item/item-update/item-update.component';
import {CustomerCrudComponent} from './views/customer-crud/customer-crud.component';
import {CustomerCreateComponent} from './components/customer/customer-create/customer-create.component';
import {CustomerDeleteComponent} from './components/customer/customer-delete/customer-delete.component';
import {CustomerReadComponent} from './components/customer/customer-read/customer-read.component';
import {CustomerUpdateComponent} from './components/customer/customer-update/customer-update.component';
import {LocationCrudComponent} from './views/location-crud/location-crud.component';
import { LocationCreateComponent } from './components/location/location-create/location-create.component';
import { LocationReadComponent } from './components/location/location-read/location-read.component';
import { LocationDeleteComponent } from './components/location/location-delete/location-delete.component';
import { LocationUpdateComponent } from './components/location/location-update/location-update.component';



@NgModule({
  exports: [
    MatSidenavModule,
    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    GrayDirective,
    ForDirective,
    ProductCreateComponent,
    ProductReadComponent,
    ProductRead2Component,
    ProductUpdateComponent,
    ActorCrudComponent,
    ActorCreateComponent,
    ActorReadComponent,
    ActorUpdateComponent,
    ActorDeleteComponent,
    DirectorCreateComponent,
    DirectorReadComponent,
    DirectorUpdateComponent,
    DirectorDeleteComponent,
    DirectorCrudComponent,
    ClasseCrudComponent,
    ClasseCreateComponent,
    ClasseDeleteComponent,
    ClasseUpdateComponent,
    ClasseReadComponent,
    TitleCrudComponent,
    TitleCreateComponent,
    TitleReadComponent,
    TitleDeleteComponent,
    TitleUpdateComponent,
    ItemCrudComponent,
    ItemCreateComponent,
    ItemDeleteComponent,
    ItemReadComponent,
    ItemUpdateComponent,
    CustomerCrudComponent,
    CustomerCreateComponent,
    CustomerDeleteComponent,
    CustomerReadComponent,
    CustomerUpdateComponent,
    LocationCrudComponent,
    LocationCreateComponent,
    LocationReadComponent,
    LocationDeleteComponent,
    LocationUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
