import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyModuleModule } from './lazy-module.module';

const routes: Routes = [
  { path: '', component: LazyModuleModule }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyModuleRoutingModule { }
