// import { NgModule } from '@angular/core';
// import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { ItemListComponent } from './item-list/item-list.component';
// import { FormsModule } from '@angular/forms';
// import { FormComponent } from './form/form.component';
// import { ReactiveFormsModule } from '@angular/forms';
// import { RegistrationTableComponent } from './registration-table/registration-table.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     ItemListComponent,
//     FormComponent,
//     RegistrationTableComponent,
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     FormsModule,
//     ReactiveFormsModule, 
//   ],
//   providers: [
//     provideClientHydration()
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http'; // Import HttpClientModule and HttpClient
import { FormService } from './form.service'; // Import FormService
import { RegistrationTableComponent } from './registration-table/registration-table.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { LoginComponent } from './login/login.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    FormComponent,
    RegistrationTableComponent,
    UserEditComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
    ToastrModule.forRoot({
      timeOut: 5000, // Time limit in milliseconds (5 seconds)
      positionClass: 'toast-top-right', // Position of the toastr notification
      preventDuplicates: true, // Prevent duplicate toasts
      closeButton: true, // Show close button
      progressBar: true // Show progress bar
    }),
  ],
  providers: [
    FormService, 
    ToastrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
