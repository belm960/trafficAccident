import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { from } from 'rxjs';
import { apiUrl } from 'src/environments/environment';

@Component({
  selector: 'app-vehiclelist',
  templateUrl: './vehiclelist.component.html',
  styleUrls: ['./vehiclelist.component.scss']
})
export class VehiclelistComponent implements OnInit {
  id:any;
  accident:any;
  vehicle:any;
  constructor(private http: HttpClient, private actRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.getAccident(this.id);
  }
  getAccident(id:any): void {    
    const rooturl = apiUrl+'/trafficaccidentanalysis/accident/vehicles';      
     this.http.get(rooturl + '/' + id).subscribe(data => {        
      this.vehicle = data;        
       console.log(this.vehicle);                    
        })
   }

   
}
