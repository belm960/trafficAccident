import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from 'src/environments/environment';

@Component({
  selector: 'app-editvehicle',
  templateUrl: './editvehicle.component.html',
  styleUrls: ['./editvehicle.component.scss']
})
export class EditvehicleComponent implements OnInit {
  id:any;
  
  vehicle:any;
  vehiclecolor: any;
  vehiclemake : any;
  vehiclemodel:any;
  vehicleowner:any;
  vehicleplatenumber:any;
  vehicletype:any;
  vehicleyear:any;
  vehiclevin:any;
  vehiclespeed:any;
  vehiclemanner:any;
  accidentposition:any;
  additionalinfo:any;


  constructor(private http: HttpClient, private actRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.actRoute.params.subscribe(params => {
      this.id =params['id']; // (+) converts string 'id' to a number         
      console.log("The id in the url"+this.id);
    });


    this.getVehicle(this.id);
   
         
  }
  updatevehicle(form : any){
    const rooturl = apiUrl+'/trafficaccidentsanalysis/vehicle/update/';      
    this.http.put(rooturl + this.id,form).subscribe(data => {        
     this.vehicle = data; 
     this.router.navigate(['/theme/accidentlist'])
     
           
      console.log(this.vehicle);              
 });


  }
  getVehicle(id : any): void {    
    const rooturl = apiUrl+'/trafficaccidentsanalysis/vehicle/vehicles/';      
     this.http.get(rooturl + this.id).subscribe(data => {        
      this.vehicle = data; 
      this.vehiclecolor = this.vehicle.color;
      this.vehiclemake = this.vehicle.make;
      this.vehiclemodel = this.vehicle.model;
      this.vehicleowner = this.vehicle.vehicleOwner;
      this.vehicletype = this.vehicle.vehicleType;
      this.vehicleplatenumber = this.vehicle.plateNumber;
      this.vehicleyear = this.vehicle.year;
      this.vehiclevin = this.vehicle.vin;
      this.vehiclespeed = this.vehicle.vehicle_speed_before_accident_KMh;
      this.vehiclemanner = this.vehicle.mannerOfCollision;
      this.accidentposition = this.vehicle.accidentPosition;
      this.additionalinfo = this.vehicle.additionalInfo;
            
       console.log(this.vehicle);              
  });

  }

  
}

