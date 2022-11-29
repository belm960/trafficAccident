import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { apiUrl } from 'src/environments/environment';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  id:any;
  
  accidentType:any;
  accident:any;
  additionalInfo:any;
  addressLocation:any;
  city:any;
  dateCreated:any;
  dateOfAccident:any;
  dateUpdated:any;
  latitude:any;
  legalRoadSpeedKmh:any;
  logitude:any;
  numberOfModerateInjury:any;
  numberOfDeath:any;
  numberOfMajorInjury:any;
  numberOfMinorInjury:any;
  numberOfPeopleInvolved:any;
  numberOfVehiclesInvolved:any;
  region:any;
  reportingOfficerName:any;
  reportingOfficerPhone:any;
  reportingOfficerStataion:any;
  roadClassification:any;
  roadCondition:any;
  roadType:any;
  timeOfAccident:any;
  uknownInjury:any;
  updatedBy:any;
  weatherDuringAccident:any;
  constructor( private http: HttpClient, private actRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.actRoute.params.subscribe(params => {
      this.id =params['id']; // (+) converts string 'id' to a number         
      console.log("The id in the url"+this.id);
    });


    this.getAccident();
   
         
  }
  updateaccident(form : any){
    const rooturl = apiUrl+'/trafficaccidentanalysis/accident/update/';      
    this.http.put(rooturl + this.id,form).subscribe(data => {        
     this.accident = data; 
     this.router.navigate(['/theme/accidentlist'])
     
           
      console.log(this.accident);              
 });


  }
  getAccident(): void {    
    const rooturl = apiUrl+'/trafficaccidentanalysis/accident/accident/';      
    this.http.get(rooturl + this.id).subscribe(data => {         
      this.accident = data; 
      this.accidentType = this.accident.accidentType;
      this.additionalInfo = this.accident.additionalInfo;
      this.addressLocation = this.accident.addressLocation;
      this.city = this.accident.city;
      this.dateCreated = this.accident.dateCreated;
      this.dateOfAccident = this.accident.dateOfAccident;
      this.dateUpdated = this.accident.dateUpdated;
      this.latitude = this.accident.latitude;
      this.legalRoadSpeedKmh = this.accident.legalRoadSpeedKmh;
      this.logitude = this.accident.logitude;
      this.numberOfModerateInjury = this.accident.numberOfModerateInjury;
      this.numberOfDeath = this.accident.numberOfDeath;
      this.numberOfMajorInjury = this.accident.numberOfMajorInjury;
      this.numberOfMinorInjury = this.accident.numberOfMinorInjury;
      this.numberOfPeopleInvolved = this.accident.numberOfPeopleInvolved;
      this.numberOfVehiclesInvolved = this.accident.numberOfVehiclesInvolved;
      this.region = this.accident.region;
      this.reportingOfficerName = this.accident.reportingOfficerName;
      this.reportingOfficerPhone = this.accident.reportingOfficerPhone;
      this.reportingOfficerStataion = this.accident.reportingOfficerStataion;
      this.roadClassification = this.accident.roadClassification;
      this.roadCondition = this.accident.roadCondition;
      this.roadType = this.accident.roadType;
      this.timeOfAccident = this.accident.timeOfAccident;
      this.uknownInjury = this.accident.uknownInjury;
      this.updatedBy = this.accident.updatedBy;
      this.weatherDuringAccident = this.accident.weatherDuringAccident;
             
       console.log(this.accident);              
  });

  }

  
}
