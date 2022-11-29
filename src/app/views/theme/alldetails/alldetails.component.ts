import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray } from '@angular/forms';
import { apiUrl } from 'src/environments/environment';


@Component({
  selector: 'app-alldetails',
  templateUrl: './alldetails.component.html',
  styleUrls: ['./alldetails.component.scss']
})
export class AlldetailsComponent implements OnInit {
id:any;
vehicle:any;
motorist:any;
accidentform: any;

  constructor(private http: HttpClient, private actRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.getAccident(this.id);
    
  }
  VehicleUpdate(vehicleId:any){

    this.router.navigate(['/theme/editvehicle',vehicleId]).then(e => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
     });

}
MotoristUpdate(motoristid:any){

  this.router.navigate(['/theme/editmotorist',motoristid]).then(e => {
    if (e) {
      console.log("Navigation is successful!");
    } else {
      console.log("Navigation has failed!");
    }
   });

}
PIVUpdate(personid:any){

  this.router.navigate(['/theme/editpersoninvehicle',personid]).then(e => {
    if (e) {
      console.log("Navigation is successful!");
    } else {
      console.log("Navigation has failed!");
    }
   });

}
PedastrianUpdate(pedastrianid:any){

  this.router.navigate(['/theme/editpedastrian',pedastrianid]).then(e => {
    if (e) {
      console.log("Navigation is successful!");
    } else {
      console.log("Navigation has failed!");
    }
   });

}
  deletemotorist(id:any): void {
    console.log("*******Id  to delete" + id)
    const rooturl = apiUrl+'/trafficaccidentanalysis/motorist/delete';   
     this.http.delete(rooturl + '/' + id).toPromise()
      window.location.reload()
     
     
//      .subscribe(data => {        
//       //  this.motorist = data;
//       //this.getAccident(this.id);
      
//                   
//         })
  }
  deletepiv(id:any): void {
    console.log("*******Id  to delete" + id)
    const rooturl = apiUrl+'/trafficaccidentanalysis/personinvehicle/delete';   
     this.http.delete(rooturl + '/' + id).toPromise()
      window.location.reload()
     
 
  }
  deleteped(id:any): void {
    console.log("*******Id  to delete" + id)
    const rooturl = apiUrl+'//trafficaccidentanalysis/pedastrian/delete/';   
     this.http.delete(rooturl + '/' + id).toPromise()
      window.location.reload()
     
 
  }
  deletevehicle(id:any): void {
    console.log("*******Id  to delete" + id)
    const rooturl = apiUrl+'//trafficaccidentsanalysis/vehicle/delete/';   
     this.http.delete(rooturl + '/' + id).toPromise()
      window.location.reload()
     
 
  }
  

  getAccident(id:any): void {    
    const rooturl = apiUrl+'/trafficaccidentanalysis/accident/vehicles';   
     this.http.get(rooturl + '/' + id).subscribe(data => {        
       this.vehicle = data;
      
                  
        })
  }

}
