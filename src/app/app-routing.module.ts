import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { ContactsComponent } from './contacts/contacts.component';


const routes: Routes = [
  {path:"", component:ContactComponent},
  {path:"contact", component:ContactComponent},
  {path:"contacts", component:ContactsComponent},
  {path: "update-contact", component:UpdateContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
