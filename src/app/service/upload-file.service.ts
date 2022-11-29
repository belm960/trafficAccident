import { HttpClient, HttpEvent, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { apiUrl } from 'src/environments/environment';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/Media' })
  };
@Injectable({
    providedIn: 'root'
  })
  export class UploadFileService {
   
    
    constructor(private http: HttpClient) { }
    
    pushFileToStorage(file: File,id:any): Observable<HttpEvent<{}>> {
      const formdata: FormData = new FormData();
  
      formdata.append('file', file);
  
      const req = new HttpRequest('POST', apiUrl+'/api/file/upload/' + id, formdata, {
        reportProgress: true,
        responseType: 'text'
      });
  
      return this.http.request(req);
    }
  
    getFiles(imagename : string): Observable<any> {
      return this.http.get(apiUrl+'/api/file/' + imagename,{ ...httpOptions, responseType: 'text' });
    }
  }
  