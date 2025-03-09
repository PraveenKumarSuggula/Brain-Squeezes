import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class QandAService {
  private baseUrl: string = 'https://localhost:7184/api/';
  constructor(private http: HttpClient) {} 

  // Upload Files with form Data
  UploadDocumentData(document: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}FileUpload/`, document).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  GetSelectedDocumentData(type: string, file_id: string): Observable<any> {
    let documentReq = { Type: type, file_id: file_id };
    return this.http.post(`${this.baseUrl}FileUpload/fileDetails`, documentReq).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  getQandAList(type: string, uid: number): Observable<any> {
    let documentReq = { type: type, uid: +uid };
    return this.http.post(`${this.baseUrl}QandA/GetQandAList`, documentReq).pipe(
      map((response: any) => {
        return response;
      })
    );
  }
}
