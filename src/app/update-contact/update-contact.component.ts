import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {
  
  updatecontactForm:FormGroup;

  constructor(private formBuilder:FormBuilder, private contactService:ContactService, private router:Router) { }

  ngOnInit() {
    this.updatecontactForm=this.formBuilder.group({
      id:[''],
      firstname:['', Validators.required],
      lastname:['', Validators.required],
      email:['',[Validators.required, Validators.email]],
      message:['', Validators.required]
    });

    const id=localStorage.getItem('contactId');
    if(+id>0){
      this.contactService.getContactById(+id).subscribe(contact =>{
        this.updatecontactForm.patchValue(contact);
      });
    }
  }
  updateTheContact()
  {
    this.contactService.updateContact(this.updatecontactForm.value).subscribe( u => {
      this.router.navigate(['/contacts']);
  });
}
}
