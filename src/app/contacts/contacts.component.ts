import { Component, OnInit } from '@angular/core';
import { Contact } from 'data-source/models/contact';
import { FormBuilder, Validators } from '@angular/forms';
import { ContactService } from 'services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactsComponent implements OnInit {
  
  contacts:Contact[];
  constructor(private formBuilder:FormBuilder, private contactService:ContactService, private router:Router) { }

  ngOnInit() {
    this.contactService.getAllContacts().subscribe(data => {
      this.contacts = data;
    });
  }
  deleteContact(id:number){
    this.contactService.deleteContact(id).subscribe(data =>{
      this.contacts=this.contacts.filter(contact => contact.id!==id);
    });
    
    }
  updateContact(contact:Contact)
  {
    localStorage.removeItem('contactId');
    localStorage.setItem('contactId',contact.id.toString());
    this.router.navigate(['/update-contact']);
  }


  }


