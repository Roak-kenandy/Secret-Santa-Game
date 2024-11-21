import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  uploadFiles(formData: FormData){
    return this.http.post(`${this.apiUrl}/assignments`, formData);
  }
}
