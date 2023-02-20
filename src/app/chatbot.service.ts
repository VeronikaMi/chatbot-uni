import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API: string = 'https://rulebased-chatbot.herokuapp.com';

@Injectable()
export class ChatbotService {
  constructor(private http: HttpClient) {}

  // public getInitMessage(): Observable<any> {
  //   return this.http.get(`${API}/introMessage`);
  // }

  // public getSelections(): Observable<any> {
  //   return this.http.get(`${API}/selectedQuestions`);
  // }

  // public getResponse(formData: FormData): Observable<any> {
  //   return this.http.post(API, formData);
  // }
}
