import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { apiUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccidentService {

  constructor( private http:HttpClient) { }

  public getAccident(accident: any){
    return this.http.get(apiUrl+"/trafficaccidentanalysis/accident/getall");
 

  }
}
