import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: "root"
})
export class ContactService {
  httpUrl = "http://localhost:3000/contacts/"
  constructor(private httpClient: HttpClient) {}
  getAllContacts(): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>(this.httpUrl);
  }
  saveContact(contact: Contact): Observable<Contact[]> {
    return this.httpClient.post<Contact[]>(this.httpUrl, contact);
  }
  deleteContact(id: number): Observable<Contact[]> {
    return this.httpClient.delete<Contact[]>(this.httpUrl);
  }
  updateContact(contact: Contact): Observable<Contact[]> {
    return this.httpClient.put<Contact[]>(this.httpUrl, contact);
  }
  getContactById(id: number): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>(this.httpUrl);
  }
}
