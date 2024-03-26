import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationTableComponent } from './registration-table/registration-table.component';
import { FormComponent } from './form/form.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { ItemListComponent } from './item-list/item-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'lazy', loadChildren: () => import('./lazy-module/lazy-module.module').then(m => m.LazyModuleModule) },
  { path: 'registration-table', component: RegistrationTableComponent },
  { path: 'form', component: FormComponent },
  { path: 'edit/:id', component: UserEditComponent },
  {path:'item', component: ItemListComponent},
  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
