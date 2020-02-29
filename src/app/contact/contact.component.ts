import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactService } from 'services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  contactForm:FormGroup;

  constructor(private formBuilder: FormBuilder, private contactService:ContactService) { }

  ngOnInit() {
    this.contactForm=this.formBuilder.group({
      id:[''],
      firstname:['', Validators.required],
      lastname:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      message:['', Validators.required]    

    });
  }
  addContact()
    {
      this.contactService.saveContact(this.contactForm.value).subscribe(data => {
        console.log("Contact inserted successfully");
  
  });

}
}
